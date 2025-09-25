//Importa la librería Express y crea una aplicación de servidor, importa los datos de los cursos
const express = require('express');
const app = express();

const {infoCursos} = require('./cursos.js');


//Routing (enrutamiento) Ruta principal (home) del servidor
app.get('/', (req, res) => {
    res.send('Mi primer servidor. Cursos 💻');
});


// Ruta que devuelve todos los cursos (programación y matemáticas)
app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});


// Ruta que devuelve solo los cursos de programación
app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion));
});


// Ruta que devuelve solo los cursos de matemáticas
app.get('/api/cursos/matematicas', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
});

// PROGRAMACION 

// Ruta para filtrar cursos de programación por lenguaje
app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

    if(resultados.length === 0){
        return res.status(404).send(`No se enconrtraron cursos de ${lenguaje}`);
    }
    res.send(JSON.stringify(resultados));
});

// Ruta para filtrar cursos de programación por lenguaje y nivel
app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel; 

    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if(resultados.length === 0){
        return res.status(404).send(`No se enconrtraron cursos de ${lenguaje} de nivel ${nivel}`);
    }
    res.send(JSON.stringify(resultados));
});

// MATEMATICAS

// Ruta para filtrar cursos de matemáticas por tema
app.get('/api/cursos/matematicas/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);

    if(resultados.length === 0){
        return res.status(404).send(`No se enconrtraron cursos de ${tema}`);
    }
    res.send(JSON.stringify(resultados));
});


// Define el puerto del servidor
const PUERTO = process.env.PORT || 3000;


// Inicia el servidor y escucha las peticiones en el puerto definido
app.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}`);
}); 