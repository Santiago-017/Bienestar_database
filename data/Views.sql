use Bienestar;
#----------------------------------------------------------------------
#                       Santiago 
#----------------------------------------------------------------------

#Vista para acceder a la información de las convocatorias por grupo artistico institucional
drop view if exists vw_convocatoriaPorGAI;
create view vw_convocatoriaPorGAI as 
select bienestar.grupoartisticoinstitucional.GAI_id as GrupoID, bienestar.grupoartisticoinstitucional.gaiNombre as Nombre_grupo, bienestar.grupoartisticoinstitucional.gaiDisciplina as Disciplina,
bienestar.grupoartisticoinstitucional.gaiRequerimientoTecnico as Requerimiento_Tecnico, bienestar.convocatoria.convNombre as Nombre_convocatoria,
bienestar.convocatoria.convEstado as Estado
from ((bienestar.grupoartisticoinstitucional join bienestar.convocatoriagai on bienestar.grupoartisticoinstitucional.GAI_id = bienestar.convocatoriagai.GrupoArtisticoInstitucional_GAI_id)
join bienestar.convocatoria on bienestar.convocatoriagai.Convocatoria_conv_id = bienestar.convocatoria.conv_id);

select * from vw_convocatoriaPorGAI;

drop view if exists vw_convocatoriasCultura;
create view vw_convocatoriasCultura as select bienestar.convocatoria.conv_id as convId, bienestar.convocatoria.convNombre as convNombre,
bienestar.convocatoria.convFechaApertura as FechaApertura, bienestar.convocatoria.convFechaCierre as FechaCierre 
from bienestar.convocatoria where bienestar.convocatoria.convEstado = 1 and (bienestar.convocatoria.Programa_progID = 3 or bienestar.convocatoria.Programa_progID = 4);

drop view if exists vw_cursosCulturales;
create view vw_cursosCulturales as select bienestar.cursocultural.curidCursoCultural as cursoId, bienestar.cursocultural.cucNombre as Nombre, bienestar.cursocultural.cucHorario,
bienestar.cursocultural.cucLugar as Horario, bienestar.cursocultural.cucCategoria as categoria, bienestar.cursocultural.cucObjetivo 
from bienestar.cursocultural;

select * from vw_cursosCulturales;

select * from vw_convocatoriasCultura;

-- Tomás ---------
-- Creación vistas --
-- Tabla para administradores
drop view if exists vw_direcciónIparm ;
create view vw_direcciónIparm as select 
Infante_IdInfante as Infante, Grado, Estado,FechaIngreso,FechaEgreso  from inscripcióniparm;
select * from vw_direcciónIparm;

-- Vistas para mamá estudiante
create view vw_userAna as select * from persona where perId=1;
select * from vw_userAna;
drop view if exists vw_childAna ;
create view vw_childAna as select perId as IdInfante,perNombre as Nombre, perApellido as Apellido,InfanteEdad as Edad,
 perDireccion as Direccion, perBarrio as Barrio,perCiudad, perTipoVivienda,perLocalidad,perEmail,
 perEntidadSalud,perProcedencia,perSede,PerFacultad from 
 persona join infante on(perId=IdInfante) where perId=1000;
 
 create view vw_inscripChildAna as select * from inscripcióniparm where Infante_IdInfante=1000;
 
 -- Tomás
 
#----------------------------------------------------------------------
#                       Sebastián
#----------------------------------------------------------------------
# -- Vistas --
DROP VIEW IF EXISTS vw_actividadesdisponiblesAI;
DROP VIEW IF EXISTS vw_gruposproyectosest;
DROP VIEW IF EXISTS vw_convocatoria_PC;
DROP VIEW IF EXISTS vw_convocatorias_aplicadas;
DROP VIEW IF EXISTS vw_asesorias_usuario;
DROP VIEW IF EXISTS vw_asesorias_Disponibles;

#Vista de los eventos disponibles
create view vw_actividadesdisponiblesAI as select actNombre, actFecha, actLugar, actDescripcion from actividadai where actFecha >= CURDATE();
 
#Vista de los grupos de proyectos estudiantiles
create view vw_gruposproyectosest as select peNombre as nombre_proyecto, peDescripcion as descripcion_proyecto, gpNombre as grupo, gpLineadeAccion as linea_de_accion from grupoproyectoestudiantil join proyectoestudiantil on (grupoproyectoestudiantil.proyectoID=proyectoestudiantil.peID);

#Vista de las convocatorias de Promotores de Convivencia
create view vw_convocatoria_PC as select conv_id, convNombre, convFechaApertura, convFechaCierre, pcEstimuloEconomico, pcHorasRequeridas, pcDuracionVinculacion, pcDescripcion, pcPostulados, pcCuposTotales from convocatoria JOIN convocatoriapromotorconvivencia ON (conv_id=convID) where convFechaCierre>=CURDATE();

#Vista de las convocatorias a la que ha aplicado el usuario
create view vw_convocatorias_aplicadas as select perID, CONCAT(perNombre, " ", perApellido) as nombre, perEmail, perFacultad, convocatoria.conv_id, convNombre, datos_est.fecha from convocatoria join (select * from persona join estudiante_toma_convocatoria on(perID=idEst)) as datos_est ON(convocatoria.conv_id=datos_est.conv_id);

#Vista de las asesorias tomadas por el usuario
create view vw_asesorias_usuario as select asID, EstudianteID, asTipo, asArea, asFecha, asLugar, CONCAT(perNombre, " ", perApellido) as asesor, perEmail, progNombre from programa join (select * from asesoria join persona on(AsesorID=perID)) as as_info ON(progID=ProgramaID);

#Vista de las asesorias disponibles
create view vw_asesorias_Disponibles as select asTipo, asArea, asDID, asFecha, asLugar, CONCAT(perNombre, " ", perApellido) as asesor, perEmail, progNombre from programa join (select * from asesoriaDisponible join persona on(AsesorID=perID)) as as_info ON(progID=ProgramaID);

GRANT SELECT ON vw_actividadesdisponiblesAI TO "estudiante";
GRANT SELECT ON vw_gruposproyectosest TO "estudiante";
GRANT SELECT, UPDATE ON vw_convocatoria_PC TO "estudiante";
GRANT ALL ON vw_convocatorias_aplicadas TO "estudiante";
GRANT ALL ON vw_asesorias_usuario TO "estudiante";
GRANT ALL ON vw_asesorias_Disponibles TO "estudiante";
 