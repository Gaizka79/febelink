let savedData = []

const saveData = data => {
    if (data) savedData = [data, ...savedData]

    if (savedData.length < 10) return savedData
    return savedData.slice(0,10)
}

const reset = () => {
    savedData = [];
    console.log("Partida reiniciada");
}

module.exports = { saveData, reset };