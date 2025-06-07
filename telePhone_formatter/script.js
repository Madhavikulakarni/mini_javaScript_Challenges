const input = document.querySelector('#input')

let previousVal = ''
let threeDigits = ''


input.addEventListener("input", (e)=>{
   let inputVal = e.target.value
   console.log(inputVal,previousVal)

   if(/\d+$/.test(inputVal)){
    input.value = inputVal
   } else {
    input.value = inputVal.substring(0, inputVal.length-1)
   }

   if(inputVal.length === 4 && previousVal.length < inputVal.length){
       threeDigits = inputVal.substring(0,3)
    input.value = `+(${threeDigits}) - ${inputVal[inputVal.length-1]}`
    // console.log(threeDigits)
   }
   else if(inputVal.length === 9 && previousVal.length > inputVal.length){
       input.value = threeDigits
    // console.log("hii")
  
   }
   previousVal = inputVal
})