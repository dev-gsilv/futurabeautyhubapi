const express = require('express');

const routes = require('./routes/router');
const conn = require('../src/db/mongo');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger manual
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Inicializa a conexão com o banco de dados
conn();
// Inicializa o agregador de rotas
routes(app);

const porta = 3000;
app.listen(porta, () =>
    console.log(
        `Servidor up! Teste aqui http://localhost:${porta}/healthcheck`,
    ),
);
