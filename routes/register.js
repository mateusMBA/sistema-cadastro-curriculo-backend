var express = require('express');
var router = express.Router();
const queryDB = require('../lib/queryDB');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

router.post('/', function(req, res, next) {

  var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_TABLE
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