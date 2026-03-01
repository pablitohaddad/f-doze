import React from 'react';
import { Paper, Text } from '@mantine/core';
import Input from '../common/Input';
import Button from '../common/Button';

export default function RankingForm({ nome, setNome, saving, onSave }) {
  return (
    <Paper withBorder radius="md" p="md" maw={320} mx="auto" my="md">
      <form onSubmit={onSave}>
        <Text size="sm" mb="sm">Entre no Ranking Global!</Text>
        <Input
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder="Seu Nome/Alias"
          required
          disabled={saving}
        />
        <Button type="submit" disabled={saving} fullWidth mt="sm">
          {saving ? 'Salvando...' : 'Salvar Pontuação'}
        </Button>
      </form>
    </Paper>
  );
}
