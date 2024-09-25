function contagem(){
    let n = Number(prompt("Digite um número: "));   //Entrada manual
    let i = 1;                                      //Processo
    while(i <= n){                                  //Laço de Repetição
        alert(i);                                   //Display
        i ++;                                       //Processo
    }

}

//Usando for
// function contagem(){
//     let n = Number(prompt("Digite um número: "));   
//     while(i = 1; i<=n; i ++){                             
//         alert(i);                                                                        
//     }
// }

function somaAteZero(){
    let n = Number (prompt("Digite um número: "));
    let soma = 0
    while(n != 0){
        soma += n;
        n = Number (prompt("Digite um número: "));
    }
    alert(soma);
}

function media(){
    let qdtTotal = Number(prompt("Digite a quantidade de números: "));
    let soma = 0;
    for(let qtdcad = 0; qtdcad < qdtTotal; qtdcad ++){
    let numero = Number(prompt("Digite o número: "));
    soma = soma + numero;
    // let qtdcad = 0;
    // while(qtdcad < qdtTotal){
    //     let numero = Number(prompt("Digite o número: "));
    //     soma = soma + numero;
    //     qtdcad ++;
    // }
    // let media = soma/qdtTotal;
    // alert (media);
    //}
}
    let media = soma/qdtTotal;
    alert (media);

}
function fatorial(){
    let n = Number(prompt("Digite o número para calcular o fatorial: "));
    let r = 1;
    //     let r = 1;
    //     while(i <= n){
    //         r = r *i;
    //         i++;
    //     }
    // alert(r)
    for(let i = 1; i <= n; i++){
        r = r *i;
    }
    alert(r);
}
function multiplicacao(){
    let n = Number(prompt("Digite um número!"));
    let tabela = "";
    //for(inicialização ; condição ; incremento){trecho que será repetido}
    for(let mult = 1; mult <= 10 ; mult ++){
        tabela += "\n"+n+" x "+mult+" = "+(n*mult);
        }
        alert(tabela);
}

function numerospares(){
    let n = Number(prompt("Digite até que número você quer contar: "));
    let pares = "";
    for(let par = 1; par <= n ; par++){
        if(par % 2 == 0){
            pares +="\n"+par
        }
    }
    alert(pares);
}

function passopersonalizado(){
    let n = Number(prompt("Digite um número: "));
    let passo = Number(prompt("Digite o passo: "));
    let i = 1;
    while(i<n){
        alert(i);
        i += passo;
    }

}

function numerosimpares(){
let n = Number(prompt("Digite até que número você quer contar: "));
let impares = "";
for(let impar = 1; impar <= n ; impar++){
    if(impar % 2 != 0){
        impares +="\n"+impar
    }
}
alert(impares);
}

function multiplos(){
    let n1 = Number(prompt("Digite um número: "));
    let n2 = Number(prompt("Digite o possivel número: "));
    if(n2 % n1 == 0){
        alert(n2 + " é múltiplo " +n1)
    }
    else
    alert(n2 +" não é múltiplo "+n1)
}

function numeroprimo(){
    let n = Number(prompt("Digite um número: "));
    let qdtDivisores = 0;
    for(let ant = 1; ant <= n; ant++){
        if(n % ant == 0){
        qdtDivisores++
        }
    }
    if(qdtDivisores == 2){
        alert(n + " é primo!")
    }
    else{
    alert(n + " não é primo!")
    }
    
}
//Para um número ser considerado primo,
//ele tem que ter EXCLUSIVAMENTE 2 divisores
//tem que dividir por todos os anteriores e verificar quais dão zero.

function verificaprimo(i){
    let qdtDivisores = 0;
    for(let ant = 1; ant <= i; ant++){
        if(i % ant == 0){
        qdtDivisores++
        }
    }
    if(qdtDivisores == 2){
        return true;
    }
    else{
        return false;
    }
    
}

// function numeroprimo(){
//     let n = Number(prompt("Digite o número!"))
//     let i = 1
//     while(i<=n){
//         if(verificaprimo(i) == true){
//             alert(i + " é primo!")
//         }
//         else{
//             alert(i + " não é primo!")
//         }
//         i ++;
//     }

// }

function numeroprimo(){
    let n = Number(prompt("Digite o número!"));
    let tabela = "";
        for(let i = 1; i <= n; i ++){
        if(verificaprimo(i) == true){
            tabela += (i + " é primo!\n");
        }
        else{
            tabela += (i + " não é primo!\n");
        }
    }
    alert(tabela);

}
