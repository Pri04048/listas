// =============================
// PARTE 1 - Funções
// =============================

// 1 - Função Declarativa
function saudacaoPrincipal() {
  console.log("Olá, seja bem-vindo!");
}

// 2 - Função com Parâmetro
function cumprimentarUsuario(nomeUsuario) {
  console.log(`Olá, ${nomeUsuario}!`);
}

// 3 - Função Anônima
const mensagemAnonima = function () {
  console.log("Essa é uma mensagem de uma função anônima!");
};

// 4 - Arrow Function
const multiplicarValores = (valor1, valor2) => valor1 * valor2;

// Testando no console
saudacaoPrincipal();
cumprimentarUsuario("Maria");
mensagemAnonima();
console.log("Multiplicação:", multiplicarValores(5, 3));

// =============================
// PARTE 2 - DOM: Manipulação
// =============================

// 1 - Trocar texto
function alterarTexto() {
  document.getElementById("paragrafoPrincipal").innerText = "Texto alterado com JS!";
}

// 2 - Mudar fundo
function alterarFundo() {
  document.body.style.backgroundColor = "pink";
}

// 3 - Adicionar item
function adicionarLista() {
  let itemNovo = document.createElement("li");
  itemNovo.textContent = "Novo Item";
  document.getElementById("listaItens").appendChild(itemNovo);
}

// 4 - Remover parágrafo
function removerParagrafoPrincipal() {
  let p = document.getElementById("paragrafoPrincipal");
  if (p) p.remove();
}

// 5 - Personalizar página
function customizarPagina() {
  document.getElementById("paragrafoPrincipal").style.color = "blue";
  document.getElementById("paragrafoPrincipal").style.fontSize = "20px";
  document.getElementById("tituloPrincipal").style.color = "green";
  document.getElementById("tituloPrincipal").style.fontSize = "35px";
}

// =============================
// PARTE 3 - DOM: Eventos
// =============================

// 1 - Digitação em tempo real
document.getElementById("inputTexto").addEventListener("input", function() {
  document.getElementById("saidaTexto").innerText = this.value;
});

// 2 - Mouseover
document.getElementById("btnMouseOver").addEventListener("mouseover", function() {
  this.innerText = "Você passou o mouse!";
});

// 3 - Dblclick
document.getElementById("btnDblClick").addEventListener("dblclick", function() {
  document.getElementById("paragrafoEscondido").style.display = "none";
});

// 4 - Alterar fonte aleatória
document.getElementById("btnMudarFonte").addEventListener("click", function() {
  let tamanhoAleatorio = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
  document.getElementById("paragrafoFonte").style.fontSize = tamanhoAleatorio + "px";
});
