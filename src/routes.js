const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const MedicamentoController = require('./controllers/MedicamentosController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/medicamentos', MedicamentoController.index);
routes.post('/medicamentos', upload.single('imagem'), MedicamentoController.store);

routes.get('/produto', MedicamentoController.show);

module.exports = routes;