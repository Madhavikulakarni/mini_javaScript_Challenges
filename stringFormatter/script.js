const inpIdValue = document.querySelector('#inpId')
const spanVal1 = document.querySelector('#lowecase span')
const spanVal2 = document.querySelector('#uppercase span')
const spanVal3 = document.querySelector('#camel')
const spanVal4 = document.querySelector('#pascal')
const spanVal5 = document.querySelector('#snake')
const spanVal6 = document.querySelector('#kabab')
const spanVal7 = document.querySelector('#trim')

inpIdValue.addEventListener("input",()=>{
    spanVal1.innerText = inpIdValue.value.toLowerCase().trim()
    spanVal2.innerText = inpIdValue.value.toUpperCase().trim()
    spanVal3.innerText = camelCase(inpIdValue.value.trim())
    spanVal4.innerText = pascalCase(inpIdValue.value.trim())
    spanVal5.innerText = snakeCase(inpIdValue.value.trim())
    spanVal6.innerText = kababCase(inpIdValue.value.trim())
    spanVal7.innerText = trim(inpIdValue.value.trim())
})
function capitalize(string){
        if(!string) return string;
        return string[0].toUpperCase() + string.slice(1,string.length)
}
function camelCase(str){
    const capital = str.toLowerCase()
    const camel = capital.split(" ")
    const finalArray = camel.map((word,i) =>{
        if(i==0) return word;
        return capitalize(word)
    })
    return finalArray.join("")
}

function pascalCase(str){
    const camel = str.split(" ")
    const finalArray = camel.map((word,i) =>{
        return capitalize(word)
    })
    return finalArray.join("")
}

function snakeCase(str){
    //   const camel = str.split(" ")

    //    return camel.join("_")

    return str.replaceAll(" ","_")
}

function kababCase(str){

    return str.replaceAll(" ","-")
}

function kababCase(str){

    return str.replaceAll(" ","-")
}
function trim(str){

    return str.replaceAll(" ","")
}