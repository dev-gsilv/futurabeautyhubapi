const registrarUsuario = require('../controllers/usuario.controller');

const usuarioRoutes = app => {
    app.post('/registrar', registrarUsuario);
};

module.exports = usuarioRoutes;
