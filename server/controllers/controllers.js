const { getRandomInt } = require('../utils/random.js');

const jugador = (req, res) => {
    console.log("en la partida del jugador");
    const tirada = getRandomInt(3);
    res.status(200).json({ message: `${tirada}`})
};

const computer = (req, res) => {
    console.log("en la tirada del ordenador");
    const tirada = getRandomInt(3);
    res.status(200).json({ message: `${tirada}`})
};

const controllers = {
    jugador,
    computer
};

module.exports = controllers;