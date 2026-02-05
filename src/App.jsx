import React, { useState, useCallback, useEffect } from 'react';
// ...existing code...

import LoginScreen from './components/LoginScreen';
import BotaoFugitivo from './components/BotaoFugitivo';
import DesafioCSS from './components/DesafioCSS';
import LocalStorage from './components/LocalStorage';
import IntroScreen from './components/IntroScreen';
import RankingScreen from './components/RankingScreen';
import { API_RESULTADOS } from './api';

const FASE_INTRO = 0;
const FASE_PRIMEIRO_DESAFIO = 1;
const FASE_ULTIMO_DESAFIO = 4;
const FASE_RANKING = FASE_ULTIMO_DESAFIO + 1;

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
    try {
      const response = await fetch(API_RESULTADOS);
      const data = await response.json();
      const lista = Array.isArray(data) ? data : (data.content || []);
      const rankingFormatado = lista.slice(0, 10).map(item => ({
        nome: item.nome,
        tempo: item.tempo_ms
      }));
      setRanking(rankingFormatado);
    } catch (error) {
      console.error('Erro ao buscar ranking:', error);
    }
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

    return <p className="my-4 text-yellow-300">Tempo: **{segundos}s**</p>;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-green-300">
      <div className="mx-auto w-full max-w-[900px] px-5 py-10 text-center font-mono">
        <div className="rounded-lg border border-green-500 bg-slate-900/60 p-6 shadow-[0_0_20px_rgba(57,255,20,0.25)]">

        {faseAtual >= FASE_PRIMEIRO_DESAFIO && faseAtual <= FASE_ULTIMO_DESAFIO && <Cronometro />}

        {faseAtual === FASE_INTRO && <IntroScreen
          onRankingUpdate={fetchRanking}
          tempoTotal={0}
          loading={loadingRanking}
          ranking={ranking}
          onStart={iniciarDesafio} />}  

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
    </div>
  );
}

export default App;