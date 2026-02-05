import React from 'react';
import Input from './common/Input';
import Button from './common/Button';

function DesafioCSS({ onSucesso }) {
    const CHAVE_SECRETA = import.meta.env.VITE_DESAFIO_CSS_CHAVE;
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
        <div className="text-center">
            <h3 className="text-xl font-semibold text-green-300">Nível 3: CSS</h3>
            <p className="text-gray-300">Uma chave de avanço está nesta página</p>
            <p className="text-gray-300">Sua missão é **revelar a chave** inspecionando o código.</p>
            
            <div className="mx-auto my-6 p-2">
                <span style={chaveStyle}>
                    {CHAVE_SECRETA}
                </span>
            </div>

            <form onSubmit={handleCheck} className="mx-auto my-5 max-w-md p-4">
                <Input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Cole a chave revelada aqui..."
                />
                <Button type="submit" className="mt-3">Verificar Chave</Button>
            </form>

            <p className="mt-8 border-l-2 border-orange-400 pl-2 text-left text-sm text-orange-300">
                // DICA: Esse site esta FEIO de mais.
            </p>
        </div>
    );
}

export default DesafioCSS;