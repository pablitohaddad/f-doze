import React, { useState } from 'react';


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
  const SENHA_CORRETA = "senha_mais_dificil_do_mundo"; 

  const formStyle = {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '25px',
    backgroundColor: '#0d1117',
    border: '1px dashed #39ff14',
    boxShadow: '0 0 10px rgba(57, 255, 20, 0.4)',
  };

  const inputStyle = {
    padding: '10px',
    width: 'calc(100% - 20px)',
    boxSizing: 'border-box',
    marginBottom: '15px',
    backgroundColor: '#010409',
    color: '#00ff41',
    border: '1px solid #39ff14',
    fontFamily: 'Consolas, monospace',
  };
  
  const disabledInputStyle = {
      ...inputStyle,
      backgroundColor: '#161b22',
      color: '#8b949e',
      cursor: 'not-allowed',
  };

  const buttonStyle = {
    marginTop: '15px',
    padding: '12px 20px',
    background: '#007bff',
    color: '#0d1117',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    transition: 'background-color 0.3s, box-shadow 0.3s',
  };
  
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
    <form onSubmit={handleSubmit} style={formStyle}>
      <h3>Desafio: Login</h3>
      
      <p>Usuario:</p>
      <input 
          type="text" 
          value={usuario} 
          disabled 
          style={disabledInputStyle} 
      />
      
      <p>Senha:</p>
      <input 
        type="password" 
        value={senha} 
        onChange={(e) => setSenha(e.target.value)}
        placeholder="INSIRA A SENHA AQUI..."
        style={inputStyle} 
      />
      <button 
          type="submit" 
          style={buttonStyle}
      >
          CONTINUAR
      </button>
      
      <p className="dica-text">
          // DICA: As vezes eh errando que se aprende.
      </p>
    </form>
  );
}

export default LoginScreen;