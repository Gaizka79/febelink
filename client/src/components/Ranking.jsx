function Ranking (props) {

    const { ranking } = props;

    const ordenar = (str, i) => {
        //console.log(JSON.parse(str))
        //console.log(str);
        const regex = /"|{|}/g
        return <ul key={i}>{JSON.stringify(str).replace(regex, " ")}</ul>
    
    }

    const paintRanking = ranking.map((partida, i) =>
        ordenar(partida, i))
        //ordenar(JSON.stringify(partida)))
        //<li key={i}>{JSON.stringify(partida)}</li>)
    
    return (
        <div className="ranking2">
            <h3>Ranking</h3>
            <div className="listas">
                <ol>{ranking && paintRanking}</ol>
            </div>
            {/* <button className='button' onClick={handleReiniciar}>Reiniciar</button> */}
        </div>
    )
}

export default Ranking;
