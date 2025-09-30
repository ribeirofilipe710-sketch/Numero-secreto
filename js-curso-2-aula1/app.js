let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  const campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
  const chute = Number(document.querySelector('input').value);
  console.log('chute:', chute, 'secreto:', numeroSecreto);

  if (chute === numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    const palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    const mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
      exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 10) + 1; // 1..10
}

function limparCampo() {
  const input = document.querySelector('input');
  input.value = '';
}