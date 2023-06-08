const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Lina123456**',
  database: 'bienestar'
});

connection.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log('conexion exitosa');
    }
});

connection.query('Select * from area', function(err, results){
    if(err)throw err;
    results.forEach(element => {
        console.log(element);
    });
})

connection.end();