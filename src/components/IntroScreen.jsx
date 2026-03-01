import React from 'react';
import { Anchor, Paper, Stack, Text, Title } from '@mantine/core';
import Button from './common/Button';
function IntroScreen({ onStart }) {

    return (
        <Paper withBorder radius="md" p="xl">
            <Stack align="center" gap="md">
            <Title order={2}>Salve!</Title>

            <Text ta="center" maw={700} c="dimmed">
                Antes de começar o desafio, certifique-se que o seu Inspecionar Elemento está ativado. Para ativar, clique no F12 do seu teclado!
            </Text>

            <Text fw={600}>Seu tempo começa a contar assim que você apertar INICIAR.</Text>

            <Button onClick={onStart} size="md">
                INICIAR DESAFIO
            </Button>

            <Text size="xs" c="dimmed">
                Projeto feito por <Anchor href="https://www.linkedin.com/in/pablohaddad/" target="_blank">Pablo Haddad</Anchor>
            </Text>
            </Stack>
        </Paper>
    );
}

export default IntroScreen;