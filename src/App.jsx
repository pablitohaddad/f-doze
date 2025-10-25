// src/App.jsx

import React, { useState, useCallback } from 'react';
import LoginScreen from './components/LoginScreen'; 
import BotaoFugitivo from './components/BotaoFugitivo'; 
import './App.css'; 
import DesafioCSS from './components/DesafioCSS';

function App() {
  const [desafioConcluido, setDesafioConcluido] = useState(0); 

  const avancarFase = useCallback(() => {
    setDesafioConcluido(prevFase => prevFase + 1); 
  }, []);

  return (
    <div className="app-container">

        <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto', padding: '0 20px', boxSizing: 'border-box', textAlign: 'center' }}>

            <h1>Desafio de Inspecionar Elemento - Nível {desafioConcluido + 1}</h1>
            
            {desafioConcluido === 0 && (
                <LoginScreen onSucesso={avancarFase} />
            )}
            
            {desafioConcluido === 1 && (
                <BotaoFugitivo onSucesso={avancarFase} />
            )}
            
            {desafioConcluido === 2 && (
                <DesafioCSS onSucesso={avancarFase} />
            )}

            {desafioConcluido >= 3 && (
                <h2>
                    [STATUS: CONCLUÍDO] <br/>
                    Parabéns! Você concluiu a primeira parte do projeto! Siga <a href="https://x.com/devhaddad" target='_blank' rel='noopener noreferrer'>Pablo Haddad</a> para ver esse projeto!
                </h2>
            )}
            
        </div>
    </div>
  );
}

export default App;