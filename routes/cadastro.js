var express = require('express');
var router = express.Router();
const queryDB = require('../lib/queryDB');
const mysql = require('mysql2');


router.post('/', function(req, res, next) {

  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mateusMBA94',
    database: 'cadastro_jobsnet'
  })
  
  connection.connect()

  let queryText = queryDB.insertQuery(req.body)
  
  connection.query(queryText, function (err, rows, fields) {
      if(err){ 
        res.status(400).send({"Mensagem": "Usuário já cadastrado"});
        return 
      }
        res.status(200).send({"Mensagem": "Usuário criado com sucesso."})  
  });
  setTimeout(() =>{
    connection.end()
  }, 300)
});

module.exports = router;