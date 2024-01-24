const express = require('express');
const crypto = require('crypto');

const app = express();
app.use(express.json());

app.get('/healthcheck', (req, res) => {
    res.status(200).send("Healthcheck: OK!");
});

const porta = 3000;
app.listen(porta, () => console.log(`Servidor up! Teste aqui http://localhost:${porta}/healthcheck`));
