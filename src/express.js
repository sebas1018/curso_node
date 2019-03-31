const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
require('./helpers')

const directorioPublico = path.join(__dirname, '../public');
const directorioPartials = path.join(__dirname, '../partials');
app.use(express.static(directorioPublico));
hbs.registerPartials(directorioPartials);
app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine", "hbs");

app.get('/',(req,res) =>{
  res.render('index');
});

app.post('/calculos',(req, res) => {
  res.render('calculos',{
    title: 'Pagina de prueba',
    estudiante : req.body.nombre,
    nota1 : parseInt(req.body.nota1),
    nota2 : parseInt(req.body.nota2),
    nota3 : parseInt(req.body.nota3)
  });
});

app.get('*',(req, res) =>{
  res.render('error.hbs');
});
 
app.listen(3000,() => {
  console.log("corriendo en 3000");
});