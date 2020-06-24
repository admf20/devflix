const express = require('express');
const config = require('./config');
const app = express();

app.get('/', (req, res) => {
    res.send('Servidor Corriendo');
});

app.listen(config.port, () => {
    console.log(`Servidor Corriendo en Puerto ${config.port}`);
});


