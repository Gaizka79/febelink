const axios = require('axios');
const { tirada, ranking, reiniciar } = require('../controllers/controllers');


describe('', () => {
    
    test('', () => {

    });

    test('', () => {

    });

    test('Reset result route', async () => {
        const url = "https://localhost:5000/api/";
        const response = await axios.get(`${url}reiniciar`)

        expect(response).toBe(200)
        expect(response).toEqual({ message: "Ok"})
    });
})