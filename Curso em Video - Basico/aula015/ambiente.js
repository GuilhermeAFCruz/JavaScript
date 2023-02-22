//define o array
let num = [5,8,2,9,3]

console.log(num);

//adiciona no final do array
// num.push (7)

//mostra os valores em ordem crescente
// console.log(num.sort());

//exibe os resultados usando for
// for(let pos = 0; pos < num.length; pos++){
//     console.log(num[pos]);
// }

// for( i in num){
//     console.log(num[i]);

// }

let pos = num.indexOf(5)

if (pos == -1){
    console.log('O valor não foi encontrado');
} else {
    console.log(`O valor esta na posição ${pos}`);
}