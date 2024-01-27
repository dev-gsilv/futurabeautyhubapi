const Produto = require('../models/Produto');
const autenticar = require('../utils/autenticacao');
const upload = require('../utils/multer.uploader');
const {
    cadastrarProduto,
    editarProduto,
} = require('../controllers/produto.controller');

const produtoRoutes = app => {
    app.post(
        '/produtos',
        autenticar,
        upload.single('imagem'),
        cadastrarProduto,
    );

    app.put('/produtos/:id', autenticar, editarProduto);
};

module.exports = produtoRoutes;
