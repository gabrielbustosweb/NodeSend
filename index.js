const express = require('express');
const conectarDB = require('./config/db.js');

// Crear el servidor
const app = express();

// Conectar Base de Datos
conectarDB();

console.log('Arrancando NodeSend');

// Puerto de la app
const port =process.env.PORT || 4000;

// Arrancar la app
app.listen(port, '0.0.0.0', () =>{
    console.log(`El servidor está funcionando en el puerto ${port}`);
})