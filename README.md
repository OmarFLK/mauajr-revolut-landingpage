# Maua JR Revolut Landing Page

Landing page da Maua Junior inspirada na linguagem visual da Revolut, desenvolvida com HTML, CSS e JavaScript Vanilla.

## Escopo atual

O projeto hoje contem:

- homepage principal em `index.html`
- navegacao preparada para paginas separadas
- paginas base vazias para `quem-somos.html`, `servicos.html` e `contato.html`
- animacao principal da hero com entrada e retorno refinados
- responsividade principal para desktop, notebook, tablet e mobile
- assets locais versionados dentro do proprio repositorio
- acessibilidade com vLibras
- atalho flutuante para WhatsApp

## Tecnologias

- HTML5 semantico
- CSS3 modularizado por secao
- JavaScript Vanilla
- `IntersectionObserver` para reveals
- widget oficial do vLibras

## Estrutura do projeto

```text
/
├── index.html
├── quem-somos.html
├── servicos.html
├── contato.html
├── README.md
├── assets/
│   ├── images/
│   │   ├── fundo-tela-1.jpg
│   │   ├── imagem-1.png
│   │   └── imagem-2.png
│   └── logos/
│       ├── logo-maua-junior.png
│       └── logo-maua-junior-mais.png
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── global.css
│   ├── header.css
│   ├── hero.css
│   ├── services.css
│   ├── cases.css
│   ├── contact.css
│   ├── footer.css
│   └── responsive.css
└── js/
    ├── main.js
    ├── animations.js
    └── navigation.js
```

## Como executar

1. Abra a pasta do projeto.
2. Execute `index.html` no navegador.
3. Para navegação local, mantenha a estrutura de arquivos completa, incluindo `assets/`, `css/` e `js/`.

## Funcionalidades implementadas

- header fixo com estado inicial e estado ao scroll
- menu mobile com toggle
- hero animada com entrada inspirada na Revolut
- retorno suave da animacao ao voltar para o topo
- bloco de resultados com transicao apos a hero
- secao de servicos
- secao de contato rapido
- secao de cases com alternancia de layout entre texto e imagem
- secao institucional
- CTA final
- footer com navegacao e contatos
- botao flutuante de WhatsApp
- integracao com vLibras

## Assets locais

As imagens usadas na homepage agora estao dentro do proprio repositorio, em `assets/`, para evitar links quebrados no GitHub Pages ou em qualquer ambiente externo.

## Proximos passos sugeridos

- preencher `quem-somos.html`
- preencher `servicos.html`
- preencher `contato.html`
- substituir os placeholders dos cases pelas imagens finais de resultado das empresas
- revisar textos institucionais finais
- publicar em GitHub Pages ou hospedagem equivalente

## Observacoes

- o projeto nao depende de framework
- o vLibras depende do script externo oficial do governo
- o link do WhatsApp utiliza o numero comercial configurado no projeto
