use Bienestar;

#----------------------------------------------------------------------
#                                  Sebastián
#----------------------------------------------------------------------


#1 - Nombre, email y facultad de las personas que asistieron a la actividad "Encendiendo la llama del cambio"
select perNombre, perApellido, perEmail, perFacultad, actNombre, actFecha from (actividadai join participacionactividadai on (actividadai.actID = participacionactividadai.ActividadID)) join persona on(participacionactividadai.EstudianteID = persona.perID)  where actNombre like "%llama%";

#2 - Estudiantes que fueron aceptados en las convocatorias de promotores de convivencia
select perNombre, perApellido, perEmail, perFacultad, pcHorasRequeridas, pcDuracionVinculacion, pcEstimuloEconomico, pcDescripcion from ((convocatoriapromotorconvivencia join convocatoria on (convocatoria.conv_id = convocatoriapromotorconvivencia.convID)) join promotorconvivencia on (promotorconvivencia.ConvocatoriaID = convocatoria.conv_id)) join persona on (promotorconvivencia.EstudianteID = persona.perID);

#3 - Tipo de asesoria, fecha y lugar; nombre y correo de la persona y del asesor involucrados en la asesoria.
select asTipo, asFecha, asLugar, persona.perNombre, persona.perApellido, persona.perEmail, asesor.perNombre as asesorNombre, asesor.perApellido as asesorApellido, asesor.perEmail as asesorEmail from (asesoria join persona on (asesoria.EstudianteID = persona.perID)) join persona as asesor on (asesoria.AsesorID = asesor.perID);

#--------------------------------------
#           Santiago 
#--------------------------------------
-- selección para ver que convocatorias estan activas para cada grupo artistico institucional
select grupoartisticoinstitucional.gaiNombre,convocatoria.convNombre, convocatoria.convFechaApertura, convocatoria.convFechaCierre, convocatoria.convEstado 
from (grupoartisticoinstitucional join convocatoriagai on grupoartisticoinstitucional.GAI_id = convocatoriagai.GrupoArtisticoInstitucional_GAI_id)
join convocatoria on convocatoriagai.Convocatoria_conv_id=convocatoria.conv_id;  
-- selección para ver el director y la displina de cada convocatoria, con su periodo
select grupoartisticoinstitucional.gaiNombreDirector, grupoartisticoinstitucional.gaiDisciplina , convocatoria.convNombre, convocatoria.convPeriodo
from (grupoartisticoinstitucional join convocatoriagai on grupoartisticoinstitucional.GAI_id = convocatoriagai.GrupoArtisticoInstitucional_GAI_id)
join convocatoria on convocatoriagai.Convocatoria_conv_id=convocatoria.conv_id;
-- seleccion para ver la disciplina y el tipo de los grupos artisticos institucionales de las convocatorias activas
select grupoartisticoinstitucional.gaiNombre,grupoartisticoinstitucional.gaiDisciplina, grupoartisticoinstitucional.eveCulTipo
from ((grupoartisticoinstitucional join convocatoriagai on grupoartisticoinstitucional.GAI_id = convocatoriagai.GrupoArtisticoInstitucional_GAI_id)
join convocatoria on convocatoriagai.Convocatoria_conv_id=convocatoria.conv_id) where convocatoria.convEstado=1;
-- selección para si hay una convocatoria activa para el grupo de Danzas folclóricas
select grupoartisticoinstitucional.gaiNombre,convocatoria.convNombre,convocatoria.convEstado
from ((grupoartisticoinstitucional join convocatoriagai on grupoartisticoinstitucional.GAI_id = convocatoriagai.GrupoArtisticoInstitucional_GAI_id)
join convocatoria on convocatoriagai.Convocatoria_conv_id=convocatoria.conv_id) where grupoartisticoinstitucional.gaiNombre = "Danzas folclóricas";

-- Tomas
-- Muestra la carrera y el nombre de los padres universitarios  cuyos hijos esten en el grado primero del IPARM
select perNombre as NombrePadreMadre,perFacultad as Facultad from persona join infante 
on (perId=idPadre_o_Madre) join inscripcióniparm on(IdInfante=Infante_IdInfante) where Grado="Primero";
 
 
 -- Muestra el nombre de los estudiantes y de sus hijos(solamente si tienen)
 select persona.perNombre as NombrePariente, hijo.perNombre as NombreHijo from persona 
 join infante on (perId=idPadre_o_Madre) join persona as hijo on(IdInfante=hijo.perId);
 
 -- Numero de estudiantes que tienen hijos en párvulos
 select count(perId) as estudiantes from persona join infante 
on (perId=idPadre_o_Madre) join inscripciónjardininfantil on(IdInfante=Infante_idInfante) where Sala="Parvulos"