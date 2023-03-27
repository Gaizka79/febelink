const { getRandomInt } = require('../utils/getRandom.js');
const { getTirada } = require('../utils/getResult.js');
const { getWinner } = require('../utils/getWinner.js');
const { saveData, reset } = require('../utils/saveData.js');

const tirada = (req, res ) => {
    const player = req.query.id || "Player";
    const result = {}

    const playerTirada = getRandomInt(3)
    result[player] = getTirada(playerTirada)

    const computerTirada = getRandomInt(3)
    result.computer = getTirada(computerTirada)

    const winner = getWinner(result[player], result.computer, player)
    result.winner = winner;
    
    const historico = saveData(result)
    
    res.status(200).send([result, historico])
}

const ranking =  (req, res) => {
    const result =  saveData()
    res.status(200).json(result)
}

const reiniciar = (req, res) => {
    const message = reset();
    res.status(200).json(message)
}

const controllers = {
    tirada,
    ranking,
    reiniciar
};

module.exports = controllers;