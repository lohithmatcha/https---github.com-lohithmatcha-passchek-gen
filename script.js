const input = document.querySelector(".input");
const showBtn = document.querySelector(".showBtn")
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");

let regW = /[a-z]/;
let regM = /\d+/;
let regS = /.[!,@,#,$,%,^,&,*,(,)]/;

document.getElementById("trigger").addEventListener("keyup",function()
{
    let W=input.value.match(regW);
    let M=input.value.match(regM);
    let S=input.value.match(regS);
    if(input.value.length<=3 && (W || M || S))
        no=1;
    if(input.value.length>=6 && ((W && M)||(M && S)||(W && S)))
        no=2;
    if(input.value.length>=6 && W && M && S)
        no=3;
     if(no==1)
      {
        text.style.display = "block";
        text.textContent="Your password is too weak";

      }
     if(no==2)
        {
          text.style.display = "block";
          text.textContent="Your password is Medium";
        }
      if(no==3)
            {
              text.style.display = "block";
              text.textContent="Your password is Strong";
            }
      showBtn.style.display="block";
      showBtn.onclick=function()
      {
        if(input.type=="password")
          {
            input.type="text";
            showBtn.textContent="HIDE";
          }
          else
          {
            input.type = "password";
		       	showBtn.textContent = "SHOW";
          }
      }    
             
})
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')
const s =document.getElementById('ip')
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password) { return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    // let generatedPassword =document.getElementById('a') 
    const typesCount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    
    if(typesCount === 0) {
        return ''
    }

    if(s.value!="")
        length=length+(s.value.length)

    let c=0;
    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
        if(c==0)
            {
                generatedPassword=generatedPassword+s.value
                c=1
            }
    }
    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
console.log("jviu");
console.log(input);