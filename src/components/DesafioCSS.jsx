import React from 'react';
import { Alert, Paper, Stack, Text, Title } from '@mantine/core';
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
        <Paper withBorder radius="md" p="lg" maw={560} mx="auto" my="md">
            <Stack gap="sm">
            <Title order={3}>Nível 3: CSS</Title>
            <Text c="dimmed">Uma chave de avanço está nesta página.</Text>
            <Text c="dimmed">Sua missão é revelar a chave inspecionando o código.</Text>
            
            <div className="mx-auto my-6 p-2">
                <span style={chaveStyle}>
                    {CHAVE_SECRETA}
                </span>
            </div>

            <form onSubmit={handleCheck}>
                <Input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Cole a chave revelada aqui..."
                />
                <Button type="submit" mt="sm">Verificar chave</Button>
            </form>

            <Alert variant="light" color="yellow">
                Dica: esse site está feio demais.
            </Alert>
            </Stack>
        </Paper>
    );
}

export default DesafioCSS;