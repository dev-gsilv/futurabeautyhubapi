const healthRoute = require('./healthcheck.js');

const routes = app => {
    healthRoute(app);
};

module.exports = routes;
