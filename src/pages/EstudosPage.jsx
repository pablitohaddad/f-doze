import React from 'react';
import { Accordion, Anchor, AspectRatio, Badge, Paper, List, Stack, Text, Title } from '@mantine/core';

const STUDY_TOPICS = [
  {
    key: 'network',
    title: 'Network',
    tag: 'Requisições HTTP',
    context:
      'A aba Network mostra todas as requisições que a aplicação faz. Aqui você aprende a identificar endpoints, headers, payload, tempo de resposta e possíveis erros 4xx/5xx.',
    videos: [
      {
        label: 'Vídeo: Chrome DevTools Network Panel (Chrome for Developers)',
        url: 'https://www.youtube.com/watch?v=e1gAyQuIFQo',
        embedUrl: 'https://www.youtube.com/embed/e1gAyQuIFQo'
      }
    ],
    reading: [
      {
        label: 'Documentação oficial: Network panel (Chrome DevTools)',
        url: 'https://developer.chrome.com/docs/devtools/network'
      }
    ],
    practice: [
      'Filtre por XHR/Fetch e descubra quais endpoints seu front chama.',
      'Abra uma request e compare Request Payload e Response.',
      'Teste “Disable cache” e veja impacto no carregamento.'
    ]
  },
  {
    key: 'console',
    title: 'Console',
    tag: 'Debug rápido',
    context:
      'A aba Console permite executar comandos JS em tempo real, inspecionar objetos e testar funções da aplicação. É a base para depuração rápida no front-end.',
    videos: [
      {
        label: 'Vídeo: Chrome DevTools Console Tips',
        url: 'https://www.youtube.com/watch?v=H0XScE08hy8',
        embedUrl: 'https://www.youtube.com/embed/H0XScE08hy8'
      }
    ],
    reading: [
      {
        label: 'Documentação oficial: Console utilities',
        url: 'https://developer.chrome.com/docs/devtools/console/utilities'
      }
    ],
    practice: [
      'Use console.table para visualizar arrays/objetos.',
      'Execute funções globais e acompanhe retorno.',
      'Identifique warnings e erros para corrigir mais rápido.'
    ]
  },
  {
    key: 'elements',
    title: 'Elements (HTML/CSS)',
    tag: 'UI e estilo',
    context:
      'Na aba Elements você inspeciona e altera HTML/CSS ao vivo, sem recompilar o projeto. É ótima para validar layout, espaçamento e responsividade.',
    videos: [
      {
        label: 'Vídeo: Inspect and edit pages with Chrome DevTools',
        url: 'https://www.youtube.com/watch?v=Z3HGJsNLQ1E',
        embedUrl: 'https://www.youtube.com/embed/Z3HGJsNLQ1E'
      }
    ],
    reading: [
      {
        label: 'Documentação oficial: CSS in DevTools',
        url: 'https://developer.chrome.com/docs/devtools/css'
      }
    ],
    practice: [
      'Teste variações de padding/margin/font-size no browser.',
      'Valide contraste e legibilidade em componentes-chave.',
      'Inspecione estados de hover/focus rapidamente.'
    ]
  },
  {
    key: 'application',
    title: 'Application (Storage)',
    tag: 'Dados no navegador',
    context:
      'A aba Application reúne Local Storage, Session Storage, Cookies e Cache. Essencial para entender estado local, autenticação e persistência no cliente.',
    videos: [
      {
        label: 'Vídeo: Local Storage, Session Storage and Cookies',
        url: 'https://www.youtube.com/watch?v=AwicscsvGLg',
        embedUrl: 'https://www.youtube.com/embed/AwicscsvGLg'
      }
    ],
    reading: [
      {
        label: 'Documentação oficial: View and edit local storage',
        url: 'https://developer.chrome.com/docs/devtools/storage/localstorage'
      }
    ],
    practice: [
      'Altere valores no Local Storage e recarregue a página.',
      'Observe diferenças entre Local e Session Storage.',
      'Limpe chaves para simular primeira execução do usuário.'
    ]
  }
];

export default function EstudosPage() {
  return (
    <Stack gap="lg">
      <Paper className="p-6 md:p-8">
        <Title order={2}>./ESTUDOS_GUIADOS</Title>
        <Text c="dimmed" className="mt-2">
          Explore cada tema do DevTools com material prático, vídeos e sugestões de treino.
        </Text>
      </Paper>

      <Accordion variant="separated" radius="lg" chevronPosition="right">
        {STUDY_TOPICS.map((topic) => (
          <Accordion.Item key={topic.key} value={topic.key}>
            <Accordion.Control>
              <Stack gap={2}>
                <Text fw={900}>{topic.title.toUpperCase()}_</Text>
                <Badge className="!w-fit">{topic.tag}</Badge>
              </Stack>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap="sm">
                <Text c="dimmed">{topic.context}</Text>

                <div>
                  <Text fw={900} size="sm" mb={4}>ASSISTA_</Text>
                  <Stack gap="sm">
                    {topic.videos.map((item) => (
                      <div key={item.url}>
                        <AspectRatio ratio={16 / 9} mb={6}>
                          <iframe
                            src={item.embedUrl}
                            title={item.label}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        </AspectRatio>
                        <Anchor href={item.url} target="_blank" rel="noopener noreferrer">{item.label}</Anchor>
                      </div>
                    ))}
                  </Stack>
                </div>

                <div>
                  <Text fw={900} size="sm" mb={4}>LEITURA_COMPLEMENTAR_</Text>
                  <List spacing={4} size="sm">
                    {topic.reading.map((item) => (
                      <List.Item key={item.url}>
                        <Anchor href={item.url} target="_blank" rel="noopener noreferrer">{item.label}</Anchor>
                      </List.Item>
                    ))}
                  </List>
                </div>

                <div>
                  <Text fw={900} size="sm" mb={4}>PRÁTICA_SUGERIDA_</Text>
                  <List spacing={4} size="sm">
                    {topic.practice.map((item) => (
                      <List.Item key={item}>{item}</List.Item>
                    ))}
                  </List>
                </div>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Stack>
  );
}
