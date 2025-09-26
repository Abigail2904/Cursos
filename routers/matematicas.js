const express = require('express');

const {matematicas} = require('../datos/cursos.js').infoCursos;
const routerMatematicas = express.Router();

//middleware para parsear el body a json
routerMatematicas.use(express.json());

// Ruta que devuelve solo los cursos de matemáticas
routerMatematicas.get('/', (req, res) => {
    res.send(JSON.stringify(matematicas));
});

// Ruta para filtrar cursos de matemáticas por tema
routerMatematicas.get('/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = matematicas.filter(curso => curso.tema === tema);

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    res.send(JSON.stringify(resultados));
});


// Ruta para filtrar cursos de matemáticas por tema y nivel
routerMatematicas.get('/:tema/:nivel', (req, res) => {
    const tema = req.params.tema;
    const nivel = req.params.nivel;

    const resultados = matematicas.filter(curso => curso.tema === tema && curso.nivel === nivel);

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema} de nivel ${nivel}`);
    }
     

//Parametro opcional utilizamos los parametros query para hacer busquedas mas especificas son agregandos con ? 
    if(req.query.ordenar === 'vistas'){
        return res.send(JSON.stringify(resultados.sort((a,b) => b.vistas - a.vistas)));
    }

    res.send(JSON.stringify(resultados));
});

routerMatematicas.post('/', (req, res) => {
    let cursoNuevo = req.body;
    matematicas.push(cursoNuevo);
    res.send(JSON.stringify(matematicas));
});

module.exports = routerMatematicas;
