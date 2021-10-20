const mongoose = require('mongoose');

const ConvenioSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    imagem: String,
    nomeImagem: String
}, {
    toJSON: {
        virtuals: true,
    }
});

ConvenioSchema.virtual('imagem_url').get(function () {
    return `http://localhost:3333/files/${this.imagem}`
})

module.exports = mongoose.model('Convenio', ConvenioSchema);