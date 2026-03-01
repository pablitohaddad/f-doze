import React, { useState, useCallback, useEffect } from 'react';
import { Card, Text, Title } from '@mantine/core';

import LoginScreen from '../components/LoginScreen';
import BotaoFugitivo from '../components/BotaoFugitivo';
import DesafioCSS from '../components/DesafioCSS';
import LocalStorage from '../components/LocalStorage';
import IntroScreen from '../components/IntroScreen';

const DESAFIOS = [LoginScreen, BotaoFugitivo, DesafioCSS, LocalStorage];

const FASE_INTRO = 0;
const FASE_PRIMEIRO_DESAFIO = 1;
const FASE_ULTIMO_DESAFIO = FASE_PRIMEIRO_DESAFIO + DESAFIOS.length - 1;
const FASE_CONCLUIDO = FASE_ULTIMO_DESAFIO + 1;

export default function JogoPage() {
  const [faseAtual, setFaseAtual] = useState(FASE_INTRO);
  const [tempoInicio, setTempoInicio] = useState(null);
  const [tempoFinal, setTempoFinal] = useState(null);

  const iniciarDesafio = () => {
    setTempoInicio(Date.now());
    setFaseAtual(FASE_PRIMEIRO_DESAFIO);
  };

  const avancarFase = useCallback(() => {
    setFaseAtual(prevFase => {
      const proximaFase = prevFase + 1;

      if (prevFase === FASE_ULTIMO_DESAFIO) {
        setTempoFinal(Date.now());
        return FASE_CONCLUIDO;
      }
      return proximaFase;
    });
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

    return <Text my="sm" c="dimmed">Tempo: {segundos}s</Text>;
  };

  return (
    <Card withBorder radius="lg" shadow="sm" p="xl">
      {faseAtual >= FASE_PRIMEIRO_DESAFIO && faseAtual <= FASE_ULTIMO_DESAFIO && <Cronometro />}

      {faseAtual === FASE_INTRO && (
        <IntroScreen
          onStart={iniciarDesafio}
        />
      )}

      {faseAtual >= FASE_PRIMEIRO_DESAFIO && faseAtual <= FASE_ULTIMO_DESAFIO && (() => {
        const indiceDesafio = faseAtual - FASE_PRIMEIRO_DESAFIO;
        const DesafioAtual = DESAFIOS[indiceDesafio];
        return <DesafioAtual onSucesso={avancarFase} />;
      })()}

      {faseAtual === FASE_CONCLUIDO && tempoFinal !== null && (
        <Card withBorder radius="md" p="lg">
          <Title order={3}>Parabéns, desafio concluído!</Title>
          <Text mt="xs" c="dimmed">Seu tempo final foi de {((tempoFinal - tempoInicio) / 1000).toFixed(2)}s.</Text>
          <Text mt="sm" c="dimmed">Veja o ranking no menu superior, na aba “Ranking”.</Text>
        </Card>
      )}
    </Card>
  );
}
