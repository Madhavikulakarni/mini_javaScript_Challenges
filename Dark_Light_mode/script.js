const darkCheckBox = document.querySelector('#dark-check-box')
const darkContainerBoxTwo = document.querySelector('#dark-check-box2')

const isFullDarkMode = JSON.parse(localStorage.getItem('darkCheckBox'))  // localStorage value is string so to convert it into boolean
const isContainerDarkMode = JSON.parse(localStorage.getItem('darkContainerBoxTwo'))


// to maintain localStorage
if(isFullDarkMode){
    darkCheckBox.checked = true
     document.body.classList.add('dark')
} else{
    darkCheckBox.checked = false
     document.body.classList.remove('dark')
}
if(isContainerDarkMode){
    darkContainerBoxTwo.checked = true
     document.querySelector('.containerBox').classList.add('dark')
} else{
    darkContainerBoxTwo.checked = false
    document.querySelector('.containerBox').classList.remove('dark')
}
// localStorage code end

// Full body dark mode
darkCheckBox.addEventListener("change",(e)=>{
    if(darkCheckBox.checked){
        document.body.classList.add('dark')
        localStorage.setItem('darkCheckBox', true) //accessing localStorage value
    } else{
        document.body.classList.remove('dark')
        localStorage.setItem('darkCheckBox', false)
    }
})

// Only container dark mode
darkContainerBoxTwo.addEventListener("change",(e)=>{
    if(darkContainerBoxTwo.checked){
        document.querySelector('.containerBox').classList.add('dark')
                localStorage.setItem('darkContainerBoxTwo', true)  //accessing localStorage value
    } else{
        document.querySelector('.containerBox').classList.remove('dark')    
                        localStorage.setItem('darkContainerBoxTwo', false)
    }
})