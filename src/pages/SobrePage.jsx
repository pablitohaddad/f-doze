import React from 'react';
import { Card, Text, Title } from '@mantine/core';

export default function SobrePage() {
  return (
    <Card withBorder radius="lg" shadow="sm" p="xl">
      <Title order={2} mb="md">Sobre</Title>
      <Text c="dimmed">
        O F-DOZE é um jogo educacional para praticar DevTools no navegador com desafios progressivos,
        cronômetro e ranking global. A proposta é aprender na prática usando inspeção, console, rede
        e armazenamento local.
      </Text>
    </Card>
  );
}
