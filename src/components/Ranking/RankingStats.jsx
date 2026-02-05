import React from 'react';

export default function RankingStats({ ranking }) {
  return (
    <p className="text-sm text-gray-200">
      <span className="font-bold text-yellow-300">{ranking.length}</span> pessoas já jogaram f-doze!
    </p>
  );
}
