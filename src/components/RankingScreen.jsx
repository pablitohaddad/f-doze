
import React, { useState } from 'react';
import { Anchor, Paper, Stack, Text, Title } from '@mantine/core';
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
        <Stack align="center" gap="xs" mt="lg">
            <RankingHeader isIntro={isIntro} tempoTotal={tempoTotal} />
            {(!salvo && !isIntro) && (
                <RankingForm nome={nome} setNome={setNome} saving={saving} onSave={handleSave} />
            )}
            <RankingStats ranking={ranking} />
            <Paper withBorder radius="md" p="md" w="100%" maw={520}>
                <Title order={3} ta="center">Top 10 global</Title>
                {loading ? (
                    <Text c="dimmed" mt="sm">Carregando ranking global...</Text>
                ) : (
                    <>
                        {!isIntro && (<Text c="dimmed" mt="sm">
                            {salvo ? `Você conquistou o ${posicaoTemporaria}º lugar!` : `Seu tempo lhe daria o ${posicaoTemporaria}º lugar.`}
                        </Text>)}
                        <RankingList ranking={ranking} nome={nome} tempoTotal={tempoTotal} salvo={salvo} />
                    </>
                )}
            </Paper>
            <Text mt="sm" size="sm" c="dimmed">
                Veja o <Anchor href="https://github.com/pablitohaddad/f-doze" target="_blank" rel="noopener noreferrer">Código Fonte</Anchor> do projeto!
            </Text>
        </Stack>
    );
}

export default RankingScreen;