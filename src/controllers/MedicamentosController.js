// index, show, store, update, destroy
const Medicamento = require('../models/Medicamento');

module.exports = {
    async index(req, res){
        const { produto } = req.query;
        const medicamentos = await Medicamento.find({ nome: new RegExp('.*' + produto + '.*', 'i') });

        return res.json(medicamentos);
    },

    async show(req, res){
        const { produto_id } = req.headers;        

        const medicamentos = await Medicamento.findById(produto_id);

        return res.json(medicamentos);
    },

    async store(req, res){
        const { filename } = req.file;
        const { nome, valor, indicacao, contraIndicacao, setor, prateleira } = req.body;

        const medicamento = await Medicamento.create({
            imagem: filename,
            nome,
            valor,
            indicacao,
            contraIndicacao,
            setor,
            prateleira
        })

        return res.json(medicamento)
    }
};