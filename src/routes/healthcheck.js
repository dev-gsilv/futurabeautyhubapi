const testing = require('../controllers/health.controller');

const healthRoutes = app => {
    app.get('/healthcheck', testing);
};

module.exports = healthRoutes;
