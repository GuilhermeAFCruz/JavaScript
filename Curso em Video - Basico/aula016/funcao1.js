function parimp(numero){
    if(numero%2 == 0){ 
        return 'par'
    }else{
        return 'impar'
    }
}
let num = 7
let res = parimp(num)

console.log(res);