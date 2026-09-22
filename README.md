# Catálogo da Livraria Página Viva

Atividade prática de HTML, CSS e JavaScript: página de cadastro de um livro no
catálogo online da livraria fictícia "Página Viva".

Projeto estático — basta abrir o `index.html` em qualquer navegador.

## Estrutura de pastas

```
projeto/
├── index.html
├── README.md
├── css/
│   └── estilo.css
├── imagens/
│   └── capa-livro.png
└── js/
    └── script.js
```

Todos os caminhos no `index.html` são relativos à pasta do projeto:

```html
<link rel="stylesheet" href="css/estilo.css">
<img src="imagens/capa-livro.png" alt="...">
<script src="js/script.js"></script>
```

---

## 1. Qual é o papel de um servidor Web ao carregar esta página?

O servidor Web é o programa que fica esperando requisições HTTP e devolve os
arquivos pedidos. Quando o navegador acessa a página, ele abre uma conexão e
envia uma requisição `GET /index.html`; o servidor localiza esse arquivo,
responde com um status (`200 OK`) e o conteúdo HTML.

Ao interpretar o HTML, o navegador encontra as referências a `css/estilo.css`,
`imagens/capa-livro.png` e `js/script.js` e dispara **uma nova requisição HTTP
para cada recurso**. O servidor responde a cada uma com o arquivo
correspondente e o tipo de conteúdo adequado (`text/css`, `image/png`,
`application/javascript`).

Ou seja: o servidor apenas **recebe requisições e entrega recursos**. Quem monta
a página na tela, aplica o CSS e executa o JavaScript é o navegador, na máquina
do usuário. Por isso o contador do carrinho funciona sem nenhuma ida ao
servidor — o JavaScript já está rodando localmente.

## 2. Pergunta de fixação da Etapa 7 (caminho relativo)

> Se eu criasse uma página em `paginas/sobre.html`, qual seria o caminho
> relativo correto, escrito dentro desse arquivo, para exibir a imagem
> `imagens/capa-livro.png`?

```html
<img src="../imagens/capa-livro.png" alt="Capa do livro O Jardim das Palavras Perdidas">
```

**Justificativa do `../`:** um caminho relativo é sempre resolvido a partir da
pasta do arquivo que o contém, e não da raiz do projeto. Como `sobre.html` está
dentro de `paginas/`, escrever `imagens/capa-livro.png` faria o navegador
procurar por `paginas/imagens/capa-livro.png`, que não existe.

O `../` significa "suba um nível na árvore de diretórios". Ele leva de
`paginas/` de volta para a raiz `projeto/`, e só a partir daí o restante do
caminho — `imagens/capa-livro.png` — passa a apontar para o arquivo certo:

```
projeto/                     <- ../ chega aqui
├── imagens/
│   └── capa-livro.png       <- ../imagens/capa-livro.png
└── paginas/
    └── sobre.html           <- arquivo de origem
```

No `index.html`, que já está na raiz, o `../` não é necessário: `imagens/capa-livro.png`
basta.

## 3. Boas práticas de escrita HTML aplicadas (Etapa 1)

- **Elementos semânticos no lugar de `<div>` genérica.** `<header>`, `<nav>`,
  `<main>`, `<article>`, `<section>` e `<footer>` descrevem o papel de cada
  bloco. Isso ajuda leitores de tela a navegar por pontos de referência e
  buscadores a entender a hierarquia do conteúdo — coisa que uma `<div>` não
  comunica. A justificativa elemento a elemento está no comentário ao final do
  `index.html`.
- **Tags corretamente aninhadas e fechadas.** Nenhum elemento fecha fora de
  ordem. Tags mal fechadas fazem o navegador "consertar" o documento por conta
  própria, gerando uma árvore DOM diferente da esperada e quebrando o CSS e o
  JavaScript.
- **Nenhum `id` repetido na página.** Cada `id` aparece uma única vez
  (`cabecalho`, `contador`, `catalogo`, `btn-adicionar`, `carrinho`,
  `selo-destaque`, `contato`, `nome`, `email`, `telefone`, `senha`, `pref-email`,
  `pref-telefone`, `novidades`, `rodape`). Isso é obrigatório porque
  `document.getElementById()` e os links internos `#id` retornam apenas a
  primeira ocorrência — ids duplicados causam bugs silenciosos.
- **Indentação consistente de 4 espaços refletindo a hierarquia.** Cada nível de
  aninhamento recai um nível de indentação, o que torna visível de imediato qual
  elemento está dentro de qual.
- **`lang="pt-BR"` no `<html>` e `<meta charset="UTF-8">`.** Definem o idioma
  para leitores de tela e a codificação, evitando acentuação quebrada.
- **Texto alternativo descritivo em toda imagem.** O `alt` da capa descreve o
  conteúdo da imagem, e não apenas repete "capa".
- **Todo campo de formulário com `<label>` associado por `for`/`id`.** Além de
  acessível, isso faz o clique no rótulo focar o campo correspondente.
- **Escolha justificada entre `<ul>` e `<table>`.** `<ul>` para os destaques,
  porque a ordem dos itens não altera o sentido; `<table>` para o comparativo de
  formatos, porque existe relação tabular real entre linhas (formato) e colunas
  (preço e prazo).

---

## Mapa das etapas no código

| Etapa | Onde conferir |
|---|---|
| 1 – HTML semântico | `index.html` inteiro + comentário de justificativa no final |
| 2 – Seletores e cascata | `css/estilo.css`, blocos comentados 1 a 4 e "EXPERIMENTO DE ESPECIFICIDADE" |
| 3 – Flexbox e Grid | `css/estilo.css`: `#cabecalho` e `.menu-lista` (Flex), `.cartao-livro` e `.grade-formatos` (Grid) |
| 4 – Responsividade | `<meta name="viewport">` no `index.html` + `@media (max-width: 42rem)` e ajuste extra para celulares estreitos no fim do CSS |
| 5 – JavaScript e DOM | `js/script.js` |
| 6 – Formulário | `<section id="contato">` no `index.html` |
| 7 – Pastas e caminhos | estrutura acima + respostas 1 e 2 deste README |
