import React from 'react';
import { Anchor, Card, Divider, List, Paper, Stack, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Card withBorder radius="lg" shadow="sm" p="xl">
      <Stack gap="sm">
        <Title order={2}>Home</Title>
        <Text c="dimmed">
          Olá! Eu sou <Anchor href="https://www.linkedin.com/in/pablohaddad/" target="_blank" rel="noopener noreferrer">Pablo Haddad</Anchor>, desenvolvedor deste projeto.
        </Text>
        <Text c="dimmed">
          O F-DOZE nasceu como uma proposta prática para aprender DevTools de forma gamificada,
          combinando desafios front-end, API própria e ranking global.
        </Text>
        <Text c="dimmed">
          Se quiser contribuir com esse projeto open-source, visite o nosso repositório no
          {' '}
          <Anchor href="https://github.com/pablitohaddad/f-doze" target="_blank" rel="noopener noreferrer">Github</Anchor>. Qualquer ajuda e/ou sugestão é bem vinda!
        </Text>
        <Text c="dimmed">Para iniciar os desafios, clique no botão “Jogar agora” no menu superior.</Text>
        <Text c="dimmed">
          Se ainda está aprendendo, vá para a aba de{' '}
          <Anchor component={Link} to="/estudos">estudos</Anchor>.
        </Text>

        <Divider my="xs" />

        <Paper withBorder radius="md" p="md">
          <Stack gap="xs" align="center">
            <Title order={4}>Colaboradores</Title>
            <List spacing="xs" size="sm" withPadding>
              <List.Item>
                Pablo Haddad —{' '}
                <Anchor href="https://www.linkedin.com/in/pablohaddad/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Anchor>
              </List.Item>
              <List.Item>
                Gustavo Gonzaga —{' '}
                <Anchor href="https://www.linkedin.com/in/gustavo-gs/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Anchor>
              </List.Item>
            </List>
          </Stack>
        </Paper>
      </Stack>
    </Card>
  );
}
