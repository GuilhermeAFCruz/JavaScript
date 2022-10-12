const INICIO = document.querySelector('#inicio')
const FIM = document.querySelector('#fim')
const PASSO = document.querySelector('#passo')
const BTNCONTAR = document.querySelector('#contar')
const RES = document.querySelector('#res')

BTNCONTAR.addEventListener('click', contar)

function contar(){

    if (INICIO.value.length == 0 || FIM.value.length == 0 || PASSO.value.length == 0){

        RES.innerHTML = 'Impossivel Contar'
        alert('[ERRO] Faltam dados!')

    }
    else{

        RES.innerHTML = 'Contando: '
        let i = Number(INICIO.value)
        let f = Number(FIM.value)
        let p = Number(PASSO.value)

        if(p <= 0 ){
            alert('Passo Invalido! Considerando PASSO 1')
            p = 1
        }


        if(i < f){

             //Contagem Crescente
            for(let c = i;c <= f; c += p ) {
            RES.innerHTML += `${c} \u{1f449} `
         }

            //Contagem Decrescente
        } else {
            for(let c = i; c >= f; c -= p){
            RES.innerHTML += `${c} \u{1f449} `
            }
        }
        RES.innerHTML += `\u{1f3c1}`
    }

}