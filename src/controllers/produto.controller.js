const Produto = require('../models/Produto');

cadastrarProduto = async (req, res) => {
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
    await produto.save();
    res.json(produto);
};

const editarProduto = async (req, res) => {
    const idProduto = req.params.id;
    const idUsuario = req.usuario.userId;

    const produto = await Produto.findOne({ _id: idProduto, idUsuario });

    if (!produto) {
        return res.status(403).json({
            erro: 'Você não tem permissão para editar este produto',
        });
    }
    // TODO implementar edição de produto
    res.send('PUT OK');
};

module.exports = {
    cadastrarProduto,
    editarProduto,
};
