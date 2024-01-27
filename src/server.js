const express = require('express');
const crypto = require('crypto');
//const multer = require('multer');
const fs = require('fs');
const routes = require('./routes/router');
const conn = require('../src/db/mongo');

const app = express();
app.use(express.json());
conn();
routes(app);

const porta = 3000;
app.listen(porta, () =>
    console.log(
        `Servidor up! Teste aqui http://localhost:${porta}/healthcheck`,
    ),
);
