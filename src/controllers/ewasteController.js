const Joi = require('joi');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const RecyclingPoint = require('../models/ewasteModel.js');

const dataPath = path.resolve(__dirname, '../db.json');

const getAllPoints = (req, res) => {
    try {
        const points = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        res.status(200).json(points);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar pontos de coleta.' });
    }
};

// pontos de coleta por cidade
const getPointsByCity = (req, res) => {
    const city = req.params.city;
    try {
        const points = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        const filteredPoints = points.filter(point => point.city.toLowerCase() === city.toLowerCase());
        res.status(200).json(filteredPoints);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar pontos de coleta por cidade.' });
    }
};

// pontos de coleta por tipo de ewaste
const getPointsByType = (req, res) => {
    const type = req.params.type;
    try {
        const points = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        const filteredPoints = points.filter(point => point.type.toLowerCase() === type.toLowerCase());
        res.status(200).json(filteredPoints);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar pontos de coleta por tipo de resíduo.' });
    }
};

// adicionar ponto de coleta
const addPoint = (req, res) => {
    const { error } = addPointSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const { name, city, type } = req.body;
    const newPoint = new RecyclingPoint(name, city, type);

    try {
        let points = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        
        newPoint.id = uuidv4();

        points.push(newPoint);
        fs.writeFileSync(dataPath, JSON.stringify(points, null, 2));
        res.status(201).json(newPoint);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao adicionar ponto de coleta.' });
    }
};

// deletar ponto de coleta
const deletePoint = (req, res) => {
    const { id } = req.params;

    try {
        let points = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        const index = points.findIndex(point => point.id === id);
        
        if (index === -1) {
            return res.status(404).json({ message: 'Ponto de coleta não encontrado.' });
        }

        const deletedPoint = points.splice(index, 1)[0];
        fs.writeFileSync(dataPath, JSON.stringify(points, null, 2));
        res.json(deletedPoint);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao deletar ponto de coleta.' });
    }
};

//validação para adicionar ponto de coleta
const addPointSchema = Joi.object({
    name: Joi.string().required(),
    city: Joi.string().required(),
    type: Joi.string().valid('baterias', 'computadores', 'celulares', 'televisores').required(),
    street_address: Joi.string().required(),
    contact: Joi.string().required()

});

module.exports = {
    getAllPoints,
    getPointsByCity,
    getPointsByType,
    addPoint,
    deletePoint
};