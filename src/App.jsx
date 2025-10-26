import React, { useState, useCallback, useEffect } from 'react';
import { supabase } from './supabaseClient';

import LoginScreen from './components/LoginScreen'; 
import BotaoFugitivo from './components/BotaoFugitivo'; 
import DesafioCSS from './components/DesafioCSS'; 
import LocalStorage from './components/LocalStorage'; 
import IntroScreen from './components/IntroScreen';
import RankingScreen from './components/RankingScreen';
import './App.css'; 

const FASE_INTRO = 0;
const FASE_PRIMEIRO_DESAFIO = 1;
const FASE_ULTIMO_DESAFIO = 4;
const FASE_RANKING = FASE_ULTIMO_DESAFIO + 1; // 5

function App() {
  const [faseAtual, setFaseAtual] = useState(FASE_INTRO);
  const [tempoInicio, setTempoInicio] = useState(null);
  const [tempoFinal, setTempoFinal] = useState(null);
  const [ranking, setRanking] = useState([]);
  const [loadingRanking, setLoadingRanking] = useState(true);

  const iniciarDesafio = () => {
    setTempoInicio(Date.now());
    setFaseAtual(FASE_PRIMEIRO_DESAFIO);
  };
  
  const fetchRanking = async () => {
    setLoadingRanking(true);
    const { data, error } = await supabase
      .from('ranking') 
      .select('nome, tempo_ms') 
      .order('tempo_ms', { ascending: true }) 
      .limit(10); 

    if (error) {
      console.error('Erro ao buscar ranking:', error);
      setLoadingRanking(false);
      return; 
    }
    
    const rankingFormatado = data.map(item => ({
        nome: item.nome,
        tempo: item.tempo_ms
    }));

    setRanking(rankingFormatado);
    setLoadingRanking(false);
  };
  
  const avancarFase = useCallback(() => {
      setFaseAtual(prevFase => {
          const proximaFase = prevFase + 1;
          
          if (prevFase === FASE_ULTIMO_DESAFIO) { 
              setTempoFinal(Date.now());
              fetchRanking();
              return FASE_RANKING;       
          }
          return proximaFase;
      });
  }, []);

  useEffect(() => {
    fetchRanking();
  }, []);
  
  const Cronometro = () => {
      const [tempoDecorrido, setTempoDecorrido] = useState(0);

      useEffect(() => {
          if (tempoInicio !== null && tempoFinal === null) {
              const interval = setInterval(() => {
                  setTempoDecorrido(Date.now() - tempoInicio);
              }, 100); 
              
              return () => clearInterval(interval); 
          }
      }, [tempoInicio, tempoFinal]); 

      const tempoAExibir = tempoFinal !== null ? tempoFinal - tempoInicio : tempoDecorrido;
      const segundos = (tempoAExibir / 1000).toFixed(2);
      
      return <p style={{ color: '#ffcc00', fontSize: '1.2em', margin: '15px 0' }}>Tempo: **{segundos}s**</p>;
  };

  return (
    <div className="app-container">
      <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto', padding: '0 20px', boxSizing: 'border-box', textAlign: 'center' }}>
        
        {faseAtual >= FASE_PRIMEIRO_DESAFIO && faseAtual <= FASE_ULTIMO_DESAFIO && <Cronometro />}
        
        {faseAtual === FASE_INTRO && <IntroScreen onStart={iniciarDesafio} />}

        {faseAtual === FASE_PRIMEIRO_DESAFIO && <LoginScreen onSucesso={avancarFase} />}
        {faseAtual === FASE_PRIMEIRO_DESAFIO + 1 && <BotaoFugitivo onSucesso={avancarFase} />}
        {faseAtual === FASE_PRIMEIRO_DESAFIO + 2 && <DesafioCSS onSucesso={avancarFase} />}
        {faseAtual === FASE_PRIMEIRO_DESAFIO + 3 && <LocalStorage onSucesso={avancarFase} />}
        

        {faseAtual === FASE_RANKING && tempoFinal !== null && (
            <RankingScreen 
                tempoTotal={tempoFinal - tempoInicio} 
                ranking={ranking}
                loading={loadingRanking}
                onRankingUpdate={fetchRanking}     
            />
        )}
      </div>
    </div>
  );
}

export default App;