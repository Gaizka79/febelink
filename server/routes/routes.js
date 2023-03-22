const express = require('express');
const routes = express.Router();

const { jugador, computer } = require('../controllers/controllers.js');

routes.get('/jugador', jugador);
routes.get('/computer', computer);

module.exports = routes;