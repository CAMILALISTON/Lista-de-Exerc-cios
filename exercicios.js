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

}
function numerospares(){
    let i = Number(prompt("Digite até que número você quer contar: "));
    let nDet = 0
    for(i=1; i <= nDet; i++){
        i % 2 == 0
    }
    alert(i)
}