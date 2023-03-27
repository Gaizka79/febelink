const {getTirada} = require('../utils/getResult');

test('Get piedra, papel or tijera from a random integer (0, 1, 2)', () => {
    expect(getTirada(0)).toBe("piedra");
    expect(getTirada(1)).toBe("papel");
    expect(getTirada(2)).toBe("tijera");
});