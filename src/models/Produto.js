const mongoose = require('mongoose');

const Produto = mongoose.model('Produto', {
    nome: {
        type: String,
        required: [true, 'Campo nome é obrigatório!'],
    },
    marca: String,
    ingredientes: [String],
    indicacao: String,
    volume: String,
    preco: {
        type: mongoose.Decimal128,
        required: [true, 'Campo preço é obrigatório!'],
    },
    disponibilidade: {
        type: Boolean,
        required: [true, 'Campo disponibilidade é obrigatório!'],
        default: true,
    },
    categoria: {
        type: [String],
        required: [true, 'Campo categoria é obrigatório!'],
    },
    idUsuario: mongoose.Types.ObjectId,
    imagem: {
        type: String,
        required: [true, 'Campo imagem é obrigatório!'],
    },
    dataCadastro: { type: Date, default: Date.now },
});

module.exports = Produto;
