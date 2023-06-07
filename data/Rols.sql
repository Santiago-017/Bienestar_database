drop role if exists 'estudiante'@'localhost';
drop role if exists 'administrador'@'localhost';

CREATE ROLE 'estudiante'@'localhost';
CREATE ROLE 'administrador'@'localhost';

GRANT ALL ON bienestar.* TO 'administrador'@'localhost';