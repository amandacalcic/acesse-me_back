const mongoose = require('mongoose');

const MedicamentoSchema = new mongoose.Schema({
    id: Number,
    nome: String,    
    indicacao: String,
    contraIndicacao: String,
    nomeImagem: String,
    imagem: String,
    setor: String,
    prateleira: String,
    valor: Number
}, {
    toJSON: {
        virtuals: true,
    }
});

MedicamentoSchema.virtual('imagem_url').get(function () {
    return `http://localhost:3333/files/${this.imagem}`
})

module.exports = mongoose.model('Medicamento', MedicamentoSchema);