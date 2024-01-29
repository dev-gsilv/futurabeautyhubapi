const mongoose = require('mongoose');

function validacaoMongoSchema(obj, res) {
    let err = obj.validateSync();

    if (err instanceof mongoose.Error.ValidationError) {
        const path = err.errors[Object.keys(err.errors)[0]].properties.path;
        console.log(
            `${new Date().toISOString()} - ERRO! Tipo: ${
                err.errors[path].kind
            }; Msg:${err.errors[path].message}`,
        );
        res.status(400).send(err.errors[path].message);
        return false;
    } else return true;
}

module.exports = { validacaoMongoSchema };
