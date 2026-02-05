import React from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

export default function RankingForm({ nome, setNome, saving, onSave }) {
  return (
    <form onSubmit={onSave} className="mx-auto my-5 max-w-xs rounded-md border border-blue-600 p-4">
      <p className="mb-3 text-sm text-gray-200">Entre no Ranking Global!</p>
      <Input
        type="text"
        value={nome}
        onChange={e => setNome(e.target.value)}
        placeholder="Seu Nome/Alias"
        required
        disabled={saving}
        className="mb-3"
      />
      <Button type="submit" disabled={saving} className="w-full">
        {saving ? 'Salvando...' : 'Salvar Pontuação'}
      </Button>
    </form>
  );
}
