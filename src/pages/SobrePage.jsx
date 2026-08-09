import React from 'react';
import { Badge, Paper, Stack, Text, Title } from '@mantine/core';

const pillars = ['Inspeção visual', 'Console e debugging', 'Rede e requests', 'Storage local'];

export default function SobrePage() {
  return (
    <Paper className="p-6 md:p-8">
      <Stack gap="lg">
        <div>
          <Badge className="!px-3 !py-1">// SOBRE_O_PROJETO</Badge>
          <Title order={2} className="mt-4 text-3xl md:text-4xl">Um projeto pensado para transformar curiosidade em habilidade.</Title>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border-4 border-black bg-gray-100 p-6 shadow-[6px_6px_0_0_#000]">
            <Text size="lg" c="dimmed">
              O F-DOZE nasceu de uma ideia de transformar o aprendizado sobre DevTools em uma experiência gamificada. Em vez de apenas consumir conteúdo, ele pega as ferramentas do navegador e as coloca em uma estrutura de jogo. E com essa ideia, pretendo expandir o seu/meu conhecimento sobre DevTools.
            </Text>
            <Text size="lg" c="dimmed" className="mt-4">
              A ideia é simples: entender a aba de DevTools, reconhecer pistas e transformar cada desafio em uma etapa de evolução real.
            </Text>
          </div>

          <div className="border-4 border-black bg-purple-400 p-6 shadow-[6px_6px_0_0_#000]">
            <Title order={4}>O QUE O PROJETO EXPLORA_</Title>
            <div className="mt-4 flex flex-wrap gap-2">
              {pillars.map((item) => (
                <span key={item} className="border-2 border-black bg-white px-3 py-1 text-sm font-bold text-black">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Stack>
    </Paper>
  );
}
