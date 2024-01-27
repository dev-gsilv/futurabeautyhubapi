const healthRoute = require('./healthcheck.js');
const usuarioRoutes = require('./usuario.js');

const routes = app => {
    healthRoute(app);
    usuarioRoutes(app);
};

module.exports = routes;
