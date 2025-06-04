const counterid = document.querySelector('#counterid')
const minusbtn = document.querySelector('#minus')
const plusbtn = document.querySelector('#plus')
const inputBox = document.querySelector('#inputid')
const resetidbtn = document.querySelector('#resetid')
inputBox
let incrementBy = 1;
inputBox.addEventListener("input", () => {
     incrementBy = parseInt(inputBox.value)
     console.log(typeof(incrementBy))
     
})

plusbtn.addEventListener("click",function(){
let countValue= parseInt(counterid.innerText);
    counterid.innerText = countValue +incrementBy
})

minusbtn.addEventListener("click",function(){
    let countValue= parseInt(counterid.innerText);
    counterid.innerText = countValue -incrementBy
})
resetidbtn.addEventListener("click",()=>{
    counterid.innerText = 0;
    inputBox.value = null
})