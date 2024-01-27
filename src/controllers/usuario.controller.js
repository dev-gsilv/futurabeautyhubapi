const Usuario = require('../models/Usuario');

const registrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    const usuario = new Usuario({ nome, email, senha });
    await usuario.save();
    res.json({ id: usuario._id });
};

module.exports = registrarUsuario;
