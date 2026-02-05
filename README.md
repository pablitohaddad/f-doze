# F-DOZE

## 🎯 Sobre o Projeto

O **f-doze** é um projeto gamificado criado para aprimorar o conhecimento em desenvolvimento e demonstrar o uso produtivo e avançado do **DevTools** do navegador.

Em vez de apenas inspecionar CSS, o jogador deve "hackear" a própria aplicação, utilizando as abas Network, Console, Sources, Application... para encontrar chaves secretas e avançar de nível.

O desafio é cronometrado, e os melhores tempos são registrados em um Ranking Global!

## ✨ Funcionalidades

* **Níveis de Desafio:** Cada nível explora uma funcionalidade diferente do F12.
* **Cronômetro Global:** Mede o tempo de conclusão e incentiva a competição.
* **Ranking Global (API própria):** Armazenamento persistente do Top 10 via backend e banco de dados.

## 🎮 Jogue Agora!

Pronto para testar suas habilidades no F12? Tente entrar no Top 10!

👉 **Link do Projeto:** [F-DOZE](https://f-doze.vercel.app/)

### Tecnologias Utilizadas

* **Front-end:** React.js, JavaScript, HTML/CSS
* **Gerenciamento de Estado:** React Hooks (`useState`, `useEffect`, `useCallback`)
* **Banco de Dados/Backend:** API própria (Spring Boot) com PostgreSQL

## 🤝 Como Contribuir

Este projeto nasceu como uma iniciativa de aprendizado e é totalmente Open Source! Qualquer contribuição é bem-vinda para torná-lo mais desafiador e educativo.

### Ideias para Contribuição:

* **Novos Níveis:** Crie um novo componente com um desafio único que explore outras abas do F12 (como **Performance** ou **Security**).
* **Melhorias de Estilo:** Sugestões para deixar o tema hacker/terminal ainda mais imersivo.
* **Correções de Bugs:** Melhorar a estabilidade do cronômetro ou da lógica de estado.

### Passos para Contribuir:

1.  Faça um Fork do repositório.
2.  Crie uma nova branch para sua feature (`git checkout -b feat/novo-desafio`).
3.  Faça suas alterações e commits (`git commit -m "feat: adiciona desafio de performance"`).
4.  Faça o push para a branch (`git push origin feat/novo-desafio`).
5.  Abra um Pull Request e descreva suas mudanças!

## 📄 Instalação Local

Para rodar o projeto em sua máquina e contribuir:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/pablitohaddad/f-doze.git
    cd f-doze
    ```
2.  **Configure o backend Java:**
        * Suba sua API Spring Boot e o banco PostgreSQL.
        * Crie um arquivo `.env.local` na raiz do projeto.
        * Adicione a URL da API:
                ```env
                VITE_API_URL="http://localhost:8080/api"
                ```
4.  **Instale as dependências:**
    ```bash
    npm install
    ```
5.  **Inicie o projeto:**
    ```bash
    npm run dev
    ```

## 🚀 Deploy no Railway (CI/CD)

O deploy é automático via GitHub Actions. Você precisa criar dois serviços no Railway:

- **Backend** (Dockerfile em `fdoze/Dockerfile`)
- **Frontend** (Dockerfile na raiz)

### Variáveis/Secrets necessários no GitHub

Configure estes secrets no repositório:

- `RAILWAY_TOKEN`
- `RAILWAY_PROJECT_ID`
- `RAILWAY_SERVICE_ID_BACKEND`
- `RAILWAY_SERVICE_ID_FRONTEND`

### Variáveis no Railway (frontend)

No serviço do frontend, defina:

- `VITE_API_URL` = URL pública do backend, por exemplo: `https://seu-backend.up.railway.app/api`

Após isso, qualquer push na branch `main` dispara o deploy automático.

## 🧑‍💻 Autor

Este projeto foi criado por **Pablo Haddad** com o objetivo de aprofundar conhecimentos em React e ferramentas de desenvolvimento.

Se tiver alguma duvida, sinta-se a vontade para me perguntar! Me siga nessas redes sociais:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/pablohaddad)
[![Twitter/X](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/devhaddad)
