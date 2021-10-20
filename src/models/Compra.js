const mongoose = require('mongoose');
const medicamento = require('./Medicamento');

const CompraSchema = new mongoose.Schema({
    id: Number,
    medicamentos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medicamento'
    },
    quantidade: Number,
    valorTotal: String
});

module.exports = mongoose.model('Compra', CompraSchema);