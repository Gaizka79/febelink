import '../styles/main.css';

import axios from 'axios';

import { useContext, useEffect, useState } from 'react';
import { userContext } from '../context/userContext';

import Ranking from './Ranking.jsx';
//import { response } from 'express';

function Main () {

    const { user } = useContext(userContext);

    const [ ronda, setRonda ] = useState({});
    const [ ranking, setRanking ] = useState([]);

    useEffect(() => {
        console.log("en el usefect del main")
        try {
            axios('/api/ranking')
                .then((response) => response.data)
                .then((response) => setRanking(response))
            setRonda(null)
        } catch (error) {
            console.error(error)
        }

    },[user]);

    const handleTirar = async () => {
        try {
            await axios(`/api/tirada?id=${user}`)
                .then((response) => response.data)
                .then((response) => {
                    setRonda(response[0])
                    setRanking(response[1])
                })
        } catch (error) {
            console.error(error)
        }
    }

    const handleReiniciar = async () => {
        try {
            await axios('/api/reiniciar')
                .then((response) => response.status)
                .then((response) => {
                    if (response === 200) setRanking([])})
            setRonda(null);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <main> 
            { (user && ronda) ? 
            <>
                <button className='button' onClick={handleTirar}>Jugar</button>
                <p>{user}: {ronda[user]}</p>
                <p>Computer: {ronda.computer}</p>
                <p>El ganador es: {ronda.winner}</p>
            </> : user ?
            <>
                <button className='button' onClick={handleTirar}>Jugar</button>
            </> :
                <p>Como quieres que te llame??</p>
            }
            <article className='ranking' >
                <Ranking ranking={ranking}/>
            </article>
            <button className='handleReiniciar' onClick={handleReiniciar}>Reiniciar</button>
        </main> 
        
    )
}

export default Main;