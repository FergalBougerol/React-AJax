import React from 'react';
import ReactDOM from 'react-dom';
import HomeP from './HomeP';
import Connexion from './Connexion';
import MenuV from './MenuV';
import Player from './Player';
import css from './Main.css';
/*jimporte mes fichiers */
/*
je construis ma page en appelant mes differents fichiers*/ 
const App = () => {
    return (
         <div>
        <HomeP/>
        <Connexion/>
        <MenuV/>
        <Player/>
        
        </div> 
        
        );
    };

ReactDOM.render(<App />, document.getElementById('root'));

