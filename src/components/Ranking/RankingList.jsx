import React from 'react';
import { List, Text } from '@mantine/core';

const formatTime = (ms) => (ms / 1000).toFixed(2);

export default function RankingList({ ranking, nome, tempoTotal, salvo }) {
  if (ranking.length === 0) {
    return <Text size="sm" c="dimmed">Ranking vazio, seja o primeiro a liderá-lo!</Text>;
  }

  return (
    <List withPadding my="md" maw={420} mx="auto" ta="left" className="w-full">
      {ranking.map((record, index) => (
        <List.Item
          key={index}
          className={(record.nome === nome && record.tempo === tempoTotal && salvo) ? 'bg-green-300 font-black text-black' : 'text-gray-800'}
        >
          <span className="font-semibold">{index + 1}º</span> — {record.nome} ({formatTime(record.tempo)}s)
        </List.Item>
      ))}
    </List>
  );
}
