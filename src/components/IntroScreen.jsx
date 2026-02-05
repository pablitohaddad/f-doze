import React from 'react';
import RankingScreen from './RankingScreen';
import Button from './common/Button';
function IntroScreen({ onStart, tempoTotal, ranking, onRankingUpdate, loading }) {

    return (
        <div className="rounded-md border border-green-500 p-6 text-center">
            <h2 className="text-2xl font-bold text-green-300">BEM-VINDO AO F-DOZE</h2>

            <p className="mx-auto my-5 max-w-2xl text-gray-300">
                Este é um desafio prático para aprender a utilizar a DevTools do seu navegador (pressione F12). Cada nível exige que você utilize uma aba diferente (Network, Console, Elements, etc.) para "quebrar" o front-end e prosseguir.
            </p>

            <p className="text-lg font-bold text-green-300">
                Seu tempo começa a contar assim que você apertar **INICIAR**.
            </p>

            <Button onClick={onStart} className="mt-8 bg-yellow-400 text-slate-950 hover:bg-yellow-300">
                INICIAR DESAFIO E CRONÔMETRO
            </Button>

            <p className="mt-10 text-xs text-gray-400">
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