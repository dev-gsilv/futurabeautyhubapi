const fs = require('fs');
const Produto = require('../models/Produto');
const {validacaoMongoSchema} = require('../utils/validadorMongo')

const cadastrarProduto = async (req, res) => {
    const {
        nome,
        marca,
        ingredientes,
        indicacao,
        volume,
        preco,
        disponibilidade,
        categoria,
    } = req.body;
    const idUsuario = req.usuario.userId;
    const imagem = req.file.filename;
    const produto = new Produto({
        nome,
        marca,
        ingredientes,
        indicacao,
        volume,
        preco,
        disponibilidade,
        categoria,
        idUsuario,
        imagem,
    });

    if (validacaoMongoSchema(produto, res)){
        await produto.save();
        res.json(produto);
    };
};

const buscarProduto = async (req, res) => {
    const { categoria, idUsuario } = req.query;

    let consulta = {};
    if (categoria) {
        consulta.categoria = categoria;
    }
    if (idUsuario) {
        consulta.idUsuario = idUsuario;
    }

    const produtos = await Produto.find(consulta);
    res.status(200).send(produtos);
};

const editarProduto = async (req, res) => {
    const idProduto = req.params.id;
    const idUsuario = req.usuario.userId;

    const produto = await Produto.findOne({ _id: idProduto, idUsuario });

    let imagem;
    try {
        if (req.file.filename) {
            imagem = req.file.filename;
        } else imagem = produto.imagem;
    } catch (error) {
        console.log(error.message);
    }

    if (!produto) {
        return res.status(403).json({
            erro: 'Você não tem permissão para editar este produto',
        });
    }
    produto.nome = req.body.nome || produto.nome;
    produto.categoria = req.body.categoria || produto.categoria;
    produto.marca = req.body.marca || produto.marca;
    produto.ingredientes = req.body.ingredientes || produto.ingredientes;
    produto.indicacao = req.body.indicacao || produto.indicacao;
    produto.volume = req.body.volume || produto.volume;
    produto.preco = req.body.preco || produto.preco;
    produto.disponibilidade =
        req.body.disponibilidade || produto.disponibilidade;
    produto.categoria = req.body.categoria || produto.categoria;
    produto.imagem = imagem || produto.imagem;

    await produto.save();
    res.status(200).send({ produto });
};

const removerProduto = async (req, res) => {
    const idProduto = req.params.id;
    const idUsuario = req.usuario.userId;

    const produto = await Produto.findOne({ _id: idProduto, idUsuario });

    if (!produto) {
        return res.status(403).json({
            erro: 'Você não tem permissão para excluir este produto',
        });
    }

    await Produto.deleteOne({ _id: idProduto });
    res.status(204).send({ mensagem: 'Produto excluído com sucesso' });
};

const downloadImagem = async (req, res) => {
    const idProduto = req.params.id;
    const produto = await Produto.findById(idProduto);

    if (!produto) {
        return res.status(404).json({ erro: 'Produto não encontrado.' });
    }

    const caminhoImagem = `uploads/${produto.imagem}`;
    const imagem = fs.readFileSync(caminhoImagem);
    res.contentType('image/jpeg');
    res.status(200).send(imagem);
};

module.exports = {
    cadastrarProduto,
    editarProduto,
    buscarProduto,
    removerProduto,
    downloadImagem,
};
