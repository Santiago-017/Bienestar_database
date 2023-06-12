#------------------------------------------------------------------------------------------
#         Procedimientos
#-----------------------------------------------------------------------------------------


#----------------------------------------------------------------------------------------
#             Santiago
#----------------------------------------------------------------------------------------
#Se crea un procedimento para cambiar el estado de las convocatorias que ya caducaron
Drop procedure if exists actualizarEstadoConvocatoria;
DELIMITER //
CREATE PROCEDURE actualizarEstadoConvocatoria()
BEGIN
    DECLARE fecha_actual DATE;
    -- Obtener la fecha actual
    SET fecha_actual = CURDATE();
    UPDATE convocatoria
    SET convEstado = 0
    WHERE convFechaCierre < fecha_actual;
END //
DELIMITER ;
grant execute on PROCEDURE actualizarEstadoConvocatoria to "administrador";

#El siguiente proceso elimina el programa de Grupo Artistico institucional y todas las convocatorias relacionadas.
#Este proceso puede ser util para hacer modificaciones a todo el programa sin perder la información de los grupos artisticos
Drop procedure if exists eliminarProgramaGAI;
DELIMITER //
CREATE PROCEDURE eliminarProgramaGAI(
    IN programaID INT
)
BEGIN
    DECLARE IDConvocatoria int;
    SELECT conv_id into IDConvocatoria from convocatoria where programaID = Programa_progID ;
    DELETE FROM convocatoriagai where IDConvocatoria = Convocatoria_conv_id;
    DELETE FROM grupoartisticoinstitucional where programaID = progID;
    DELETE FROM convocatoria WHERE programaID = Programa_progID;
    DELETE FROM programa WHERE programaID = progID;
    
END //
DELIMITER ;
grant execute on PROCEDURE eliminarProgramaGAI to "administrador";

#El siguiente procedimiento muestra la convocatoria que se repete más veces, lo cual puede ser interesante para un estudiante que busca entrar a un programa de manera más segura
drop procedure if exists contarElementos;
DELIMITER //
CREATE PROCEDURE contarElementos()
BEGIN
    DECLARE max_elemento VARCHAR(255);
    DECLARE max_cantidad INT;
    DROP TABLE if exists tmp_elementos;
    CREATE TEMPORARY TABLE tmp_elementos (
        convocatoria VARCHAR(255),
        cantidad INT
    );
    
    INSERT INTO tmp_elementos
    SELECT convNombre, COUNT(*) AS cantidad
    FROM convocatoria
    GROUP BY convNombre;
    
    SELECT convocatoria, cantidad INTO max_elemento, max_cantidad
    FROM tmp_elementos
    ORDER BY cantidad DESC
    LIMIT 1;
    
    SELECT max_elemento, max_cantidad;
END //

DELIMITER ;
grant execute on PROCEDURE contarElementos to "administrador";
grant execute on PROCEDURE contarElementos to "estudiante";

drop procedure if exists datosGrupo;
Delimiter //
create procedure datosGrupo()
Begin
select grupoId,Nombre_grupo, Disciplina, Requerimiento_Tecnico, Nombre_convocatoria from vw_convocatoriaPorGAI;
End //
Delimiter ;
grant execute on PROCEDURE datosGrupo to "estudiante";

drop procedure if exists datosCursos;
Delimiter //
create procedure datosCursos()
Begin
select Nombre, Horario, categoria, cucHorario from vw_cursosculturales;
End //
Delimiter ;
grant execute on PROCEDURE datosCursos to "estudiante";

drop procedure if exists convocatorias;
Delimiter //
create procedure convocatorias()
Begin
select convId, convNombre, FechaApertura, FechaCierre from vw_convocatoriascultura;
End //
Delimiter ;
grant execute on PROCEDURE convocatorias to "estudiante";

#--------------------------------------------------------------------------------------------------------
#                  Tomás
#--------------------------------------------------------------------------------------------------------
drop  procedure if exists sp_estudiante_ver_informacion_hijo;

DELIMITER $$
CREATE PROCEDURE sp_estudiante_ver_informacion_hijo(IN p_username VARCHAR(255))
BEGIN
  
    DECLARE student_id INT;
    
    SET student_id = CAST(SUBSTRING_INDEX(p_username, '@', 1) AS unsigned);
    
    -- Verificar si el estudiante tiene hijos
    IF (SELECT COUNT(*) FROM Infante WHERE idPadre_o_Madre = student_id) > 0 THEN
        -- Obtener información de los hijos del estudiante actual
        SELECT perNombre, InfanteEdad
        FROM Infante join persona on(IdInfante=perId)
        WHERE idPadre_o_Madre = student_id;
    ELSE
        SELECT 'No tienes hijos registrados.';
    END IF;
    
    
END;
$$
DELIMITER ;
grant execute on PROCEDURE sp_estudiante_ver_informacion_hijo to "administrador";
grant execute on PROCEDURE sp_estudiante_ver_informacion_hijo to "estudiante";
-- Procedimiento para rol estudiante que muestra la inscripcion de su hijo al iparm, si tiene
DELIMITER $$
CREATE PROCEDURE sp_estudiante_ver_registroIparm_hijo(IN p_username VARCHAR(255))
BEGIN
  
    DECLARE student_id INT;
    
    SET student_id = CAST(SUBSTRING_INDEX(p_username, '@', 1) AS unsigned);
    
    -- Verificar si el estudiante tiene hijos
    IF (SELECT COUNT(*) FROM inscripcióniparm join infante on(Infante_IdInfante=IdInfante) WHERE idPadre_o_Madre = student_id) > 0 THEN
        -- Obtener información de los hijos del estudiante actual
        SELECT *
        FROM inscripcióniparm join infante on(Infante_IdInfante=IdInfante)
        WHERE idPadre_o_Madre = student_id;
    ELSE
        SELECT 'No tienes hijos inscritos en el iparm';
    END IF;
END;
$$
DELIMITER ;
grant execute on PROCEDURE sp_estudiante_ver_registroIparm_hijo to "estudiante";
grant execute on PROCEDURE sp_estudiante_ver_registroIparm_hijo to "administrador";

#----------------------------------------------------------
#            Sebastian
#---------------------------------------------------------
#La siguiente función retorna el número de participantes de alguna actividad
DELIMITER $$

CREATE FUNCTION fc_cantParticipantes(actID INT)  RETURNS INT READS SQL DATA DETERMINISTIC
BEGIN
	DECLARE participantes INT;
	SET participantes = (SELECT COUNT(EstudianteID) FROM ParticipacionActividadAI WHERE ActividadID = actID);
	
    RETURN participantes;
END $$

DELIMITER ;
grant execute on PROCEDURE fc_cantParticipantes to "administrador";

#El siguiente procedimiento muestra las actividades que se realizaron (o realizarán) en un intervalo de fechas
DELIMITER $$
CREATE PROCEDURE pa_fecharangoActAI(fecha_min DATETIME, fecha_max DATETIME)
BEGIN
	SELECT * FROM actividadai where actFecha >= fecha_min AND actFecha <= fecha_max;
END $$
DELIMITER ;
grant execute on PROCEDURE pa_fecharangoActAI to "administrador";


#El siguiente procedimiento muestra las asesorías que se realizaron en un intervalo de fechas
DELIMITER $$
CREATE PROCEDURE pa_fecharangoAsesoria(fecha_min DATETIME, fecha_max DATETIME)
BEGIN
	SELECT * FROM asesoria where asFecha >= fecha_min AND asFecha <= fecha_max;
END $$
DELIMITER ;
grant execute on PROCEDURE pa_fecharangoAsesoria to "administrador";