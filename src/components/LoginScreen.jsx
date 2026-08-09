import React, { useState } from 'react';
import { Alert, Paper, Stack, Text, Title } from '@mantine/core';
import Input from './common/Input';
import Button from './common/Button';


const toUrlEncoded = (data) => {
    const params = new URLSearchParams();
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
             params.append(key, data[key]);
        }
    }
    return params.toString();
};
function LoginScreen({ onSucesso }) {
  const [usuario] = useState('admin');
  const [senha, setSenha] = useState('');
  const SENHA_CORRETA = import.meta.env.VITE_DESAFIO_LOGIN_SENHA; 

    const disabledInputClass = '';
  
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
        
    } catch {
        console.warn("A requisição simulada falhou");
    }
    
    if (senha === SENHA_CORRETA) {
        onSucesso(); 
    } else {
        alert("Senha incorreta. Procure a senha!");
    }
  };

  return (
        <Paper component="form" onSubmit={handleSubmit} withBorder radius="md" p="lg" maw={460} mx="auto" my="md">
            <Stack gap="sm">
            <Title order={3}>Desafio: Login</Title>

            <Text size="sm" c="dimmed">Usuário:</Text>
            <Input
                    type="text"
                    value={usuario}
                    disabled
                    className={disabledInputClass}
            />

            <Text size="sm" c="dimmed">Senha:</Text>
            <Input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Insira a senha aqui..."
            />
            <Button type="submit" fullWidth>
                    CONTINUAR
            </Button>

            <Alert variant="light" color="yellow">
                    Dica: às vezes é errando que se aprende.
            </Alert>
            </Stack>
        </Paper>
  );
}

export default LoginScreen;
