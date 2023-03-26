const express = require('express');
const routes = express.Router();

const { tirada, reiniciar, ranking } = require('../controllers/controllers.js');

routes.get('/tirada', tirada);
routes.get('/ranking', ranking); //Ranking inicial
routes.get('/reiniciar', reiniciar);

module.exports = routes;