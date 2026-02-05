
import React, { useState } from 'react';
import RankingHeader from './Ranking/RankingHeader';
import RankingForm from './Ranking/RankingForm';
import RankingList from './Ranking/RankingList';
import RankingStats from './Ranking/RankingStats';
import { API_RESULTADOS } from '../api';

function RankingScreen({ tempoTotal, ranking, onRankingUpdate, loading, isIntro = false }) {
    const [nome, setNome] = useState('');
    const [salvo, setSalvo] = useState(false);
    const [saving, setSaving] = useState(false);


    const recordsMaisRapidos = Array.isArray(ranking)
        ? ranking.filter(record => record.tempo < tempoTotal).length
        : 0;
    const posicaoTemporaria = recordsMaisRapidos + 1;

    const handleSave = async (e) => {
        e.preventDefault();
        if (nome.trim() && !salvo && !saving) {
            setSaving(true);
            const novoRecord = {
                nome: nome.trim(),
                tempo_ms: tempoTotal,
            };
            try {
                const response = await fetch(API_RESULTADOS, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(novoRecord)
                });
                if (!response.ok) {
                    const errorData = await response.json();
                    alert(`Erro ao salvar no ranking: ${errorData.error || response.statusText}`);
                    setSaving(false);
                    return;
                }
                setSalvo(true);
                setSaving(false);
                onRankingUpdate();
            } catch (error) {
                alert(`Erro ao salvar no ranking: ${error.message}`);
                setSaving(false);
            }
        }
    };

    return (
        <div className="text-center">
            <RankingHeader isIntro={isIntro} tempoTotal={tempoTotal} />
            {(!salvo && !isIntro) && (
                <RankingForm nome={nome} setNome={setNome} saving={saving} onSave={handleSave} />
            )}
            <RankingStats ranking={ranking} />
            <h3 className="mt-10 text-xl font-semibold text-green-300">TOP 10 GLOBAL</h3>
            {loading ? (
                <p className="text-gray-200">Carregando ranking global...</p>
            ) : (
                <>
                    {!isIntro && (<p className="text-green-300">
                        {salvo ? `Você conquistou o ${posicaoTemporaria}º lugar!` : `Seu tempo lhe daria o ${posicaoTemporaria}º lugar.`}
                    </p>)}
                    <RankingList ranking={ranking} nome={nome} tempoTotal={tempoTotal} salvo={salvo} />
                </>
            )}
            <p className="mt-8 text-sm text-gray-300">
                Veja o <a href="https://github.com/pablitohaddad/f-doze" target="_blank" rel="noopener noreferrer">Codigo Fonte</a> do projeto!
            </p>
        </div>
    );
}

export default RankingScreen;