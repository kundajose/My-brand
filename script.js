document.querySelector("#expand").addEventListener('click',openNav)

function openNav() {
    document.querySelector(".top-nav").style.width = "60%"; 
  }
  document.querySelector("#closebtn").addEventListener('click',closeNav)
function closeNav() {
  document.querySelector(".top-nav").style.removeProperty('width');
}
// contact form
let form=document.getElementById('form')
let names=document.querySelector('#name')
let email=document.querySelector('#email')
let object=document.querySelector('#object')
let text=document.getElementById('text')
let error=document.getElementById('error')
let erro=document.getElementById('erro')
let wrong=document.getElementById('wrong')
let username=document.getElementById('username')

form.addEventListener('submit',(e)=>{
  let mess=[]
if(names.value ===''||names.value==null){
mess.push('Name is required')
e.preventDefault()
username.innerText=mess
}
else if(names.value.match(/[0-9]/)){
  mess.push('Name  can not have numbers')
  e.preventDefault()
  username.innerText=mess
  }
  else if(names.value.length <=2){
    mess.push('Correct your name please.')
    e.preventDefault()
    username.innerText=mess
    }else{
    return username.innerText=""
   }
 })
function ValidateEmail()
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
  error.innerText="";
return true;
}
else if(email.value ===''||email.value==null){
  error.innerText='Email is required'
}
else
{
  error.innerText="You have entered an invalid email address!";
}
}
 form.addEventListener('submit',(e)=>{
  let message=[]
if(object.value ===''||object.value==null){
message.push('Subject is required')
e.preventDefault()
erro.innerText=message
}
else if(object.value.length <=2){
  message.push('Subject should have atleast 3 letters')
  e.preventDefault()
  erro.innerText=message
  }else{
  return erro.innerText=""
 }
 })
 form.addEventListener('submit',(e)=>{
  let messag=[]
if(text.value ===''||text.value==null){
  messag.push('Text is required')
e.preventDefault()
wrong.innerText=messag
}
else if(text.value.length <=4){
  messag.push('Message should have atleast 5 letters')
  e.preventDefault()
wrong.innerText=messag
  }else{
  return wrong.innerText=""
 }
 })
 // localstorege
document.querySelector('.send').addEventListener('click',contain)
function contain(){
  let firstN=document.querySelector('.name').value
  let firstEmail=document.querySelector('.email').value
  let firstSubject=document.querySelector('.object').value
  let firstMessage=document.querySelector('#text').value
  
  console.log(`${firstN}, ${firstEmail},${firstSubject},${firstMessage}`)
  // is there any messges? getItem?
  let messages = JSON.parse(localStorage.getItem("messages")) || []
  
  messages.push({firstName: firstN, email: firstEmail,subject: firstSubject, text: firstMessage})
  localStorage.setItem("messages", JSON.stringify(messages));
}
