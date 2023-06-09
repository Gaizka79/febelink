import { useContext } from 'react';

import { userContext } from '../context/userContext';

function Header () {

    const { user, setUser } = useContext(userContext);
    let userName;

    const handleChange = event => {
        event.preventDefault();
        userName = event.target.value;
    }

    const handleLogout = () => {
        setUser(null)
    }

    const handleSubmit = event => {
        event.preventDefault();
        setUser(userName)
    }

    return (
        <header className='login'>
            { user ?
            <>
                <p>Bienvenid@ {user}</p>
                <input type="button" id='logout' onClick={handleLogout} value="Logout" className='button'/>
            </> :
            <form onSubmit={handleSubmit} className="form">
                <input type="text" id='name' placeholder='Nombre...' onChange={handleChange} />
                <input type="submit" className='button' value="Login" />
            </form>
            }
        </header>
    )
};

export default Header;
