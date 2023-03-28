const { saveData, reset } = require('../utils/saveData');
let savedData = [
    {
        a: "piedra",
        b: "papel",
        c: "a"
    },
    {
        a: "papel",
        b: "papel",
        c: "c"
    }
];

describe('Data saved and deleted', () => {
    test('data is added to main array savedData', () => {
        //savedData = [data, ...savedData];
        const data = {
            a: "piedra",
            b: "papel",
            c: "c"
            };
        expect(saveData(data)).toContain(data);
    })

    test('Saved data are deleted', () => {
        expect(reset(savedData)).toBe();
    })
})