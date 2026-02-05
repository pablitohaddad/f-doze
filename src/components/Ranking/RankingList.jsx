import React from 'react';

const formatTime = (ms) => (ms / 1000).toFixed(2);

export default function RankingList({ ranking, nome, tempoTotal, salvo }) {
  return (
    <ol className="mx-auto my-4 max-w-md list-decimal space-y-2 pl-6 text-left">
      {ranking.length === 0 ? (
        <p className="text-sm text-gray-300">Ranking vazio, seja o primeiro a lidera-lo!</p>
      ) : ranking.map((record, index) => (
        <li
          key={index}
          className={(record.nome === nome && record.tempo === tempoTotal && salvo)
            ? 'font-bold text-yellow-300'
            : 'text-green-300'
          }
        >
          {index + 1}º - {record.nome} ({formatTime(record.tempo)}s)
        </li>
      ))}
    </ol>
  );
}
