const Produto = require('../models/Produto');
const autenticar = require('../utils/autenticacao');
const upload = require('../utils/multer.uploader');
const {
    cadastrarProduto,
    editarProduto,
    buscarProduto,
    removerProduto,
    downloadImagem
} = require('../controllers/produto.controller');

const produtoRoutes = app => {
    app.post(
        '/produtos',
        autenticar,
        upload.single('imagem'),
        cadastrarProduto,
    );
    app.get('/produtos', autenticar, buscarProduto);

    app.put(
        '/produtos/:id',
        autenticar,
        upload.single('imagem'),
        editarProduto,
    );

    app.delete('/produtos/:id', autenticar, removerProduto);

    app.get('/produtos/:id/imagem', downloadImagem)
};

module.exports = produtoRoutes;
