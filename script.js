var para = document.querySelector("p");

var hello = document.getElementById("hello");
var byebtn = document.getElementById("bye");

byebtn.addEventListener('click',function(){
    hello.innerText ="Bye";
    
    alert("Cyaa..")
    var txt = prompt("Enter some text : ");
    para.textContent = txt;
})

var namee = document.getElementById("name");
var email = document.getElementById("email");
var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click',function(){

})
var nameValue=document.getElementById('nameText');
var emailValue=document.getElementById('emailText');


const myForm=document.getElementById('form');
myForm.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("SUBMITTED");

    console.log(namee.value);
    console.log(email.value);

    nameValue.textContent=namee.value;
    emailValue.textContent=email.value;

    alert(namee.value);
})