import React from 'react';
import { Container, Stack } from '@mantine/core';
import { Navigate, Route, Routes } from 'react-router-dom';
import SiteMenu from './components/SiteMenu';
import HomePage from './pages/HomePage';
import JogoPage from './pages/JogoPage';
import RankingPage from './pages/RankingPage';
import SobrePage from './pages/SobrePage';
import EstudosPage from './pages/EstudosPage';

function App() {
  return (
    <Container size="md" py="xl">
      <Stack gap="md">
        <SiteMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jogar" element={<JogoPage />} />
          <Route path="/ranking" element={<RankingPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/estudos" element={<EstudosPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Stack>
    </Container>
  );
}

export default App;