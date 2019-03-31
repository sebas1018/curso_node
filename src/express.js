const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
require('./helpers')

const directorioPublico = path.join(__dirname, '../public');
const directorioPartials = path.join(__dirname, '../partials');
app.use(express.static(directorioPublico));
hbs.registerPartials(directorioPartials);

app.set("view engine", "hbs");

app.get('/',(req, res) => {
  res.render('index',{
    title: 'Pagina de prueba',
    estudiante : 'Sebastian',
    nota1 : 4,
    nota2 : 3,
    nota3 : 5
  });
});
 
app.listen(3000,() => {
  console.log("corriendo en 3000");
});