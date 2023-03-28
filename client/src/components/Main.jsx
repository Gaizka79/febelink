import axios from 'axios';

import { useContext, useEffect, useState } from 'react';
import { userContext } from '../context/userContext';

import Ranking from './Ranking.jsx';

import piedra from '../assets/piedra.png';
import papel from '../assets/papel.png';
import tijeras from '../assets/tijeras.png';

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

    const getIcono = icono => {
        switch (icono) {
            case "piedra":
                return piedra
            case "papel":
                return papel
            case "tijera":
                return tijeras
            default:
                console.error("Error inesperado!");
                break;
        }
    }

    return (
        <main> 
            { (user && ronda) ? 
            <div className='ronda'>
                <p>{user}: {ronda[user]}</p>
                <img src={getIcono(ronda[user])} alt="piedra" className='icono' />
                <p>Computer: {ronda.computer}</p>
                <img src={getIcono(ronda.computer)} alt="piedra" className='icono' />
                <p>El ganador es: {ronda.winner}</p>
                <button className='button' onClick={handleTirar}>Jugar</button>
            </div> : user ?
            <>
                <button className='button' onClick={handleTirar}>Jugar</button>
            </> :
                <p>Como quieres que te llame??</p>
            }
            <article className='ranking' >
                <Ranking ranking={ranking}/>
                <button className='button' onClick={handleReiniciar}>Reiniciar</button>
            </article>
            
        </main> 
        
    )
}

export default Main;