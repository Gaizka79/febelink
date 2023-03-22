import '../styles/header.css';
import { useContext, useState } from 'react';

import { userContext } from '../context/userContext';


function Header () {

    const [ values, setValues ] = useState(null);
    const { user, setUser } = useContext(userContext);

    const handleChange = event => {
        event.preventDefault();
        setValues(event.target.value);
    }

    const handleLogout = () => {
        setUser(null)
    }

    const handleSubmit = event => {
        event.preventDefault();
        setUser(values)
    }

    return (
        <header>
            { user ?
            <>
                <p>Bienvenido {user}</p>
                <input type="button" id='logout' onClick={handleLogout} value="Logout" className='button'/>
            </> :
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="name">Nombre:</label>
                <input type="text" id='name' placeholder='Nombre...' onChange={handleChange} />
                <input type="submit" className='button' />
            </form>
            }
        </header>
    )
};

export default Header;
