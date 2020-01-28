var firstN=document.querySelector(".firstN");
var firstNameMsg=document.getElementById('firstName')

var lastN=document.querySelector(".lastN");
var lastNameMsg=document.getElementById('lastName')

var email=document.querySelector(".email");
var emailMsg=document.getElementById('e-mail')

var password=document.querySelector(".password");
var passwordMsg=document.getElementById('pass-word')

var button=document.querySelectorAll("button")[1];

document.querySelector("button").style.width="450px";


//var img = document.createElement("img");

//img.src = "images/first-icon.svg";
//var src = document.getElementById("x");
//img.style.weight= "50px";
//img.style.height="150px";
//img.style.

//src.appendChild(img);



button.addEventListener('click', formValitation);
function formValitation(e){
  if(!firstN.value)
  {
    errorMessage(firstN, firstNameMsg);
  }
  else{
    successMessage(firstN, firstNameMsg);
  }
  if(!lastN.value)
  {
    errorMessage(lastN, lastNameMsg);
  }
  else{
    successMessage(lastN, lastNameMsg);
  }
  if(!email.value)
  {
    errorMessage(email, emailMsg);
  }
  else{
    successMessage(email, emailMsg);
  }
  if(!password.value)
  {
    errorMessage(password, passwordMsg);
  }
  else{
    successMessage(password, passwordMsg);
  }

  e.preventDefault();
}

function errorMessage(input, message){
      message.style.color = "red";
      message.style.font = "italic";
      input.style.border = " solid hsl(0, 100%, 74%)";
      input.placeholder = "";
      input.style.background = "url(images/error3.png)  no-repeat right";
   }
   function successMessage(input, message){
       message.style.color = 'white';
       input.style.border = " solid green";
       input.style.background = "";
      }
