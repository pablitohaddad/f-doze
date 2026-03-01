import React from 'react';
import { List, Text } from '@mantine/core';

const formatTime = (ms) => (ms / 1000).toFixed(2);

export default function RankingList({ ranking, nome, tempoTotal, salvo }) {
  if (ranking.length === 0) {
    return <Text size="sm" c="dimmed">Ranking vazio, seja o primeiro a liderá-lo!</Text>;
  }

  return (
    <List withPadding my="md" maw={420} mx="auto" ta="left">
      {ranking.map((record, index) => (
        <List.Item
          key={index}
          c={(record.nome === nome && record.tempo === tempoTotal && salvo) ? 'blue' : 'dark'}
        >
          {index + 1}º - {record.nome} ({formatTime(record.tempo)}s)
        </List.Item>
      ))}
    </List>
  );
}
