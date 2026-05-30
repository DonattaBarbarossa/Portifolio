# Portfólio Pessoal – Etapa 3  
**Pedro Barbosa Bastos – Desenvolvedor Web**

Este repositório contém a versão final e interativa do meu portfólio pessoal. O projeto integra todas as etapas anteriores (HTML semântico, Bootstrap 5, CSS avançado) e adiciona **interatividade com JavaScript**, **validação de formulário**, **manipulação dinâmica do DOM** e **integração com a API MailerSend** para envio de e-mails.

---

##  Funcionalidades Implementadas

###  **Portfólio Completo e Responsivo**
- Estrutura semântica com `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Layout responsivo com **Bootstrap 5** (mobile, tablet, desktop)
- Design profissional com animações e feedback visual

###  **Formulário de Contato Avançado**
- Validação **HTML5 nativa** com atributos: `required`, `minlength`, `maxlength`, `pattern`, `type="email"`
- **Select box dinâmico**: ao escolher um assunto, os subtópicos são atualizados automaticamente via JavaScript
- **Contador de caracteres** em tempo real na mensagem (0–1000 caracteres)
- Feedback visual com classes Bootstrap (`is-valid`, `is-invalid`, `was-validated`)
- Botão com **spinner de loading** durante o envio

###  **Integração com MailerSend API**
- Envio de e-mails via **API RESTful do MailerSend** (v1)
- Corpo do e-mail em **HTML e texto plano** com nome, e-mail, assunto, subtópico e mensagem
- Tratamento robusto de erros (rede, CORS, dados inválidos, autenticação)
- Mensagens de sucesso/erro exibidas como **alerts do Bootstrap**

###  **Desafio Obrigatório Escolhido: Calculadora Científica**
- **Operações básicas**: `+`, `-`, `×`, `÷`
- **Funções avançadas**: `seno`, `cosseno`, `tangente`, `log`, `ln`, `raiz`, `π`, `potência`
- Interface responsiva com botões funcionais
- Resultado exibido em display numérico
- Código modularizado em `js/calculator.js`

###  **Características Avançadas**
1. **Validação em tempo real**: campos são validados ao sair (`blur`) ou durante digitação
2. **Tema claro/escuro com LocalStorage**: preferência salva entre sessões

###  **Organização e Qualidade de Código**
- Código **modular**: separado em `main.js`, `form-handler.js`, `api-client.js`, `calculator.js`
- **Comentários e documentação** conforme boas práticas
- **Estrutura de pastas** conforme exigido

---

##  Tecnologias Utilizadas

- **HTML5** (semântico e acessível)
- **CSS3** + **Bootstrap 5** (grid, componentes, utilitários)
- **JavaScript ES6+** (DOM manipulation, fetch API, eventos)
- **MailerSend API** (envio de e-mails via REST)
- **SVG** para ícones e imagens leves
- **GitLab Pages** para deploy

---

##  Estrutura do Projeto
Etapa3/
├── index.html # Página principal
├── css/
│ └── style.css # Estilos personalizados (com seletores avançados da Prática 4)
├── js/
│ ├── main.js # Inicialização geral, tema claro/escuro
│ ├── form-handler.js # Validação, subtópicos dinâmicos, contador de caracteres
│ ├── api-client.js # Integração com MailerSend
│ └── calculator.js # Lógica da calculadora científica
├── img/
│ ├── profile.svg # Avatar
│ ├── html-icon.svg # Ícones de tecnologias e contato
│ ├── css-icon.svg
│ ├── js-icon.svg
│ ├── git-icon.svg
│ ├── email-icon.svg
│ ├── linkedin-icon.svg
│ ├── github-icon.svg
│ ├── twitter-icon.svg
│ ├── projeto1.svg # Calculadora (imagem do projeto)
│ └── projeto2.svg # Tomate "mordido" (Pomodoro)
├── README.md # Este arquivo
└── .gitlab-ci.yml # Pipeline para GitLab Pages

---

## Visualização
O site está publicado em:  
https://PedroBarbosa.pages.alessiojr.com/Etapa3

## Autor

Pedro Barbosa Bastos

## Licença

Este projeto é parte do trabalho prático da disciplina de Programação Web .
