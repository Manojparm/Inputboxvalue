const inputbox=document.getElementById("my-input");
const submit=document.getElementById("btn");
const para=document.getElementById("new-para");

submit.addEventListener('click',function(){
    let myText=inputbox.value;
    para.innerText=myText;
    
})
