const Usuario = require('../models/Usuario');
const { cadastroHash } = require('../utils/geradorHash');
const { validarEmail } = require('../utils/validadorMongo');

const registrarUsuario = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        // Gerar array com salt e senhaHash do usuário
        const saltSenhaArr = cadastroHash(senha);
        const salt = saltSenhaArr[0];
        const senhaHash = saltSenhaArr[1];

        const usuario = new Usuario({ nome, email, salt, senhaHash });

        await usuario.save();
        res.status(201).send({ id: usuario._id });
    } catch (err) {
        console.log(
            `${new Date().toISOString()} - ERRO! Tipo: duplicate key error; Msg:${
                err.message
            }`,
        );
        res.status(400).send(`O e-mail informado já está cadastrado!`);
    }
};

module.exports = registrarUsuario;
