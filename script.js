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

function somaMedia() {
    const idade1 = parseInt( document.querySelector('#idade-1').value);
    const idade2 = parseInt(document.querySelector('#idade-2').value);
    
    let media = (idade1 + idade2)/2;
    console.log(media);
}