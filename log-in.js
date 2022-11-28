let form=document.getElementById('form')
     let email=document.querySelector('.mails')
     let password=document.querySelector('.passwd')
     let error=document.getElementById('error')
     let erro=document.getElementById('erro')

function ValidateEmail()
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
  error.innerText="";
document.form1.text1.focus(); 
return true;
}
else if(email.value ===''||email.value==null){
  error.innerText='Email is required'
  document.form1.text1.focus(); 
}
else
{
  error.innerText="You have entered an invalid email address!";
document.form1.text1.focus();
return false;
}
}
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
}
else if(password.value !=='joseph8'){
  message.push('Please correct your password')
  e.preventDefault()
  erro.innerText=message
}else{
  return erro.innerText=""
 }
      })
   