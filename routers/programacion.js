const express = require('express');
const routerProgramacion = express.Router();


// Ruta que devuelve solo los cursos de programación
routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion));
});

// Ruta para filtrar cursos de programación por lenguaje
routerProgramacion.get('/', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

    if(resultados.length === 0){
        return res.status(404).send(`No se enconrtraron cursos de ${lenguaje}`);
    }
    res.send(JSON.stringify(resultados));
});


// Ruta para filtrar cursos de programación por lenguaje y nivel
routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel; 

    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if(resultados.length === 0){
        return res.status(404).send(`No se enconrtraron cursos de ${lenguaje} de nivel ${nivel}`);
    }


//Parametro opcional para ordenar los resultados por vistas
    if(req.query.ordenar === 'vistas'){
        return res.send(JSON.stringify(resultados.sort((a,b) => b.vistas - a.vistas)));
    }

    res.send(JSON.stringify(resultados));
});
