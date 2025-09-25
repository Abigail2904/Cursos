const express = require('express');
const app = express();

const {infoCursos} = require('./cursos.js');


//Routing (direccionamiento o enrutamiento)
app.get('/', (req, res) => {
    res.send('Mi primer servidor. Cursos 💻');
});


app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}`);
}); 