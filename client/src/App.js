import { BrowserRouter } from 'react-router-dom';
import { userContext } from './context/userContext';
import { useState } from 'react';

//import './App.css';
import './styles/styles.scss';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [ user, setUser ] = useState(null);
  const usuario = { user, setUser };

  return (
    <div className="App">
        <BrowserRouter>
          <userContext.Provider value={usuario}>
            <Header/>
            <Main/>
          </userContext.Provider>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
