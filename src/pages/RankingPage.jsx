import React, { useEffect, useState } from 'react';
import { Card, Text, Title } from '@mantine/core';
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
    <Card withBorder radius="lg" shadow="sm" p="xl">
      <Title order={2}>Ranking</Title>
      <Text c="dimmed" mt="xs">Acompanhe os melhores tempos globais do F-DOZE.</Text>
      <RankingScreen
        isIntro={true}
        tempoTotal={0}
        ranking={ranking}
        loading={loadingRanking}
        onRankingUpdate={fetchRanking}
      />
    </Card>
  );
}
