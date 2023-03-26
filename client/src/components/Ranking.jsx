import '../styles/ranking.css';

function Ranking (props) {

    const { ranking } = props;

    const paintRanking = ranking.map((partida, i) =>
            <li key={i}>{JSON.stringify(partida)}</li>)
    
    return (
        <>
            <h3>Ranking</h3>
            <ul>{ranking && paintRanking}</ul>
        </>
    )
}

export default Ranking;
