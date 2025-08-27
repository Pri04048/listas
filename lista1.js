function boasVindas() {
      let nome = prompt("Digite seu nome:");
      alert("Seja bem-vindo(a), " + nome + "!");
    }

    function mostrarValor() {
      let valor = document.getElementById("textoDigitado").value;
      document.getElementById("resultadoTexto").innerText = "Você digitou: " + valor;
    }

    // Conversão de Tipos
    function somaValores() {
      let n1 = Number(prompt("Digite o primeiro número:"));
      let n2 = Number(prompt("Digite o segundo número:"));
      alert("A soma é: " + (n1 + n2));
    }

    function concatenarNumero() {
      let num = prompt("Digite um número:");
      alert("Seu número como texto: " + num + " - concatenado com esta frase.");
    }

    function verificarIdade() {
      let idade = Number(prompt("Digite sua idade:"));
      if (idade >= 18) {
        alert("Você é maior de idade.");
      } else {
        alert("Você é menor de idade.");
      }
    }

    // Funções de Texto
    function manipularTexto() {
      let frase = prompt("Digite uma frase:");
      alert("Quantidade de caracteres: " + frase.length);
      alert("Maiúsculas: " + frase.toUpperCase());
      alert("Minúsculas: " + frase.toLowerCase());

      let palavraOriginal = prompt("Qual palavra deseja substituir?");
      let novaPalavra = prompt("Por qual palavra?");
      let fraseSubstituida = frase.replace(palavraOriginal, novaPalavra);
      alert("Frase substituída: " + fraseSubstituida);

      let palavraProcurada = prompt("Qual palavra deseja verificar se existe?");
      if (frase.includes(palavraProcurada)) {
        alert("A palavra existe na frase!");
      } else {
        alert("A palavra não foi encontrada.");
      }

      if (frase.length >= 5) {
        alert("Caractere na posição 5: " + frase.charAt(4));
      } else {
        alert("A frase é muito curta para ter um caractere na posição 5.");
      }
    }

    // Funções Matemáticas
    function adivinharNumero() {
      let aleatorio = Math.floor(Math.random() * 10) + 1;
      let palpite = Number(prompt("Adivinhe o número entre 1 e 10:"));
      if (palpite === aleatorio) {
        alert("Parabéns! Você acertou!");
      } else {
        alert("Errou! O número era: " + aleatorio);
      }
    }

    function arredondarValores() {
      let numero = Number(prompt("Digite um número decimal:"));
      alert("Arredondado para cima: " + Math.ceil(numero));
      alert("Arredondado para baixo: " + Math.floor(numero));
      alert("Arredondado normalmente: " + Math.round(numero));
    }

    function manipularNumeros() {
      let numeros = [];
      for (let i = 0; i < 10; i++) {
        numeros.push(Number(prompt("Digite o número " + (i+1) + ":")));
      }
      alert("Maior número: " + Math.max(...numeros));
      alert("Menor número: " + Math.min(...numeros));
    }

    function novosValores() {
      let numero = Number(prompt("Digite um número:"));
      alert("Valor absoluto: " + Math.abs(numero));
      alert("Elevado a 4: " + Math.pow(numero, 4));
      alert("Raiz quadrada: " + Math.sqrt(numero));
    }

    // Datas
    function mostrarData() {
      let hoje = new Date();
      console.log("Data atual: " + hoje);
      alert("Data atual : " + hoje);
    }

    function diasAniversario() {
      let dia = Number(prompt("Digite o dia do seu aniversário:"));
      let mes = Number(prompt("Digite o mês do seu aniversário (1-12):"));

      let hoje = new Date();
      let aniversario = new Date(hoje.getFullYear(), mes - 1, dia);

      if (aniversario < hoje) {
        aniversario.setFullYear(hoje.getFullYear() + 1);
      }

      let diff = Math.ceil((aniversario - hoje) / (1000 * 60 * 60 * 24));
      alert("Faltam " + diff + " dias para o seu aniversário!");
    }