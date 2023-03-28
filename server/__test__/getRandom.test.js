const {getRandomInt} = require('../utils/getRandom');

test('Get a random integer less than given value', (value = 3) => {
    expect(getRandomInt(value)).toBeGreaterThanOrEqual(0);
    expect(getRandomInt(value)).toBeLessThan(value);
});

