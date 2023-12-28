const random=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const lastSlot=document.querySelector('.lastresult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]

let numGuess=1
let playGame=true

if (playGame) {
    submit.addEventListener('click',function(e){
     e.preventDefault()
     const guess= parseInt(userInput.value)
     validateGuess(guess)
    });
}

function validateGuess(guess){
    //
    if (isNaN(guess)) {
        alert('please enter a valid number')
    }
    else if (guess<1) {
        alert('please enter a valid number more than' )
    }
    else if (guess>100) {
        alert('please enter a  number is less than')
    }
    else{
        prevGuess.push(guess)
        if (numGuess==11) {
            displayGuess(guess)
            displayMessage(`Game Over.Random number was ${random}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)

        }
    }
}
function checkGuess(guess){
   //
   if (guess==random) {
       displayMessage('you guessed right')
       endGame()
   }
   else if (guess<random) {
     displayMessage('number is too low')
   }
   else if (guess>random) {
    displayMessage('number is too high')
  }

}
function displayGuess(guess){
    //
    userInput.value=" "
    guessSlot.innerHTML=`${guess}`
    numGuess++;
    lastSlot.innerHTML=`${11-numGuess}`
}
function displayMessage(message){
    //
    lowOrHi.innerHTML=`<h2>${message}</h2>`;

}
function newGame(){
   const newGameid= document.querySelector('#newGame')
   newGameid.addEventListener('click',function(e) {
    let random=parseInt(Math.random()*100+1)
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    lastSlot.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame=true
   })
}
function endGame(){
     userInput.value=''
     userInput.setAttribute('disabled','')
     p.classList.add('button')
     p.innerText='<h2 id="newGame"> start the new Game</h2>'
     startOver.appendChild(p)
     playGame=false
     newGame()
}







