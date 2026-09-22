/*
 * =========================================================================
 * PAPEL DO JAVASCRIPT NESTA PÁGINA (comentário obrigatório — Etapa 5)
 * =========================================================================
 * O JavaScript é o código que o navegador do próprio usuário executa depois
 * de receber o HTML e o CSS do servidor: é ele quem reage a eventos como o
 * clique no botão e altera a página em tempo real. Graças a isso, cada item
 * adicionado ao carrinho aparece na tela e o contador é atualizado sem
 * nenhuma nova requisição ao servidor e sem recarregar o documento.
 * A divisão de papéis fica assim: o HTML define a ESTRUTURA do conteúdo,
 * o CSS cuida da APRESENTAÇÃO visual e o JavaScript adiciona o COMPORTAMENTO,
 * ou seja, a interatividade da interface.
 */

/* Título do livro exibido no cartão — usado no texto de cada item da lista. */
var tituloDoLivro = "O Jardim das Palavras Perdidas";

/* Quantidade de itens já adicionados ao carrinho. */
var quantidade = 0;

/*
 * Seleção dos elementos pelo id.
 * Observação: getElementById recebe apenas o NOME do id, sem o "#" e sem
 * qualquer sintaxe de seletor CSS (nada de ".btn-adicionar" aqui).
 */
var botao = document.getElementById("btn-adicionar");
var carrinho = document.getElementById("carrinho");
var contador = document.getElementById("contador");

/*
 * Função chamada a cada clique no botão.
 * Ela cria um novo <li>, define o texto que será exibido e insere o item
 * dentro da <ul id="carrinho">, além de atualizar o contador do cabeçalho.
 */
function adicionarAoCarrinho() {
    quantidade = quantidade + 1;

    /* 1) Cria o elemento na memória, ainda fora da página. */
    var novoItem = document.createElement("li");

    /* 2) Define o texto exibido. textContent insere TEXTO puro, sem
          interpretar HTML — mais seguro e mais rápido que innerHTML. */
    novoItem.textContent = "1x " + tituloDoLivro;

    /* 3) Anexa o novo <li> como último filho da lista, o que faz o item
          aparecer imediatamente na tela. */
    carrinho.appendChild(novoItem);

    /* Atualiza o contador do cabeçalho, também via textContent. */
    contador.textContent = quantidade;
}

/*
 * Registro do evento.
 * Passa-se a REFERÊNCIA da função (sem parênteses). Escrever
 * adicionarAoCarrinho() aqui executaria a função na hora do registro e
 * guardaria o retorno (undefined) em vez da função em si.
 */
botao.addEventListener("click", adicionarAoCarrinho);
