const jwt = require('jsonwebtoken');

// Middleware para autenticação
const autenticar = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ erro: 'Senha não fornecida.' });
    }

    try {
        const decodificado = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decodificado;
        next();
    } catch (erro) {
        return res.status(401).json({ erro: 'Senha inválida' });
    }
};

module.exports = autenticar;
