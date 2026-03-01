// src/components/DesafioStorage.js
import React, { useEffect } from 'react';
import { Alert, Paper, Stack, Text, Title } from '@mantine/core';
import Button from './common/Button';

const CHAVE_STORAGE = 'nivel_de_acesso';
const NIVEL_REQUERIDO = import.meta.env.VITE_DESAFIO_LOCAL_STORAGE_ADMIN;

function DesafioStorage({ onSucesso }) {
    
    useEffect(() => {
        const nivelAtual = localStorage.getItem(CHAVE_STORAGE);
        if (!nivelAtual) {
            localStorage.setItem(CHAVE_STORAGE, 'user_restrito');
        }
    }, []);

    const handleAttempt = () => {
        const nivel = localStorage.getItem(CHAVE_STORAGE);
        
        if (nivel === NIVEL_REQUERIDO) {
            onSucesso();
        } else {
            alert(`Acesso negado. Seu nível atual é: ${nivel}. Nível de acesso requerido: ${NIVEL_REQUERIDO}`);
        }
    };

    return (
        <Paper withBorder radius="md" p="lg" maw={560} mx="auto" my="md">
            <Stack align="center" gap="sm">
            <Title order={3}>Nível 4: Acesso negado</Title>
            <Text c="dimmed" ta="center">Seu acesso está restrito. A permissão de avanço está salva localmente no navegador.</Text>
            <Text c="dimmed" ta="center">Você precisa obter a permissão “{NIVEL_REQUERIDO}” para avançar.</Text>

            <Button
                onClick={handleAttempt}
                mt="xs"
            >
                TENTAR ACESSO ({localStorage.getItem(CHAVE_STORAGE) || 'user_restrito'})
            </Button>

            <Alert variant="light" color="yellow" w="100%">
                Dica: cache.
            </Alert>
            </Stack>
        </Paper>
    );
}

export default DesafioStorage;