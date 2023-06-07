-- Acompañamiento Integral --
update convocatoriapromotorconvivencia set pcEstimuloEconomico=750000 where pcHorasRequeridas = 8;

update asesoria set asLugar="Salón 105" where asLugar="Salón 305";

update grupoproyectoestudiantil set gpNombre="Hystoria" where gpID=3;

delete from participacionactividadai where ActividadID=5;
delete from actividadai where actNombre like "%Cultivando%";

delete from asesoria where asTipo="Escuela de Padres";

#--------------------------------------------------------------
#                Santiago
#--------------------------------------------------------------
update grupoartisticoinstitucional set gaiNombre="Danza folclórica" where gaiNombre = "Danzas Folclóricas";

delete from grupoartisticoinstitucional where gaiNombre="Danza folclórica";
delete from convocatoria where conv_id = 778;

-- Tomas
use bienestar;
set SQL_SAFE_UPDATES=0;
update InscripciónJardinInfantil set sala="Parvulitos" where sala="Parvulos";

delete from InscripciónIPARM where Grado in ("Tercero","Segundo");
update persona set perNombre=(select  hijo.perNombre as NombreHijo from persona as persona2
 join infante on (persona2.perId=idPadre_o_Madre) join persona as hijo on(IdInfante=hijo.perId) where infante.idPadre_o_Madre=persona.perId) where perId IN (
    SELECT idPadre_o_Madre
    FROM infante);