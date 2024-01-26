const express = require('express');

const router = express.Router();
/*
router.post('/produtos', autenticar, upload.single('imagem'), async (req, res) => {
    const { nome, categoria } = req.body;
    const idUsuario = req.usuario.userId;
    const imagem = req.file.filename;
    const produto = new Produto({ nome, categoria, idUsuario, imagem });
    await produto.save();
    res.json(produto);
});

router.put('/produtos/:id', autenticar, async (req, res) => {
    const idProduto = req.params.id;
    const idUsuario = req.usuario.userId;

    const produto = await Produto.findOne({ _id: idProduto, idUsuario });

    if (!produto) {
        return res
            .status(403)
            .json({ erro: 'Você não tem permissão para editar este produto' });
    }
});
*/