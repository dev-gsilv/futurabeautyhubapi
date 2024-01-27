const mongoose = require('mongoose');

const Produto = mongoose.model('Produto', {
    nome: String,
    marca: String,
    ingredientes: [String],
    indicacao: String,
    volume: String,
    preco: mongoose.Decimal128,
    disponibilidade: Boolean,
    categoria: [String],
    idUsuario: mongoose.Types.ObjectId,
    imagem: String,
    dataCadastro: { type: Date, default: Date.now },
});

module.exports = Produto;
