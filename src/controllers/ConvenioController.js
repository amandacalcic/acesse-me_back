const Convenio = require('../models/Convenio');

module.exports = {
    async index(req, res){
        const convenios = await Convenio.getMaxListeners();

        return res.json(convenios);
    },

    async store(req, res){
        const { filename } = req.file;
        const { nome, nomeImagem  } = req.body;

        const convenio = await Convenio.create({
            imagem: filename,
            nome,
            nomeImagem
        })

        return res.json(convenio)
    }
};