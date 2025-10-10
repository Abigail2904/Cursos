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
//PUT para actualizar un recurso
//DELETE para eliminar un recurso
//En ambos casos se utiliza un id para identificar el recurso
routerMatematicas.put('/:id', (req, res) => { 
    const id = req.params.id; //accedemos al id de la url
    const cursoActualizado = req.body; //accedemos al cuerpo de la peticion

    //buscamos el curso por id

const indice = matematicas.findIndex(curso => curso.id == id);
    if(indice >= 0){
        matematicas[indice] = cursoActualizado;
         }
 res.send(JSON.stringify(matematicas));
});
//PATCH para modificar parcialmente un recurso
routerMatematicas.patch('/:id', (req, res) => {
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = matematicas.findIndex(curso => curso.id == id); //verificamos si el curso existe
    if(indice >= 0){
        const cursoAModificar = matematicas[indice];
        Object.assign(cursoAModificar, infoActualizada); //modifica solo algunas propiedades del objeto
    }
    res.send(JSON.stringify(matematicas));
});
//DELETE para eliminar un recurso

routerMatematicas.delete('/:id', (req, res) => {
    const id = req.params.id;
    const indice = matematicas.findIndex(curso => curso.id == id);

    if(indice >= 0){
        matematicas.splice(indice, 1); //elimina el curso del array
    }
    res.send(JSON.stringify(matematicas));
});

module.exports = routerMatematicas;

//put actualiza todo el recurso
//patch actualiza parcialmente el recurso
//delete elimina el recurso
//post crea un nuevo recurso

//RES.SEND Y RES.JSON
//res.send() puede enviar cualquier tipo de dato, pero si se le pasa un objeto o array lo convierte a JSON automaticamente
//res.json() convierte el objeto o array a JSON y lo envia, es mas rapido que res.send() porque no tiene que verificar el tipo de dato
//se recomienda usar res.json() cuando se trabaja con APIs que manejan datos en formato JSON