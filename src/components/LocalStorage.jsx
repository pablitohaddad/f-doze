// src/components/DesafioStorage.js
import React, { useEffect } from 'react';
import Button from './common/Button';

const CHAVE_STORAGE = 'nivel_de_acesso';
const NIVEL_REQUERIDO = import.meta.env.VITE_DESAFIO_LOCAL_STORAGE_ADMIN;

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
        <div className="text-center">
            <h3 className="text-xl font-semibold text-green-300">Nível 4: Acesso negado.</h3>
            <p className="text-gray-300">Seu acesso está restrito. A permissão de avanço está salva localmente no navegador.</p>
            <p className="text-gray-300">Você precisa obter a permissão **'{NIVEL_REQUERIDO}'** para avançar.</p>

            <Button
                onClick={handleAttempt}
                className="mt-5 bg-red-600 text-white hover:bg-red-500"
            >
                TENTAR ACESSO ({localStorage.getItem(CHAVE_STORAGE) || 'user_restrito'})
            </Button>

            <p className="mt-8 border-l-2 border-orange-400 pl-2 text-left text-sm text-orange-300">
                // DICA: Cache.
            </p>
        </div>
    );
}

export default DesafioStorage;