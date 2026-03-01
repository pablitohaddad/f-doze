import React from 'react';
import { Button, Group, Paper, Title } from '@mantine/core';
import { NavLink } from 'react-router-dom';

const MENU_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Ranking', to: '/ranking' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Estudos', to: '/estudos' }
];

export default function SiteMenu() {
  return (
    <Paper withBorder radius="lg" p="md">
      <Group justify="space-between" wrap="wrap">
        <Title order={4}>F-DOZE</Title>
        <Group gap="lg" wrap="wrap">
          {MENU_ITEMS.map((item) => (
            <Button
              key={item.to}
              component={NavLink}
              to={item.to}
              variant="subtle"
              color="gray"
            >
              {item.label}
            </Button>
          ))}
          <Button component={NavLink} to="/jogar" color="orange">
            Jogar agora
          </Button>
        </Group>
      </Group>
    </Paper>
  );
}
