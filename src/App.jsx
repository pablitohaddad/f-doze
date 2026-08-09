import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SiteMenu from './components/SiteMenu';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import JogoPage from './pages/JogoPage';
import RankingPage from './pages/RankingPage';
import SobrePage from './pages/SobrePage';
import EstudosPage from './pages/EstudosPage';

function App() {
  return (
    <div className="min-h-screen bg-white font-mono text-black">
      <SiteMenu />
      <main className="min-h-[calc(100vh-145px)] bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jogar" element={<JogoPage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/estudos" element={<EstudosPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
