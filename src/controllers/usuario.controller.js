const Usuario = require('../models/Usuario');
const { cadastroHash } = require('../utils/geradorHash');

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
    } catch (error) {
        res.status(400).send(
            'Verifique as informações enviadas e tente novamente!',
        );
    }
};

module.exports = registrarUsuario;
