import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; 

const formatTime = (ms) => (ms / 1000).toFixed(2);

function RankingScreen({ tempoTotal, ranking, onRankingUpdate, loading }) {
    const [nome, setNome] = useState('');
    const [salvo, setSalvo] = useState(false);
    const [saving, setSaving] = useState(false);
    
    const recordsMaisRapidos = ranking.filter(record => record.tempo < tempoTotal).length;
    const posicaoTemporaria = recordsMaisRapidos + 1;
    
    const handleSave = async (e) => {
        e.preventDefault();
        if (nome.trim() && !salvo && !saving) {
            setSaving(true);
            
            const novoRecord = {
                nome: nome.trim(),
                tempo_ms: tempoTotal,
            };

            const { error } = await supabase
                .from('ranking')
                .insert([novoRecord]);

            if (error) {
                alert(`Erro ao salvar no ranking: ${error.message}. Verifique as regras RLS do seu banco.`);
                setSaving(false);
                return;
            }

            setSalvo(true);
            setSaving(false);
            
            onRankingUpdate(); 
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>DESAFIO CONCLUÍDO!</h2>
            
            <h3 style={{ color: '#ffcc00', borderBottom: 'none' }}>
                Seu Tempo: {formatTime(tempoTotal)} segundos
            </h3>
            
            {!salvo && (
                <form onSubmit={handleSave} style={{ margin: '20px auto', maxWidth: '300px', padding: '15px', border: '1px solid #007bff' }}>
                    <p>Entre no Ranking Global!</p>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Seu Nome/Alias"
                        required
                        disabled={saving}
                        style={{ padding: '8px', width: '100%', marginBottom: '10px' }}
                    />
                    <button type="submit" disabled={saving} style={{ padding: '10px 15px', background: '#007bff', color: 'white' }}>
                        {saving ? 'Salvando...' : 'Salvar Pontuação'}
                    </button>
                </form>
            )}
            
            <h3 style={{ marginTop: '40px' }}>TOP 10 GLOBAL</h3>
            
            {loading ? (
                <p>Carregando ranking global...</p>
            ) : (
                <>
                    <p style={{ color: '#39ff14' }}>
                        {salvo ? `Você conquistou o ${posicaoTemporaria}º lugar!` : `Seu tempo lhe daria o ${posicaoTemporaria}º lugar.`}
                    </p>

                    <ol style={{ maxWidth: '400px', margin: '15px auto', listStyleType: 'decimal', textAlign: 'left', paddingLeft: '30px' }}>
                        {ranking.map((record, index) => (
                            <li 
                                key={index} 
                                style={{ 
                                    color: (record.nome === nome && record.tempo === tempoTotal && salvo) ? '#ffcc00' : '#00ff41', 
                                    fontWeight: (record.nome === nome && record.tempo === tempoTotal && salvo) ? 'bold' : 'normal',
                                    padding: '5px 0'
                                }}
                            >
                                {index + 1}º - {record.nome} ({formatTime(record.tempo)}s)
                            </li>
                        ))}
                    </ol>
                </>
            )}
            
            <p style={{ marginTop: '30px' }}>
                 Siga <a href="https://x.com/devhaddad" target="_blank" rel="noopener noreferrer">Pablo Haddad</a> para ver esse projeto!
            </p>
        </div>
    );
}

export default RankingScreen;