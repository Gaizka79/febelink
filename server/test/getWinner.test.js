const getWinner = require('../utils/getWinner');
const playerName = "playerName";

test('Check if both tiradas are the same', () => {
    const player = "piedra", computer = "piedra";
    expect(getWinner(player, computer, playerName)).toBe("Empate")
});

test('Check if piedra wins to papel', () => {
    const player = "piedra", computer = "papel";
    expect(getWinner(player, computer, playerName)).toBe("Computer")
});

test('Check if piedra wins to tijera', () => {
    const player = "piedra", computer = "tijera";
    expect(getWinner(player, computer, playerName)).toBe(playerName)   
});

test('Check if papel wins to piedra', () => {
    const player = "papel", computer = "piedra";
    expect(getWinner(player, computer, playerName)).toBe(playerName)
});

test('Check if papel wins to tijera', () => {
    const player = "papel", computer = "tijera";
    expect(getWinner(player, computer, playerName)).toBe("Computer")
});

test('Check if tijera wins to piedra', () => {
    const player = "tijera", computer = "piedra";
    expect(getWinner(player, computer, playerName)).toBe("Computer")
});

test('Check if tijera wins to papel', () => {
    const player = "tijera", computer = "papel";
    expect(getWinner(player, computer, playerName)).toBe(playerName)
});