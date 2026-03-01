import React from 'react';
import { Text } from '@mantine/core';

export default function RankingStats({ ranking }) {
  return (
    <Text size="sm" c="dimmed">
      <Text span fw={700}>{ranking.length}</Text> pessoas já jogaram f-doze!
    </Text>
  );
}
