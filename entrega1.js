/**
 * @author sebastian Rojas Quintero
 */
const {cursos,imprimirCurso} = require('./curso.js');
const fs = require('fs');
const opciones = {
    idCurso : {
        demand:true,
        alias: 'i'
    },
    nombre:{
        demand:true,
        alias:'n'
    },
    cedula:{
        demand : true,
        alias:'c'
    }
};
const argv = require('yargs')
.command ('inscribir','incribir interesados',opciones)
.argv

const express = require('express')
const app = express()

let body = "";

/**
 * Metodo para mostrar los cursos
 * @param {*} cursos lista de cursos
 * @param {*} cont posicion del curso en la lista
 */
let mostrarCursos = (cursos,cont) => {
    if(cont<3){
        imprimirCurso(cursos[cont],function(result){
            body += result + '<br>';
            console.log(result);
            cont++;
            mostrarCursos(cursos,cont);
        });
    }
}

/**
 * metodo que crea el archivo del curso seleccionado por consola
 * @param {*} curso curso seleccionado
 */
let crearArchivo = (curso) => {
    let texto = 'El usuario ' + argv.n +' con cédula '+ argv.c + ' \r\n'
    + 'ha elegido el curso: \r\n'+
    'id: '+curso.id+'\r\n'+
    'nombre: '+ curso.nombre+'\r\n'+
    'duración: '+ curso.duracion+' días \r\n'+
    'valor: '+ curso.valor+'\r\n';
    console.log(texto);
   return texto;
    /*fs.writeFile('cursos.txt',texto, (err) => {
        if(err) throw (err);
        console.log('se ha creado el archivo');
    })*/
}

/**
 * metodo inicial que llama toda la lógica
 */
let init = () =>{
    let curso=cursos.find(curso=>curso.id==argv.i);
    if(curso == undefined){
        if(argv.i > 0)
            body += ('No se encuentra un curso con este id<br>\n');
        body += 'Cursos disponibles: <br>\n';
        mostrarCursos(cursos,0);
        console.log(body);                
    }
    else{
        body = crearArchivo(curso);
    }
}

//inicializacion
init();
app.get('/', function (req, res) {
    res.send(body)
})
 
app.listen(3000)