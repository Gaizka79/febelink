const getWinner = ( player, computer, playerName ) => {
    //console.log(player + " -- " + computer + " -- " + playerName)

    if (player === computer ) return "Empate"
    switch (player) {
        case "piedra":
            if (computer === "papel")
                return "Computer"
            return playerName
        case "papel":
            if (computer === "tijera")
                return "Computer"
            return playerName
        case "tijera":
            if (computer === "piedra")
                return "Computer"
            return playerName
        default:
            throw console.error("Error inesperado!!");
    }
}

module.exports = {getWinner};