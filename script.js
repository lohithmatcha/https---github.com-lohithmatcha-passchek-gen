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
console.log("jviu");
console.log(input);