//O aluno deverá criar um programapara informar se determinado número é primo ou não.
 
var numero = 997; //numero a ser verificado
var divisores = 0; //numero de divisores do numero

for(divisor = 1; divisor <= numero; divisor++){ //para um divisor começando em 1, enquanto o divisor for menor que o numero, soma 1 ao divisor
    if(numero % divisor === 0){ //se o resto da divisao pelo divisor for 0, somamos 1 ao numero de divisores
        divisores++;
    }
}

if(divisores === 2){
    console.log('O número' + numero + 'é primo'); //se o numero de divisores for 2, ele será primo
} else{
    console.log('O numero' + numero + 'nao eh primo, pois foi divisísel por' + divisores + 'numeros');
}