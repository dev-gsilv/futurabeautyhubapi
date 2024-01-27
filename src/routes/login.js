const login = require("../controllers/login.controller");

const loginRoutes = app => {
    app.post('/login', login);
};

module.exports = loginRoutes;