const express = require('express');
const routes = require('./routes/router');
const crypto = require('crypto');
//const mongoose = require('mongoose');
//const jwt = require('jsonwebtoken');
//const multer = require('multer');
const fs = require('fs');

const app = express();
app.use(express.json());
routes(app);

const porta = 3000;
app.listen(porta, () =>
    console.log(
        `Servidor up! Teste aqui http://localhost:${porta}/healthcheck`,
    ),
);
