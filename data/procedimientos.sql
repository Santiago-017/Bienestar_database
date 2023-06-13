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
grant execute on PROCEDURE actualizarEstadoConvocatoria to "estudiante";

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
grant execute on PROCEDURE eliminarProgramaGAI to "estudiante";

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
use bienestar;
create role if not exists "estudiante";

-- Creación procedimiento del rol estudiante que muestra los datos del hijo del usuario, si tiene
drop  procedure if exists sp_estudiante_ver_informacion_hijo;


DELIMITER $$
CREATE PROCEDURE sp_estudiante_ver_informacion_hijo(IN p_username VARCHAR(255))
BEGIN
  
    DECLARE student_id INT;
    
    SET student_id = CAST(p_username AS unsigned);
    
    -- Verificar si el estudiante tiene hijos
    IF (SELECT COUNT(*) FROM Infante WHERE idPadre_o_Madre = student_id) > 0 THEN
        -- Obtener información de los hijos del estudiante actual
        SELECT perId,perNombre, InfanteEdad,perLocalidad
        FROM Infante join persona on(IdInfante=perId)
        WHERE idPadre_o_Madre = student_id;
    ELSE
        SELECT 'No tienes hijos registrados.';
    END IF;
    
    
END;
$$
DELIMITER ;

grant execute on PROCEDURE sp_estudiante_ver_informacion_hijo to "estudiante";
drop user if exists "1"@"localhost";
create user "1"@"localhost" identified by "1234";
grant "estudiante" to "1"@"localhost";

SET DEFAULT ROLE ALL TO '1'@'localhost';

-- Procedimiento para rol estudiante que muestra la inscripcion de su hijo al iparm, si tiene
drop  procedure if exists sp_estudiante_ver_registroIparm_hijo;
DELIMITER $$
CREATE PROCEDURE sp_estudiante_ver_registroIparm_hijo(IN p_username VARCHAR(255))
BEGIN
  
    DECLARE student_id INT;
    
    SET student_id = CAST(p_username AS unsigned);
    
    -- Verificar si el estudiante tiene hijos
    IF (SELECT COUNT(*) FROM inscripcióniparm join infante on(Infante_IdInfante=IdInfante) WHERE idPadre_o_Madre = student_id) > 0 THEN
        -- Obtener información de los hijos del estudiante actual
        SELECT Infante_IdInfante,perNombre,InfanteEdad,Grado,Estado,FechaIngreso
        FROM inscripcióniparm join infante on(Infante_IdInfante=IdInfante) join persona on(IdInfante=perId)
        WHERE idPadre_o_Madre = student_id;
    ELSE
        SELECT 'No tienes hijos inscritos en el iparm';
    END IF;
END;
$$
DELIMITER ;
grant execute on PROCEDURE sp_estudiante_ver_registroIparm_hijo to "estudiante";
drop user if exists "1"@"localhost";
create user "1"@"localhost" identified by "1234";
grant "estudiante" to "1"@"localhost";
-- show grants for "1"@"localhost";
-- show grants for "estudiante";

drop  procedure if exists sp_editar_datos_hijo;


DELIMITER $$
CREATE PROCEDURE sp_editar_datos_hijo(IN p_userhijo VARCHAR(255),IN direccion VARCHAR(255),IN barrio VARCHAR(255),IN ciudad VARCHAR(255),IN tipoVivienda VARCHAR(255),IN localidad VARCHAR(255),IN entidadSalud VARCHAR(255))
BEGIN
  
    DECLARE student_id INT;
    
    SET student_id = CAST(p_userhijo AS unsigned);
    
    -- Verificar si el estudiante tiene hijos
    IF (SELECT COUNT(*) FROM persona WHERE perID = student_id) > 0 THEN
        -- Obtener información de los hijos del estudiante actual
        update persona set perDireccion=direccion,perBarrio=barrio,perCiudad=ciudad,perTipoVivienda=tipoVivienda,perLocalidad=localidad,perEntidadSalud=entidadSalud where perID=student_id;
    ELSE
        SELECT 'No tienes hijos registrados.';
    END IF;
    
    
END;
$$
DELIMITER ;
drop  procedure if exists sp_obtener_datos_hijo;

DELIMITER $$
CREATE PROCEDURE sp_obtener_datos_hijo(IN p_userhijo VARCHAR(255),OUT nombre VARCHAR(255),OUT apellido VARCHAR(255), OUT p_direccion VARCHAR(255), OUT p_barrio VARCHAR(255), OUT p_ciudad VARCHAR(255), OUT p_tipoVivienda VARCHAR(255), OUT p_localidad VARCHAR(255), OUT p_entidadSalud VARCHAR(255))
BEGIN
    DECLARE student_id INT;
    
    SET student_id = CAST(p_userhijo AS unsigned);
    
    -- Verificar si el estudiante tiene hijos
    IF (SELECT COUNT(*) FROM persona WHERE perID = student_id) > 0 THEN
        -- Obtener información de los hijos del estudiante actual
        SELECT perNombre,perApellido,perDireccion, perBarrio, perCiudad, perTipoVivienda, perLocalidad, perEntidadSalud
        INTO nombre,apellido,p_direccion, p_barrio, p_ciudad, p_tipoVivienda, p_localidad, p_entidadSalud
        FROM persona
        WHERE perID = student_id;
    ELSE
		SET nombre = NULL;
        SET apellido= NULL;
        SET p_direccion = NULL;
        SET p_barrio = NULL;
        SET p_ciudad = NULL;
        SET p_tipoVivienda = NULL;
        SET p_localidad = NULL;
        SET p_entidadSalud = NULL;
        SELECT 'No tienes hijos registrados.'; -- Este mensaje se devuelve cuando no hay hijos registrados
    END IF;
END
$$
DELIMITER 
grant execute on PROCEDURE sp_editar_datos_hijo to "estudiante";
grant execute on PROCEDURE sp_obtener_datos_hijo to "estudiante";
SET DEFAULT ROLE ALL TO '1'@'localhost';

#----------------------------------------------------------
#            Sebastian
#---------------------------------------------------------

DROP PROCEDURE IF EXISTS sp_fecharangoActAI;
DROP PROCEDURE IF EXISTS pa_fecharangoAsesoria;
DROP PROCEDURE IF EXISTS sp_actividades_disponiblesAI;
DROP PROCEDURE IF EXISTS sp_proyectos_estudiantiles;
DROP PROCEDURE IF EXISTS sp_convocatorias_disponiblesPC;
DROP PROCEDURE IF EXISTS sp_inscripcionConv;
DROP PROCEDURE IF EXISTS sp_eliminarInscripcionConv;
DROP PROCEDURE IF EXISTS sp_comprobar_inscripcionConv;
DROP PROCEDURE IF EXISTS sp_asesorias_usuario;
DROP PROCEDURE IF EXISTS sp_asesorias_Disponibles;
DROP PROCEDURE IF EXISTS sp_cancelarAsesoria;
DROP PROCEDURE IF EXISTS sp_agendarAsesoria;

#La siguiente función retorna el número de participantes de alguna actividad
DROP FUNCTION IF EXISTS	fc_cantParticipantes;
DELIMITER $$
CREATE FUNCTION fc_cantParticipantes(actID INT)  RETURNS INT READS SQL DATA DETERMINISTIC
BEGIN
	DECLARE participantes INT;
	SET participantes = (SELECT COUNT(EstudianteID) FROM ParticipacionActividadAI WHERE ActividadID = actID);
	
    RETURN participantes;
END $$
DELIMITER ;

#El siguiente procedimiento muestra las actividades que se realizaron (o realizarán) en un intervalo de fechas
DELIMITER $$
CREATE PROCEDURE sp_fecharangoActAI(fecha_min DATETIME, fecha_max DATETIME)
BEGIN
	SELECT * FROM actividadai where actFecha >= fecha_min AND actFecha <= fecha_max;
END $$
DELIMITER ;


#El siguiente procedimiento muestra las asesorías que se realizaron en un intervalo de fechas
DELIMITER $$
CREATE PROCEDURE pa_fecharangoAsesoria(fecha_min DATETIME, fecha_max DATETIME)
BEGIN
	SELECT * FROM asesoria where asFecha >= fecha_min AND asFecha <= fecha_max;
END $$
DELIMITER ;


#Consultar actividades disponibles
DELIMITER $$
CREATE procedure sp_actividades_disponiblesAI()
BEGIN
	select * from vw_actividadesdisponiblesAI;
END $$
DELIMITER ;

#Consultar proyectos estudiantiles
DELIMITER $$
CREATE procedure sp_proyectos_estudiantiles()
BEGIN
	select * from vw_gruposproyectosest;
END $$
DELIMITER ;

#Consultar convocatorias de Promotores de Convivencia disponibles
DELIMITER $$
CREATE procedure sp_convocatorias_disponiblesPC()
BEGIN
	select * from vw_convocatoria_PC;
END $$
DELIMITER ;

#Realizar inscripción a convocatoria de Promotores de Convivencia
DELIMITER $$
CREATE procedure sp_inscripcionConv(usID INT, convID INT)
BEGIN
	DECLARE msg varchar(255);
	IF NOT EXISTS ( SELECT 1 FROM estudiante_toma_convocatoria WHERE idEst = usID AND conv_id = convID) THEN
		INSERT INTO estudiante_toma_convocatoria(idEst, conv_id, fecha) VALUES (usID, convID, now());
        UPDATE convocatoriapromotorconvivencia SET pcPostulados = pcPostulados+1 WHERE convocatoriapromotorconvivencia.convID = convID;
    ELSE
		SET msg = concat("Ya se encuentra inscrito en la convocatoria");
		SIGNAL sqlstate '45000' SET message_text = msg;
    END IF;
END $$
DELIMITER ;

#Cancelar inscripción a convocatoria de Promotores de Convivencia
DELIMITER $$
CREATE procedure sp_eliminarInscripcionConv(usID INT, convID INT)
BEGIN
	DECLARE msg varchar(255);
    DECLARE fecha DATETIME;
    
	IF NOT EXISTS ( SELECT 1 from estudiante_toma_convocatoria WHERE idEst = usID AND conv_id = convID) THEN
		SET msg = concat("No se encuentra la inscripción.");
		SIGNAL sqlstate '45000' SET message_text = msg;
	ELSEIF EXISTS ( SELECT 1 from estudiante_toma_convocatoria WHERE idEst = usID AND conv_id = convID) THEN
		SET fecha = (select convFechaCierre from convocatoria WHERE conv_id = convID);
	END IF;
    
	IF (curdate()<=fecha) THEN
		DELETE FROM estudiante_toma_convocatoria WHERE idEst = usID AND conv_id = convID;
        UPDATE convocatoriapromotorconvivencia SET pcPostulados = pcPostulados-1 WHERE convocatoriapromotorconvivencia.convID = convID;
	ELSE
		SET msg = concat("La inscripción es de una convocatoria antigua, no puede ser eliminada.");
		SIGNAL sqlstate '45000' SET message_text = msg;
    END IF;
END $$
DELIMITER ; 

#Comprobar inscripción a convocatorias de Promotores de Convivencia
DELIMITER $$
CREATE procedure sp_comprobar_inscripcionConv(usID INT)
BEGIN
	DECLARE msg varchar(255);
	IF NOT EXISTS ( SELECT 1 from estudiante_toma_convocatoria join convocatoria using(conv_id) WHERE idEst = usID and convNombre = "Promotores de Convivencia") THEN
		SET msg = concat("No se ha inscrito a ninguna convocatoria");
		SIGNAL sqlstate '45000' SET message_text = msg;
    ELSE
		select * from vw_convocatorias_aplicadas where perID = usID and convNombre = "Promotores de Convivencia";
    END IF;
END $$
DELIMITER ;

#Consultar asesorías tomadas/agendadas por el usuario
DELIMITER $$
CREATE procedure sp_asesorias_usuario(usID INT)
BEGIN
	select * from vw_asesorias_usuario  WHERE EstudianteID=usID;
END $$
DELIMITER ;

#Comprobar asesorías disponibles
DELIMITER $$
CREATE procedure sp_asesorias_Disponibles()
BEGIN
	select * from vw_asesorias_Disponibles;
END $$
DELIMITER ;

#Cancelar asesorías agendadas por el usuario (siempre que no haya pasado la fecha)
DELIMITER $$
CREATE procedure sp_cancelarAsesoria(usID INT, as_ID INT)
BEGIN
	DECLARE msg varchar(255);
    DECLARE fecha DATETIME;
	DECLARE tipo mediumtext;
    DECLARE area varchar(45);
    DECLARE lugar varchar(45);
    DECLARE pID int;
    DECLARE aID int;
    
	IF NOT EXISTS ( SELECT 1 from vw_asesorias_usuario WHERE EstudianteID = usID and asID = as_ID) THEN
		SET msg = concat("No se encuentra la asesoría.");
		SIGNAL sqlstate '45000' SET message_text = msg;
	ELSEIF EXISTS ( SELECT 1 from vw_asesorias_usuario WHERE EstudianteID = usID and asID = as_ID) THEN
		SET fecha = (select asFecha from vw_asesorias_usuario WHERE EstudianteID = usID and asID = as_ID);
	END IF;
    
    IF (curdate()<=fecha) THEN
    
		SET tipo = (SELECT asTipo FROM asesoria WHERE asID = as_ID);
		SET area = (SELECT asArea FROM asesoria WHERE asID = as_ID);
		SET fecha = (SELECT asFecha FROM asesoria WHERE asID = as_ID);
		SET lugar = (SELECT asLugar FROM asesoria WHERE asID = as_ID);
		SET pID = (SELECT ProgramaID FROM asesoria WHERE asID = as_ID);
		SET aID = (SELECT AsesorID FROM asesoria WHERE asID = as_ID);
        
        INSERT INTO asesoriaDisponible(asTipo, asArea, asFecha, asLugar, ProgramaID, AsesorID) values (tipo, area, fecha, lugar, pID, aID);
		
        DELETE FROM asesoria WHERE EstudianteID = usID and asID = as_ID;
        
	ELSE
		SET msg = concat("La asesoría es antigua, no puede ser cancelada.");
		SIGNAL sqlstate '45000' SET message_text = msg;
    END IF;
END $$
DELIMITER ;

#Agendar una de las asesorías disponibles
DELIMITER $$
CREATE procedure sp_agendarAsesoria(usID INT, asD_ID INT)
BEGIN
    
    DECLARE tipo mediumtext;
    DECLARE area varchar(45);
    DECLARE fecha datetime;
    DECLARE lugar varchar(45);
    DECLARE pID int;
    DECLARE aID int;
    
    SET tipo = (SELECT asTipo FROM asesoriaDisponible WHERE asDID = asD_ID);
    SET area = (SELECT asArea FROM asesoriaDisponible WHERE asDID = asD_ID);
    SET fecha = (SELECT asFecha FROM asesoriaDisponible WHERE asDID = asD_ID);
    SET lugar = (SELECT asLugar FROM asesoriaDisponible WHERE asDID = asD_ID);
    SET pID = (SELECT ProgramaID FROM asesoriaDisponible WHERE asDID = asD_ID);
    SET aID = (SELECT AsesorID FROM asesoriaDisponible WHERE asDID = asD_ID);
    
	INSERT INTO asesoria(asTipo, asArea, asFecha, asLugar, ProgramaID, EstudianteID, AsesorID) values (tipo, area, fecha, lugar, pID, usID, aID);
    
    DELETE FROM asesoriaDisponible WHERE asDID = asD_ID;
    
END $$
DELIMITER ;

grant execute on FUNCTION fc_cantParticipantes to "estudiante";
grant execute on PROCEDURE sp_fecharangoActAI to "estudiante";
grant execute on PROCEDURE pa_fecharangoAsesoria to "estudiante";
grant execute on PROCEDURE sp_actividades_disponiblesAI to "estudiante";
grant execute on PROCEDURE sp_proyectos_estudiantiles to "estudiante";
grant execute on PROCEDURE sp_convocatorias_disponiblesPC to "estudiante";
grant execute on PROCEDURE sp_inscripcionConv to "estudiante";
grant execute on PROCEDURE sp_eliminarInscripcionConv to "estudiante";
grant execute on PROCEDURE sp_comprobar_inscripcionConv to "estudiante";
grant execute on PROCEDURE sp_asesorias_usuario to "estudiante";
grant execute on PROCEDURE sp_asesorias_Disponibles to "estudiante";
grant execute on PROCEDURE sp_cancelarAsesoria to "estudiante";
grant execute on PROCEDURE sp_agendarAsesoria to "estudiante";