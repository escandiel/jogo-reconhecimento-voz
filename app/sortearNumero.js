const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = Math.floor(Math.random() * maiorValor);

const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorValor;

console.log(numeroSecreto);
