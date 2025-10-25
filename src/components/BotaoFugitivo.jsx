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

    const containerStyle = {
        position: 'relative', 
        height: '400px', 
        width: '100%',
        margin: '20px auto',
        border: '3px solid #ff00ff',
        boxShadow: '0 0 15px rgba(255, 0, 255, 0.8)',
        backgroundColor: '#0d1117',
        overflow: 'hidden', 
        boxSizing: 'border-box',
    };
    
    const buttonStyle = {
        position: 'absolute', 
        top: position.top,
        left: position.left,
        transition: 'all 0.1s ease-out', 
        padding: '15px 25px',
        backgroundColor: '#ff00ff',
        color: '#0d1117',
        border: '3px solid #000000',
        cursor: 'default',
        fontSize: '1.4em',
        fontWeight: 'bold',
        textShadow: '0 0 5px #000000',
        boxShadow: '0 0 15px rgba(255, 0, 255, 0.9)',
        textTransform: 'uppercase'
    };

    return (
        <div style={containerStyle}>
            <h3> Desafio 2: cliqueNoBotao()</h3>

            <button
                onMouseMove={handleMouseMove} 
                style={buttonStyle}
            >
                {cliqueNoBotao}
            </button>
            
            <p className="dica-text" style={{position: 'absolute', bottom: '10px', left: '10px'}}>
                // DICA: Console
            </p>
        </div>
    );
}

export default BotaoFugitivo;