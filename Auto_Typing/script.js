const span = document.querySelector("span");

const wordList = ['Developer','Coder','Web_developer','Frontend_developer']

let wordListIndex = 0
// const word = "Developer";
let wordIndex = 0;
let reverseType = false;
setInterval(() => {
    // forward typing
  if (!reverseType) {
    span.innerText = span.innerText + wordList[wordListIndex][wordIndex];
    wordIndex++;
  } else{   // reverse typing
    span.innerText = span.innerText.slice(0,span.innerText.length-1)
  }
  // again forward typing
  if(span.innerText.length === 0 && reverseType){
    reverseType = false
    wordIndex = 0
  }
  // again reverse typing
  if (wordIndex === wordList[wordListIndex].length) {
    reverseType = true;
    wordListIndex++
  }

  // restart the wordList 
    if(wordListIndex === wordList.length){
    wordListIndex = 0
  }

}, 300);
