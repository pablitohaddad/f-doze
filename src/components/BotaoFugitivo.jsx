import React, {useState, useEffect} from "react";
import { Alert, Paper, Text, Title } from '@mantine/core';

function BotaoFugitivo( {onSucesso }){

    const [position, setPosition] = useState({top: '150px', left: '150px'})
    const cliqueNoBotao = 'cliqueNoBotao'

    const handleMouseMove = () => {
        const CONTAINER_HEIGHT = 400;
        const CONTAINER_WIDTH = 500;
        
        const novaPosicaoX = Math.random() * (CONTAINER_WIDTH - 150) + 50; 
        const novaPosicaoY = Math.random() * (CONTAINER_HEIGHT - 100) + 50;
        
        setPosition({ 
            top: `${novaPosicaoY}px`, 
            left: `${novaPosicaoX}px` 
        });
    };

    useEffect(() => {
        window[cliqueNoBotao] = () => {
            alert("Parebens! Comando de avanço executado!");
            onSucesso(); 
        };
        
        return () => {
            delete window[cliqueNoBotao];
        };
    }, [onSucesso]);

    const buttonStyle = {
        position: 'absolute',
        top: position.top,
        left: position.left,
        transition: 'all 0.1s ease-out'
    };

    return (
        <Paper withBorder radius="md" p="md" className="relative mx-auto my-5 h-[400px] w-full overflow-hidden">
            <Title order={3} mb="xs">Desafio 2: cliqueNoBotao()</Title>
            <Text size="sm" c="dimmed">Passe o mouse no botão e use o console para avançar.</Text>

            <button
                onMouseMove={handleMouseMove}
                style={buttonStyle}
                className="cursor-default border-2 border-black bg-white px-6 py-3 text-sm font-black uppercase text-gray-900 shadow-[4px_4px_0_0_#000]"
            >
                {cliqueNoBotao}
            </button>

            <div className="absolute bottom-2 left-2 right-2">
              <Alert variant="light" color="yellow">Dica: Console.</Alert>
            </div>
        </Paper>
    );
}

export default BotaoFugitivo;
