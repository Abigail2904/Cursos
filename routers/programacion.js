const express = require('express');

const {programacion} = require('../datos/cursos.js').infoCursos;
const routerProgramacion = express.Router();


// Ruta que devuelve solo los cursos de programación
routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(programacion));
});

// Ruta para filtrar cursos de programación por lenguaje
routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

    if(resultados.length === 0){
        return res.status(404).send(`No se enconrtraron cursos de ${lenguaje}`);
    }
    res.send(JSON.stringify(resultados));
});


// Ruta para filtrar cursos de programación por lenguaje y nivel
routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel; 

    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if(resultados.length === 0){
        return res.status(404).send(`No se enconrtraron cursos de ${lenguaje} de nivel ${nivel}`);
    }


//Parametro opcional utilizamos los parametros query para hacer busquedas mas especificas son agregandos con ? 
    if(req.query.ordenar === 'vistas'){
        return res.send(JSON.stringify(resultados.sort((a,b) => b.vistas - a.vistas)));
    }

    res.send(JSON.stringify(resultados));
});
routerProgramacion.post('/', (req, res) => {
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.send(JSON.stringify(programacion));
});
//PUT para actualizar un recurso
//DELETE para eliminar un recurso
//En ambos casos se utiliza un id para identificar el recurso
routerProgramacion.put('/:id', (req, res) => {
    const id = req.params.id; //accedemos al id de la url
    const cursoActualizado = req.body; //accedemos al cuerpo de la peticion

    //buscamos el curso por id

const indice = programacion.findIndex(curso => curso.id == id);
    if(indice >= 0){
        programacion[indice] = cursoActualizado;
         }
 res.send(JSON.stringify(programacion));
});
//PATCH para modificar parcialmente un recurso
routerProgramacion.patch('/:id', (req, res) => {
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id); //verificamos si el curso existe
    if(indice >= 0){
        const cursoAModificar = programacion[indice];
        Object.assign(cursoAModificar, infoActualizada); //modifica solo algunas propiedades del objeto
    }
    res.send(JSON.stringify(programacion));
});
//DELETE para eliminar un recurso

routerProgramacion.delete('/:id', (req, res) => {
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        programacion.splice(indice, 1); //elimina el curso del array
    }
    res.send(JSON.stringify(programacion));
});


module.exports = routerProgramacion;
