// src/components/DesafioStorage.js
import React, { useEffect } from 'react';

const CHAVE_STORAGE = 'nivel_de_acesso';
const NIVEL_REQUERIDO = 'admin_full';

function DesafioStorage({ onSucesso }) {
    
    useEffect(() => {
        const nivelAtual = localStorage.getItem(CHAVE_STORAGE);
        if (!nivelAtual) {
            localStorage.setItem(CHAVE_STORAGE, 'user_restrito');
        }
    }, []);

    const handleAttempt = () => {
        const nivel = localStorage.getItem(CHAVE_STORAGE);
        
        if (nivel === NIVEL_REQUERIDO) {
            onSucesso();
        } else {
            alert(`Acesso negado. Seu nível atual é: ${nivel}. Nível de acesso requerido: ${NIVEL_REQUERIDO}`);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h3> Nível 4: Acesso negado.</h3>
            <p>Seu acesso está restrito. A permissão de avanço está salva localmente no navegador.</p>
            <p>Você precisa obter a permissão **'{NIVEL_REQUERIDO}'** para avançar.</p>

            <button 
                onClick={handleAttempt}
                style={{ marginTop: '20px', padding: '15px 30px', backgroundColor: '#dc3545', color: 'white', fontSize: '1.2em' }}
            >
                TENTAR ACESSO ({localStorage.getItem(CHAVE_STORAGE) || 'user_restrito'})
            </button>

            <p className="dica-text" style={{ textAlign: 'left', marginTop: '30px' }}>
                // DICA: Cache.
            </p>
        </div>
    );
}

export default DesafioStorage;