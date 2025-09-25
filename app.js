const express = require('express');
const app = express();

const {infoCursosProgramacion} = require('./cursos.js');


//Routing (direccionamiento o enrutamiento)
app.get('/', (req, res) => {
    res.send('Mi primer servidor. Cursos 💻');
});


app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursosProgramacion));
});

app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursosProgramacion));
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}`);
}); 