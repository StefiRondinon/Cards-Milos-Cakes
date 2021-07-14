import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import CardsConteiner from './Components/CardsConteiner';
import TitlePrincipal from './Components/TitlePrincipal';
import './App.css';
import Contacto from './Components/Contacto';
import Menu from './Components/Menu';


function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <div>
          <TitlePrincipal />
          <CardsConteiner />
          <Route path="/contacto" exact component={Contacto} />
          <Route path="/menu" exact component={Menu} />

        </div>
      </div>

    </BrowserRouter>

  )
}

export default App
