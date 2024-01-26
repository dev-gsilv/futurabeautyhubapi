const express = require('express');

const router = express.Router();
/*
router.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ email, senha });

    if (!usuario) {
        return res.status(401).json({ erro: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ userId: usuario._id }, 'sua-chave-secreta', {
        expiresIn: '1h',
    });
    res.json({ token });
});
*/