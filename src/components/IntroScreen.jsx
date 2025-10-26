import React, { useEffect, useState } from 'react';
import RankingScreen from './RankingScreen';
function IntroScreen({ onStart, tempoTotal, ranking, onRankingUpdate, loading }) {

    return (
        <div style={{ padding: '30px', border: '1px solid #39ff14', textAlign: 'center' }}>
            <h2>BEM-VINDO AO F-DOZE</h2>

            <p style={{ maxWidth: '600px', margin: '20px auto', color: '#8b949e' }}>
                Este é um desafio prático para aprender a utilizar a DevTools do seu navegador (pressione F12). Cada nível exige que você utilize uma aba diferente (Network, Console, Elements, etc.) para "quebrar" o front-end e prosseguir.
            </p>

            <p style={{ color: '#00ff41', fontWeight: 'bold', fontSize: '1.1em' }}>
                Seu tempo começa a contar assim que você apertar **INICIAR**.
            </p>

            <button
                onClick={onStart}
                style={{
                    marginTop: '30px',
                    padding: '15px 30px',
                    background: '#ffcc00',
                    color: '#0d1117',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.3em',
                    fontWeight: 'bold'
                }}
            >
                INICIAR DESAFIO E CRONÔMETRO
            </button>

            <p style={{ marginTop: '50px', fontSize: '0.8em', color: '#8b949e' }}>
                Projeto feito por <a href="https://www.linkedin.com/in/pablohaddad/">Pablo Haddad</a>
            </p>
            <RankingScreen
                isIntro={true}
                tempoTotal={tempoTotal}
                ranking={ranking}
                loading={loading}
                onRankingUpdate={onRankingUpdate}
            />
        </div>
    );
}

export default IntroScreen;