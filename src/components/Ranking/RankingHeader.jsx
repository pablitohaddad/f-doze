import React from 'react';
import { Text, Title } from '@mantine/core';

export default function RankingHeader({ isIntro, tempoTotal }) {
  const formatTime = (ms) => (ms / 1000).toFixed(2);
  return (
    <>
      {!isIntro && (<Title order={2}>Desafio concluído!</Title>)}
      {!isIntro && (
        <Text mt="xs" c="dimmed">Seu tempo: {formatTime(tempoTotal)} segundos</Text>
      )}
    </>
  );
}
