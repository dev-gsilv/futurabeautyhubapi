const healthRoute = require('./healthcheck.js');
const usuarioRoutes = require('./usuario.js');
const loginRoutes = require('./login.js');
const produtoRoutes = require('./produto.js');

const routes = app => {
    healthRoute(app);
    usuarioRoutes(app);
    loginRoutes(app);
    produtoRoutes(app);
};

module.exports = routes;
