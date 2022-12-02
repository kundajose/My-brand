let form=document.getElementById('form')
     let email=document.querySelector('.mails')
     let password=document.querySelector('.passwd')
     let error=document.getElementById('error')
     let erro=document.getElementById('erro')
      form.addEventListener('submit',(e)=>{
        let messages=[]
if(email.value ===''||email.value==null){
  messages.push('Email is required')
  e.preventDefault()
  error.innerText=messages
}else
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
}
else
if(email.value !=='iradukundajose8@gmail.com'){
  messages.push('You are not addmin ask a help please')
  e.preventDefault()
  error.innerText=messages
}else{
  return error.innerText="Correct"
 }
      })
     
      form.addEventListener('submit',(e)=>{
        let message=[]
        if(password.value ===''||password.value==null){
  message.push('Password is required')
  e.preventDefault()
  erro.innerText=message
}else if(password.value.length <=6){
  message.push('Password must be greatter than 6 characters')
  e.preventDefault()
  erro.innerText=message
}else if(password.value.length >=20){
  message.push('Password must be under 20 charaacters')
  e.preventDefault()
  erro.innerText=message
}else if(password.value=='password'){
  message.push('Password can not be password')
  e.preventDefault()
  erro.innerText=message
}
else if(password.value !=='joseph8'){
  message.push('You are not addmin')
  e.preventDefault()
  erro.innerText=message
}else{
  return erro.innerText="Correct"
 }
      })
   