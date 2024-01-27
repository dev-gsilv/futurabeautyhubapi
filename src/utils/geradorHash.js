const bcrypt = require('bcrypt');

function gerarSalt() {
    const salt = bcrypt.genSaltSync();
    return salt;
}

function cadastroHash(senha) {
    const salt = gerarSalt();
    const senhaHash = bcrypt.hashSync(senha, salt);
    return [salt, senhaHash];
}

function loginHash(salt, senha) {
    const senhaHash = bcrypt.hashSync(senha, salt);
    return senhaHash;
}

module.exports = {
    cadastroHash,
    loginHash,
};
