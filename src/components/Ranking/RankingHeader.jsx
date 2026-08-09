import React from 'react';
import { Text, Title } from '@mantine/core';

export default function RankingHeader({ isIntro, tempoTotal }) {
  const formatTime = (ms) => (ms / 1000).toFixed(2);
  return (
    <div className="text-center">
      {!isIntro && (<Title order={2}>DESAFIO_CONCLUÍDO!</Title>)}
      {!isIntro && (
        <Text mt="xs" c="dimmed">Seu tempo: {formatTime(tempoTotal)} segundos</Text>
      )}
    </div>
  );
}
