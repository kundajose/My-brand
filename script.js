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
let names=document.querySelector('.name')
let email=document.querySelector('.email')
let object=document.querySelector('.object')
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
else if(names.value.match(/[/\d/]/)){
  mess.push('Name  can not have numbers')
  e.preventDefault()
  username.innerText=mess
  }else{
    return username.innerText="correct"
   }
 })
 form.addEventListener('submit',(e)=>{
   let messages=[]
if(email.value ===''||email.value==null){
messages.push('Names is required')
e.preventDefault()
error.innerText=messages
}
else
if(email.value.indexOf('@') <=0){
  messages.push('Email must have @')
  e.preventDefault()
  error.innerText=messages
}
else
if(email.value.endsWith('.com') <=0){
  messages.push('Email must end with .com')
  e.preventDefault()
  error.innerText=messages
}else{
  return error.innerText="correct"
 }
 })
 form.addEventListener('submit',(e)=>{
  let message=[]
if(object.value ===''||object.value==null){
message.push('Subject is required')
e.preventDefault()
erro.innerText=message
}else{
  return erro.innerText="correct"
 }
 })
 form.addEventListener('submit',(e)=>{
  let messag=[]
if(text.value ===''||text.value==null){
  messag.push('Text is required')
e.preventDefault()
wrong.innerText=messag
}else{
  return wrong.innerText="correct"
 }
 })