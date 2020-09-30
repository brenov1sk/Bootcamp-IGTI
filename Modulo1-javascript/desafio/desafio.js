const fs = require("fs"); //lê o arquivo json e retorna convertido em objeto
function lerArquivo(arquivo){
    let result= fs.readFileSync(arquivo,"utf-8")
    return JSON.parse(result);
}
function separaArray(){ //define data como a funçao criada e cria uma variavel array recebendo o array de funcionarios e retorna o array
    let data = lerArquivo("funcionarios.json");
    let array = data.funcionarios;
    return array;
}
function ordenaMaiorSalario(array){ //organiza o array em forma decrescente, onde o primeiro item é o maior 
    return array.sort(function(a, b){
        return b.salario - a.salario;
    })
        
}
function ordenaMenorSalario(array){//organiza o array em forma crescente,onde o primeiro item é o menor
    return array.sort(function(a, b){
        return a.salario - b.salario;
    })
        
}
function mediaSalarial(array){ //função que retorna a media salarial
    let somaSalarios = 0;
    let mediaSalarial = 0;
    for(let i=0; i <= array.length-1; i++){
        somaSalarios += array[i].salario;
    }
    mediaSalarial = somaSalarios/array.length
    return mediaSalarial.toFixed(2)
}

function maiorSalarioSetor(array,setor){ //função que retorna o maior salario por setor
    let arraySetor = [];
    for(let i=0; i <= array.length-1; i++){
        if(array[i].setor===setor){
            arraySetor.push(array[i]);
        }
    }
    return ordenaMaiorSalario(arraySetor);
    
}
function menorSalarioSetor(array,setor){ //função que retorna o menor salario por setor
    let arraySetor = [];
    for(let i=0; i <= array.length-1; i++){
        if(array[i].setor===setor){
            arraySetor.push(array[i]);
        }
    }
    return ordenaMenorSalario(arraySetor);
    
}
function mediaSalarioSetor(array,setor){ //função que retorna a media salarial por setor
    let arraySetor = [];
    for(let i=0; i <= array.length-1; i++){
        if(array[i].setor===setor){
            arraySetor.push(array[i]);
        }
    }
    return mediaSalarial(arraySetor);
    
}


console.log(ordenaMaiorSalario(separaArray())[0].nome);
console.log(ordenaMenorSalario(separaArray())[0].nome);
console.log(mediaSalarial(separaArray()));
console.log(maiorSalarioSetor(separaArray(),"Comercial")[0]); //para saber determinado setor, é só mudar para o desejado
console.log(menorSalarioSetor(separaArray(),"Comercial")[0]);
console.log(mediaSalarioSetor(separaArray(),"Comercial"));