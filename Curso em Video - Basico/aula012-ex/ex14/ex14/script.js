const msg = document.querySelector('#msg')
const img = document.querySelector('#img')
const body = document.querySelector('#body')
let date = new Date()
 let hora = date.toLocaleTimeString([], {timeStyle: 'short'})


function carregar(){

    
    if (hora >= 0 && hora < 12){
        img.src = 'images/manha.png'
        body.style.background = '#e5d6b7'
        msg.innerHTML =`Agora são ${hora} <p>Bom Dia</p> `
    }
    else if(hora >= 12 && hora < 18) {
        img.src = 'images/tarde.png'
        body.style.background = '#e8947b'
        msg.innerHTML =`Agora são ${hora} <p>Boa Tarde</p> `
    }
    else{
        img.src = 'images/noite.png' 
        body.style.background = '#182d3d'
        msg.innerHTML =`Agora são ${hora} <p>Boa Noite</p> `
    }
}