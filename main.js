const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorALL('.perametro-senha__botao');

botoes[0].onclik = diminuitamanho; 

function diminuitamanho( ){
tamanhoSenha = tamanhoSenha-1;
}
console.log(botoes);