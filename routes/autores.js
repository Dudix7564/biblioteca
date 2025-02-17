var express = require('express');
var router = express.Router();
var db = require('../utils/db');

router.get('/listar', function(req, res) {
    let cmd = 'SELECT IdAutor, NoAutor, NoNacionalidade ';
    cmd += ' FROM TbAutor AS a INNER JOIN TbNacionalidade AS n';
    cmd += ' ON a.IdNacionalidade = n.IdNacionalidade';
    cmd += ' ORDER BY NoAutor';
    db.query(cmd, [], function(erro, listagem){
    if (erro){
    res.send(erro);
    }
    /* Criaremos a view autores-lista.ejs no próximo slide*/
    res.render("autores-lista", {resultado : listagem})
  });
    });
  
    router.get('/add', function(req,res) {
      res.render("autores-add", {resultado: {}})
    })

router.post ('/add' , function(req, res) {
  let nome = req.body.nome;
  let nacionalidade = req.body.nacionalidade;

  let cmd = "INSERT INTO TbAutor(NoAutor, IdNacionalidade) VALUES (?, ?);";
  db.query(cmd, [nome, nacionalidade], function(erro) {
    if (erro){
      res.send(erro);
      }
      res.redirect('autores/listar');
  })
}
)
router.get('/edit/:id', function(req, res) {
  let id = req.params.id;
  let cmd = "SELECT * FROM TbAutor WHERE IdAutor = ?;";
  
  db.query(cmd, [id], function(erro, listagem){
  if (erro){
  res.send(erro);
  }
  res.render('autores-add', {resultado: listagem[0]});
  });
  });
  router.put('/edit/:id', function(req, res) {
    let id = req.params.id;
    let nome = req.body.nome;
    let nacionalidade = req.body.nacionalidade;
    
    let cmd = "UPDATE TbAutor SET NoAutor = ?, IdNacionalidade = ? WHERE IdAutor = ?;";
    db.query(cmd, [nome, nacionalidade, id], function(erro, listagem){
    if (erro){
    res.send(erro);
    }
    //Code 303 permite o redirecionamento entre rotas com métodos diferentes:
    //PUT → GET
    res.redirect(303, '/autores/listar');
    });
    });


  module.exports = router;
  
