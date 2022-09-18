const PASSAGEM = 6.50
const PAGAMENTO = document.querySelector('#txtpag')
const STATUS = document.querySelector('#status')
const DIVPAG = document.querySelector('#pagamento')
const CATRACA = document.querySelector('#catraca')
let pag = false

function calcular(){
    
    let valor = Number(PAGAMENTO.value)
    if(valor < 6.50){
      pag = false
      falta = PASSAGEM - valor
      STATUS.innerHTML = `<p><strong>Valor Insuficiente!</strong><br> 
      Falta ${falta.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} <br>
       </p>`;
    
    }else if(valor == 6.50){
        pag = true
        STATUS.innerHTML = '<p>Valor Certinho! <br> <strong>Catraca Liberada</strong></p>'
    }else{
        pag = true
        troco  = valor - PASSAGEM
        STATUS.innerHTML = `<p>Você pagou a mais, o valor do seu troco é ${troco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}<br> Catraca Liberada!<p>`
        console.log(pag);
    }
    
} 