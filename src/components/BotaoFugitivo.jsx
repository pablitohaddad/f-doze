import React, {useState, useEffect} from "react";

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
        <div className="relative mx-auto my-5 h-[400px] w-full overflow-hidden border-2 border-fuchsia-500 bg-slate-950 shadow-[0_0_15px_rgba(255,0,255,0.8)]">
            <h3 className="mb-4 text-lg font-semibold text-fuchsia-300">Desafio 2: cliqueNoBotao()</h3>

            <button
                onMouseMove={handleMouseMove}
                style={buttonStyle}
                className="cursor-default rounded-md border-2 border-black bg-fuchsia-500 px-6 py-3 text-lg font-bold uppercase text-slate-950 shadow-[0_0_15px_rgba(255,0,255,0.9)]"
            >
                {cliqueNoBotao}
            </button>

            <p className="absolute bottom-2 left-2 border-l-2 border-orange-400 pl-2 text-sm text-orange-300">
                // DICA: Console
            </p>
        </div>
    );
}

export default BotaoFugitivo;