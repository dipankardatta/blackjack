let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')


// Player Details ---
let player = {
    playerName :"Dipankar",
    playerChips :199
}


let playerEl = document.getElementById('player-el')
playerEl.textContent = player.playerName + ": $" + player.playerChips

// Random Card Generator ---
function getRandomCard(){
    let num = Math.floor(Math.random()*13) + 1
    if ( num === 1){
        return 11
    } else if ( num === 11 || num === 12 || num ===13){
        return 10
    } else {
        return num
    }
}

// Starting the game ---
function startGame () {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard 
    renderGame()
}

// Rendering the game ---
function renderGame(){
    cardsEl.textContent = "Cards: " 
    for ( let i = 0 ; i < cards.length ; i++){
        cardsEl.textContent += cards[i] + ' '
    }
    sumEl.textContent = "Sum: " + sum
    if ( sum <= 20){
        message = 'Do you want to draw a new card?'
    } else if ( sum === 21){
        message = 'Wooho! You got blackjack'
        hasBlackJack = true
    } else {
        message = 'You are out of the game'
        isAlive = false
    }
    messageEl.textContent = message
}


// Adding a new card ---
function newCard(){
    if (isAlive=== true && hasBlackJack === false){
    console.log("Drawing a new card from the deck")
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
    
}


// Resetting the game
function reset(){
    hasBlackJack = false;
    isAlive = false
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
    messageEl.textContent = "Want to play a round?"
    firstCard = 0
    secondCard = 0
}
