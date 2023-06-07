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
#Vista de los eventos disponibles
 create view vw_actividadesdisponiblesAI as select actNombre, actFecha, actLugar, actDescripcion from actividadai where actFecha >= CURDATE();
 
 #Vista de los grupos de proyectos estudiantiles
 create view vw_gruposproyectosest as select gpNombre as grupo, gpLineadeAccion as linea_de_accion, peNombre as nombre_proyecto, peDescripcion as descripcion_proyecto from grupoproyectoestudiantil join proyectoestudiantil on (grupoproyectoestudiantil.proyectoID=proyectoestudiantil.peID);
 