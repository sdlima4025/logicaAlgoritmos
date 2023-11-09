// exercício 01
// function go(){
//     var valueInput = document.getElementById('num').value;
//     alert(valueInput);
// }

// exercício 02
// function go() {
//     var a = document.getElementById('num-a').value;
//     var b = document.getElementById('num-b').value;
//     var c= b;
//     var b= a;
//     var a=c;
//     console.log('variavel A:' + a);
//     console.log('variavel B:' + b);
// }

//exercicio 03

// function somaMedia() {
//     const idade1 = parseInt( document.querySelector('#idade-1').value);
//     const idade2 = parseInt(document.querySelector('#idade-2').value);
    
//     let media = (idade1 + idade2)/2;
//     console.log(media);
// }

//exercicio 04

function calcular() {
    const a = parseInt(document.querySelector('#value1').value);
    const b = parseInt(document.querySelector('#value2').value);
    
    const selectOperation = document.querySelector('input[name="operation"]:checked').value;
    var nameOperation, calculo;
    if(selectOperation == 'adicao') {
        nameOperation = 'Adição';
        calculo = "A Adição dos números é  = "  + (a + b);
    }
    if(selectOperation == 'subtracao') {
        nameOperation = 'subtração';
        calculo = "A Subtração dos números é  = " + (a - b);
    }
    if(selectOperation == 'multiplicacao') {
        nameOperation = 'Multiplicação';
        calculo = "A Multiplicação dos números é  = " + (a * b);
    }
    if(selectOperation == 'divisao') {
        nameOperation = 'Divisão';
        calculo = "A divisão dos números é  = " + (a / b);
    }
    alert(calculo);
}