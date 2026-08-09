import React from 'react';
import { Text } from '@mantine/core';

export default function RankingStats({ ranking }) {
  return (
    <Text size="sm" c="dimmed" className="text-center">
      <Text span fw={900} className="text-blue-600">{ranking.length}</Text> pessoas já jogaram F-DOZE!
    </Text>
  );
}
