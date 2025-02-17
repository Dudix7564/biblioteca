var express = require('express');
var router = express.Router();
let db = require('../utils/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/ola/:nome',function(req, res, next) {
  let nome = req.params.nome;
  let msg = '<h2>Nome:' + nome +'...</h2>';
  res.send(msg);
})
router.get('/oi/:idade',function(req, res, next) {
  let idade = req.params.idade;
  let msg = '<h2>Idade:' + idade +'...</h2>';
  res.send(msg);
})

router.get('/imc', function(req,res) {
  let peso = req.query.peso;
  let estatura = req.query.estatura;

  let imc = peso/ Math.pow(estatura, 2);
  let msg = '<h3>Seu IMC é:' + imc.toFixed(2) + '</h3>';
  res.send(msg);
})

router.get('/meunome/',  function(req,res){
  let meunome = req.query.meunome;
  let sobrenome = req.query.sobrenome;

let msg = '<h2> Nome Completo:' +meunome + " " + sobrenome + '</h2>'
res.send(msg);

})

router.get('/calculadora/',function(req,res) {
  let prim = req.query.prim;
  let sec = req.query.sec;
  let soma = parseInt(prim) + parseInt(sec);

let msg = '<h2>O Resultado da sua soma é: </h2>' + soma;
res.send(msg);

})

module.exports = router;
