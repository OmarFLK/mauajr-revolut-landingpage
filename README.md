# Maua JR Revolut Landing Page

Landing page premium da Maua Junior inspirada na sofisticacao visual da Revolut, desenvolvida com HTML5, CSS3 moderno e JavaScript Vanilla.

## Objetivo do projeto

Recriar uma homepage de alta fidelidade visual para a Maua Junior, misturando:

- hierarquia, impacto e atmosfera premium da Revolut
- identidade institucional azul, preta e branca da Maua Junior
- foco tecnico em responsividade, semantica, animacao e organizacao de codigo

## Tecnologias usadas

- HTML5 semantico
- CSS3 moderno com variaveis, Grid, Flexbox e arquitetura modular
- JavaScript Vanilla para navegacao, reveals e animacao por scroll

## Estrutura de pastas

```text
/
├── index.html
├── README.md
├── read.me
├── assets/
│   ├── images/
│   ├── icons/
│   └── logos/
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

## Como rodar o projeto

1. Abra a pasta do projeto.
2. Execute o arquivo `index.html` no navegador.
3. Nenhuma dependencia externa de framework e necessaria.

## Principais secoes

- Header com navegacao sticky e menu hamburguer em mobile
- Hero com visual imersivo, gradientes e card premium inspirado na Revolut
- Transicao de scroll que aproxima o efeito de card transformando a primeira dobra
- Secao de servicos com 3 cards principais
- Contato rapido com WhatsApp, email e endereco
- Cases de sucesso em paineis de tela cheia
- Secao institucional com vantagens da Maua Junior
- CTA final com fluxo em 3 passos
- Footer amplo com colunas de navegacao e contatos

## Responsividade

O layout foi pensado em abordagem mobile-first adaptada para:

- desktop grande
- notebook
- tablet
- mobile

Os comportamentos mobile mais importantes:

- menu hamburguer funcional
- cards empilhados
- transicao da hero simplificada
- cases com leitura confortavel sem quebra horizontal
- footer reorganizado em pilha

## Animacoes implementadas

- cabecalho com mudanca visual ao scroll
- reveals com `IntersectionObserver`
- card principal da hero reagindo ao scroll com `requestAnimationFrame`
- hover suave em cards, links e botoes

## O que foi inspirado na Revolut

- hero de alto impacto com escala tipografica forte
- atmosfera premium com gradientes, vidro e cards amplos
- secao de transicao apos a primeira dobra
- blocos espacados com composicao editorial
- footer escuro com peso institucional

## O que foi adaptado para a Maua Junior

- paleta azul, branca e preta
- textos institucionais e servicos reais da empresa
- cases com linguagem consultiva
- CTA final voltado para diagnostico comercial
- identidade mais academica e estrategica

## Checklist final

- [x] HTML semantico criado
- [x] CSS separado por responsabilidade
- [x] JavaScript separado por responsabilidade
- [x] Navbar fiel a proposta
- [x] Menu mobile funcionando
- [x] Hero visualmente forte
- [x] Animacao estilo Revolut implementada
- [x] Secao de servicos criada
- [x] Contato rapido criado
- [x] Cases de sucesso criados
- [x] Secao sobre a Maua Junior criada
- [x] CTA final criado
- [x] Footer grande criado
- [x] Responsivo em desktop
- [x] Responsivo em tablet
- [x] Responsivo em mobile
- [x] Sem scroll horizontal
- [x] Sem erros no console previstos pela implementacao
- [x] Sem links externos obrigatorios quebrados
- [x] Codigo organizado
- [x] README criado
