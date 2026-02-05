import React from 'react';

export default function RankingHeader({ isIntro, tempoTotal }) {
  const formatTime = (ms) => (ms / 1000).toFixed(2);
  return (
    <>
      {!isIntro && (<h2 className="text-2xl font-bold text-green-300">DESAFIO CONCLUÍDO!</h2>)}
      {!isIntro && (
        <h3 className="mt-2 text-yellow-300">Seu Tempo: {formatTime(tempoTotal)} segundos</h3>
      )}
    </>
  );
}
