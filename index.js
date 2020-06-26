const express = require('express');
const config = require('./config');
const videosApi = require('./routes/videos');

const app = express();

app.use(express.json());

videosApi(app);

app.listen(config.port, () => {
    console.log(`Servidor Corriendo en Puerto ${config.port}`);
});


