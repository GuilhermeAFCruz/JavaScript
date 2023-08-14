const messageEl = document.querySelector('[message]')
const startBtn = document.querySelector('[start-btn]')
const newCardBtn = document.querySelector('[new-card-btn]')
const cardDisplay = document.querySelector('[cards-display]')
const sumDisplay = document.querySelector('[sum-display]')
const playerEl = document.querySelector('[player-el]')
let sum = 0
let message = ''
let hasBackjack = false
let isAlive = false
let cards = []
startBtn.addEventListener('click', startGame)
newCardBtn.addEventListener('click', newCard)

let player1 = {
    name: 'Guilherme',
    chips: 200
}

playerEl.textContent = `${player1.name}: $${player1.chips}`

function startGame() {
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    checkState()
}

function checkState() {
    cardDisplay.textContent = "Cards:"
    for (i in  cards) {
        cardDisplay.textContent += ` ${cards[i]}`
        console.log(cards[i]);
    }
    sumDisplay.textContent = `Sum: ${sum}`
    if (sum <= 20) {
    message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function randomCard() {
    let randomCard = Math.floor(Math.random() * 10) + 1
    if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }    
}

function newCard() {
    if (isAlive === true && hasBackjack === false) {
        let card = randomCard()
        sum += card
        cards.push(card)
        checkState()
    }
}