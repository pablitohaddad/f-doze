import React, { useState } from 'react';
import Input from './common/Input';
import Button from './common/Button';


const toUrlEncoded = (data) => {
    const params = new URLSearchParams();
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
             params.append(key, data[key]);
        }
    }
    return params.toString();
};
function LoginScreen({ onSucesso }) {
  const [usuario] = useState('admin');
  const [senha, setSenha] = useState('');
  const SENHA_CORRETA = import.meta.env.VITE_DESAFIO_LOGIN_SENHA; 

  const disabledInputClass = 'bg-slate-800 text-gray-400 cursor-not-allowed';
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
        usuario: usuario,
        password: senha, 
        senhaCorreta: SENHA_CORRETA, 
    };
    
    const bodyForm = toUrlEncoded(payload); 

    try {
        await fetch('http://desafio-nivel-1.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', 
            },
            body: bodyForm,
        });
        
    } catch (fetchError) {
        console.warn("A requisição simulada falhou");
    }
    
    if (senha === SENHA_CORRETA) {
        onSucesso(); 
    } else {
        alert("Senha incorreta. Procure a senha!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto my-5 max-w-md rounded-md border border-dashed border-green-400 bg-slate-950 p-6 shadow-[0_0_10px_rgba(57,255,20,0.4)]">
      <h3 className="text-xl font-semibold text-green-300">Desafio: Login</h3>
      
      <p className="mt-4 text-sm text-gray-300">Usuario:</p>
      <Input
          type="text"
          value={usuario}
          disabled
          className={disabledInputClass}
      />
      
      <p className="mt-3 text-sm text-gray-300">Senha:</p>
      <Input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="INSIRA A SENHA AQUI..."
      />
      <Button type="submit" className="mt-4 w-full uppercase">
          CONTINUAR
      </Button>
      
      <p className="mt-5 border-l-2 border-orange-400 pl-2 text-sm text-orange-300">
          // DICA: As vezes eh errando que se aprende.
      </p>
    </form>
  );
}

export default LoginScreen;