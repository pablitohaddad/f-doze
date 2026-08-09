import React, { useEffect, useState } from 'react';
import { Paper, Stack, Text, Title } from '@mantine/core';
import RankingScreen from '../components/RankingScreen';
import { API_RESULTADOS } from '../api';

export default function RankingPage() {
  const [ranking, setRanking] = useState([]);
  const [loadingRanking, setLoadingRanking] = useState(true);

  const fetchRanking = async () => {
    setLoadingRanking(true);
    try {
      const response = await fetch(API_RESULTADOS);
      const data = await response.json();
      const lista = Array.isArray(data) ? data : (data.content || []);
      const rankingFormatado = lista
        .map(item => ({
          nome: item.nome,
          tempo: Number(item.tempo_ms ?? item.tempoMs ?? 0)
        }))
        .filter(item => Number.isFinite(item.tempo) && item.tempo >= 0)
        .sort((a, b) => a.tempo - b.tempo)
        .slice(0, 10);
      setRanking(rankingFormatado);
    } catch (error) {
      console.error('Erro ao buscar ranking:', error);
    }
    setLoadingRanking(false);
  };

  useEffect(() => {
    fetchRanking();
  }, []);

  return (
    <Stack gap="lg">
      <Paper className="p-6 md:p-8">
        <Title order={2}>./RANKING_GLOBAL</Title>
        <Text c="dimmed" className="mt-2">
          Veja os melhores tempos, acompanhe a evolução e desafie-se a fazer melhor.
        </Text>
      </Paper>
      <RankingScreen
        isIntro={true}
        tempoTotal={0}
        ranking={ranking}
        loading={loadingRanking}
        onRankingUpdate={fetchRanking}
      />
    </Stack>
  );
}
