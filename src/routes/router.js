const healthRoute = require('./healthcheck.js');
const usuarioRoutes = require('./usuario.js');
const loginRoutes = require('./login.js');

const routes = app => {
    healthRoute(app);
    usuarioRoutes(app);
    loginRoutes(app);
};

module.exports = routes;
