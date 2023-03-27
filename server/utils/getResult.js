const getTirada = tirada => {
    switch (tirada) {
        case 0:
            return "piedra"
        case 1:
            return "papel"
        case 2:
            return "tijera"
        default:
            console.error("Error inesperado!")
            break;
    }
};

module.exports = {getTirada};