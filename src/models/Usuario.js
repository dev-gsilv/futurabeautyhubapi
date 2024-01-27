const mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario', {
    nome: String,
    email: String,
    salt: String,
    senhaHash: String,
});

module.exports = Usuario;
