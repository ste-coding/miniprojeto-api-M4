const express = require('express');
const router = express.Router();
const ewasteController = require('../controllers/ewasteController');

// listar todos os pontos de coleta
router.get('/recycling-points', ewasteController.getAllPoints);

// listar pontos de coleta por cidade
router.get('/points/city/:city', ewasteController.getPointsByCity);

// listar pontos de coleta por tipo de lixo eletrônico aceito
router.get('/points/type/:type', ewasteController.getPointsByType);

// adicionar ponto de coleta
router.post('/recycling-points', ewasteController.addPoint);

// deletar ponto de coleta
router.delete('/recycling-points/:id', ewasteController.deletePoint);

module.exports = router;
