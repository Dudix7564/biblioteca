var express = require('express');
let db = require('../utils/db');
var router = express.Router();

router.get('/livros/listar', function(req, res) {
    let cmd = 'SELECT IdObra, NoObra FROM TbObra';
    cmd += ' ORDER BY NoObra';
    db.query(cmd, [], function(erro, listagem){
    if (erro){
    res.send(erro);
    }
    res.render("livros-lista", {resultadox : listagem})
  });
    });

  module.exports = router;
  
