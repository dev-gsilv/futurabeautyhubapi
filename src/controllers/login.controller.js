const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');
const { loginHash } = require('../utils/geradorHash');

const login = async (req, res) => {
    // Login usando Basic Auth header
    const authHeader = req.headers['authorization'];
    let credenciais;

    if (authHeader) {
        // Verifica se o cabeçalho começa com "Basic"
        if (authHeader.startsWith('Basic')) {
            // Remove o prefixo "Basic " e decodifica as credenciais Base64
            credenciais = Buffer.from(
                authHeader.substring(6),
                'base64',
            ).toString('utf-8');
            credenciais = credenciais.split(':');
        }
    }

    const [email, senha] = credenciais;
    const usuario = await Usuario.findOne({ email });

    try {
        if (usuario) {
            const senhaHash = loginHash(usuario.salt, senha);
            if (usuario.senhaHash == senhaHash) {
                const secretJwt = process.env.JWT_SECRET;
                const token = jwt.sign({ userId: usuario._id }, secretJwt, {
                    expiresIn: '1h',
                });
                res.status(200).send({ token });
            } else throw new Error('Credenciais inválidas');
        } else throw new Error('Credenciais inválidas');
    } catch (err) {
        console.error(`${new Date().toISOString()} - ERRO! ${err.message}`);
        res.status(401).send(err.toString());
    }
};

module.exports = login;
