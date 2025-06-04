
const inputVal = document.querySelector('.inputClass') 
const form = document.querySelector('form')
const Congrats = document.querySelector('.Congrats')
const GameStart = document.querySelector('#GameStart')
const submit = document.querySelector(['#submit'])

let randomNumber = Math.round(Math.random()*100)

form.addEventListener("submit",submit.onclick = (e)=>{
    e.preventDefault()
    console.log("submitted")
    
    let inpVal = parseInt(inputVal.value)

    if(inpVal === randomNumber){
        Congrats.innerText = "Congrats"
    } else if(inpVal > randomNumber){
        Congrats.innerText = "Too hogh"
    } else{
        Congrats.innerText = "Too low"
    }
})
GameStart.addEventListener("click",()=>{
    form.reset();
    Congrats.style.color = '#fff'
})