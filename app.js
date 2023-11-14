const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const list = document.querySelector('.time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors =['#FA8072','#FFA500','#008B8B','#0000CD','#9370DB', '#00FF00','#808000']
let time = 20
let score = 0
startBtn.addEventListener('click',(event)=>{
   event.preventDefault() 
 screens[0].classList.add('up')
})
list.addEventListener('click',event =>{
    if(event.target.classList.contains('time-btn')){
      time = parseInt((event.target.getAttribute('data-time')))
      screens[1].classList.add('up')
      startGame()
    }
})
board.addEventListener('click',event =>{ 
  if(event.target.classList.contains('circle')){
    score++
    event.target.remove()
    createCicrcle()
  }
  setColor(circle)
})

function startGame(){
setInterval(decrease,1000)
createCicrcle()
setTimeout(time)
}
function decrease(){
  if(time===0){
    finishGame()
  }
  else{
    let cur = --time
    
  if(cur<10){
    cur = `0${cur}`
  }
  setTimeout(cur)
  }
}
function setTimeout(value){
  timeEl.innerHTML=`00:${value}`
}
function finishGame(){
board.innerHTML=`<h1>счет:<span class = "primary">${score}</span></h1>`
timeEl.parentNode.remove()
}
function createCicrcle(){
  const circle = document.createElement('div')
  setColor(circle)
  circle.classList.add('circle')
  const size = getRandomNum(10,60)
  const {width,height} = board.getBoundingClientRect()
  const x = getRandomNum(0,width-size)
  const y = getRandomNum(0,height-size)
  circle.style.width= `${size}px`
  circle.style.height= `${size}px`
  circle.style.top=`${y}px`
  circle.style.left=`${x}px`
  board.append(circle)
} 
function getRandomNum(min,max){
 return Math.round(Math.random()*(max-min)+min)
}
function setColor(element){ 
    const color = getcolor()
    element.style.backgroundColor = color
    element.style.boxShadow = ` 0 0 2px ${color} , 0 0 10px ${color}`
}
function getcolor(){
  const index =   Math.floor(Math.random() * colors.length)
  return colors[index]
 }
 function winGame(){
  function kill(){
    const circle = document.querySelector('.circle')
    if(circle){
      circle.click()
    }
    
  }
  setInterval(kill, 10)
 }
 function getWords(sentence) {
  return sentence.split(" ");
}

// Пример использования:
