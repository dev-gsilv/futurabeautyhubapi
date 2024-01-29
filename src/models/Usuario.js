const mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario', {
    nome: {
        type: String,
        required: [true, 'Nome de usuário é obrigatório!'],
        minLength: [3, 'Nome de usuário muito curto!'],
        maxLength: [20, 'Nome de usuário muito longo!'],
    },
    email: {
        type: String,
        required: [true, 'E-mail é obrigatório!'],
        unique: [true, 'E-mail já cadastrado!'],
    },
    salt: String,
    senhaHash: String,
});

module.exports = Usuario;
