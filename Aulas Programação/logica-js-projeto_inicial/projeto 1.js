// Exibe uma mensagem de boas-vindas ao jogo
alert('Bem-vindo ao jogo do número secreto!');

// Gera um número secreto aleatório entre 1 e 10
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

// Para fins de teste, mostra o número no console
// console.log(`O número secreto é: ${numeroSecreto}`);

let chute;
let tentativas = 1;

// Loop para pedir ao jogador para adivinhar o número e dar dicas
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // Verifica se o chute do jogador é igual ao número secreto
    if (chute == numeroSecreto) {
        // Se o chute for correto, o loop é interrompido
        break;
    } else {
        // Se o chute for incorreto, dá uma dica ao jogador
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // Incrementa o contador de tentativas
        tentativas++;
    }
}

// Verifica se a palavra "tentativa" precisa ser plural ou singular
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

// Exibe a mensagem de sucesso com o número de tentativas
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);