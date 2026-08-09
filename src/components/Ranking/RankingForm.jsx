import React from 'react';
import { Paper, Text } from '@mantine/core';
import Input from '../common/Input';
import Button from '../common/Button';

export default function RankingForm({ nome, setNome, saving, onSave }) {
  return (
    <Paper className="mx-auto my-2 w-full max-w-[360px] p-4">
      <form onSubmit={onSave}>
        <Text size="sm" mb="sm" fw={900}>ENTRE_NO_RANKING_GLOBAL!</Text>
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
