const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const directorioPublico = path.join(__dirname, '../public');
app.use(express.static(directorioPublico));

app.set("view engine", "hbs");

app.get('/', function (req, res) {
  res.render('index',{
  	title: 'Pagina de prueba'
  });
});
 
app.listen(3000);