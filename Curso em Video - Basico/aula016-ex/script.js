const NUM = document.querySelector('#fnum')
const BTNADD = document.querySelector('#btnadd')
const LISTA = document.querySelector('#flista')
const BTNFIN = document.querySelector('#btnfin')
const RES = document.querySelector('#res')
const VALORES = []

BTNADD.addEventListener('click', adicionar)
BTNFIN.addEventListener('click', finalizar)
document.addEventListener('keydown', adicionarEnter)
document.addEventListener('keydown', finalizarEnter)

function adicionarEnter(e){
    if(e.code === 'NumpadEnter'){
        adicionar()
    }
    
}
function finalizarEnter(e){
    if(e.code === 'Enter'){
        finalizar()
    }
}

function isNumero(n){
    if(n >= 1 && n <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    let n = Number(NUM.value)
    if( isNumero(n) && !inLista(n, VALORES)){
        VALORES.push((n))
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        LISTA.appendChild(item)
        RES.innerHTML = ''
    }else{
        alert('Valor invalido ou já registrado!')
    }
    NUM.value = ''
    NUM.focus()
}

function finalizar(){
    if(VALORES.length == 0){
        alert('Insira valores antes de finalizar!')
    }else{
        let tot = VALORES.length
        let maior = VALORES[0]
        let menor = VALORES[0]
        let soma = 0
        let media = 0
        for(i in VALORES) {
            soma += VALORES[i]
            media = soma/tot
            if(VALORES[i] > maior){
                maior = VALORES[i]
            }
            if(VALORES[i] < menor){
                menor = VALORES[i]
            }
        }
        RES.innerHTML = ''
        RES.innerHTML += `<p>A lista tem ${tot} Items</p>`
        RES.innerHTML += `<p>O maior valor é ${maior}</p>` 
        RES.innerHTML += `<p>O menor valor é ${menor}</p>` 
        RES.innerHTML += `<p>A soma dos valores é ${soma}</p>` 
        RES.innerHTML += `<p>A media dos valores é ${media}</p>` 
        
    }
}