const BTNTAB = document.querySelector('#btntab')
const NUMTAB = document.querySelector('#txtnumero')
const SELTAB = document.querySelector('#seltabuada')

BTNTAB.addEventListener('click', gerarTabuada)

function gerarTabuada(){
    if(NUMTAB.value.length == 0){
        alert('Por favor, digite um número!')

    }else{
        let n = Number(NUMTAB.value)
        let c = 1
        SELTAB.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            SELTAB.appendChild(item)
            c++
        }
    }
}