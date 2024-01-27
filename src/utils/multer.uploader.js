const multer = require('multer');

// Configuração do multer para upload de imagens
const armazenamento = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: armazenamento });

module.exports = upload;
