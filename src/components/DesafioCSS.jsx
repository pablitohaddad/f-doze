import React from 'react';

function DesafioCSS({ onSucesso }) {
    const CHAVE_SECRETA = "senha_css_revelada";
    const [input, setInput] = React.useState('');

    const handleCheck = (e) => {
        e.preventDefault();
        if (input.trim() === CHAVE_SECRETA) {
            onSucesso();
        } else {
            alert("Chave incorreta. F12 para encontrar a chave!");
        }
    };

    const chaveStyle = {
        color: 'transparent',
        fontSize: '1px',           
        height: '0',              
        overflow: 'hidden',

        position: 'absolute',
        left: '-9999px',
        top: '-9999px',
        
        userSelect: 'none', 
        textShadow: '0 0 5px #000000', 
        border: '1px dashed #ff0000',
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Nível 3: CSS</h3>
            <p>Uma chave de avanço está nesta página</p>
            <p>Sua missão é **revelar a chave** inspecionando o código.</p>
            
            <div style={{ margin: '30px auto', padding: '10px' }}>
                <span style={chaveStyle}>
                    {CHAVE_SECRETA}
                </span>
            </div>

            <form onSubmit={handleCheck} style={{ maxWidth: '400px', margin: '20px auto', padding: '15px' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Cole a chave revelada aqui..."
                    style={{ padding: '10px', width: '100%', boxSizing: 'border-box' }}
                />
                <button type="submit" style={{ marginTop: '10px', padding: '10px 20px' }}>Verificar Chave</button>
            </form>

            <p className="dica-text" style={{ textAlign: 'left', marginTop: '30px' }}>
                // DICA: Esse site esta FEIO de mais.
            </p>
        </div>
    );
}

export default DesafioCSS;