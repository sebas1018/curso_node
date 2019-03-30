/***
 * Autor: sebastian Rojas Quintero
 */


let cursos = [{
    id:1,
    nombre:'node js',
    duracion: 30,
    valor: 10000
},
{
    id:2,
    nombre:'Spring',
    duracion: 40,
    valor: 20000
},
{
    id:3,
    nombre:'Angular',
    duracion: 35,
    valor: 25000 
}];

/* Metodo que imprime los datos del curso*/
let imprimirCurso = (curso,callback) => {
    setTimeout(() => {
        let datos = 'id: '+curso.id+'\n'+
        'nombre: '+ curso.nombre+'\n'+
        'duración: '+ curso.duracion+'\n'+
        'valor: '+ curso.valor+'\n';
        callback (datos);
    }, 2000);
}

module.exports = {
    cursos,
    imprimirCurso
};