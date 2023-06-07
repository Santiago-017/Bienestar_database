#-----------------------------------------------------------------------
# Indices
#-----------------------------------------------------------------------

# index para facilitar las busquedas por el nombre del curso
create index idx_cucNombre on cursocultural(cucNombre);
# Index para facilitar las busquedas por categoria del curso
create index idx_cucCategoria on cursocultural(cucCategoria);
# Index para facilitar las busquedas por nombre del grupo artistico
create index idx_gaiNombre on grupoartisticoinstitucional(gaiNombre);
# Index para facilitar las busquedas por disciplina del grupo artistico
create index idx_gaiDisciplina on grupoartisticoinstitucional(gaiDisciplina);
-- Creamos un indice sobre la tabla Infante ya que muchos procedimientos implican buscar sobre esta teniendo en cuenta este id
CREATE INDEX idx_idPersona ON infante (IdInfante);

-- También creamos un un indice sobre el atributo idPadre_o_Madre ya que lo utilizamos en 
-- varios procedimientos para relacionar al infante con sus padres
CREATE INDEX idx_idPadre ON infante (idPadre_o_Madre);

# index para facilitar las busquedas por el nombre de las actividades ya que es un atributo distintivo puede simplificar la consulta para los estudiantes
create index idx_actAINombre on ActividadAI(actNombre);
# Index para facilitar las busquedas por la fecha de las actividades ya que es un atributo distintvo que puede simplificar la consulta para los estudiantes
create index idx_actAIFecha on ActividadAI(actFecha);
# Index para facilitar las busquedas por la fecha de la asesoria ya que es uno de los campos más distintivos y puede facilitar la busqueda en intervalos de fechas;
create index idx_asesFecha on Asesoria(asFecha);
# index para facilitar las busquedas por el nombre de los proyectos estudiantiles, que es el atributo que los estudiantes podrán ver
create index idx_proestNombre on ProyectoEstudiantil(peNombre);


drop index idx_actAINombre on ActividadAI;
drop index idx_actAIFecha on ActividadAI;
drop index idx_asesFecha on Asesoria;
drop index idx_proestNombre on ProyectoEstudiantil;
drop INDEX idx_idPadre on infante;
drop INDEX idx_idPersona on infante;
drop index idx_cucNombre on cursocultural;
drop index idx_cucCategoria on cursocultural;
drop index idx_gaiDisciplina on grupoartisticoinstitucional;
drop index idx_gaiNombre on grupoartisticoinstitucional;