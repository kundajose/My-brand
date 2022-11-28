
  let form=document.getElementById('form')
let names=document.querySelector('#name')
let text=document.getElementById('comment')
let wrong=document.getElementById('wrong')
let username=document.getElementById('username')

form.addEventListener('submit',(e)=>{
  let mess=[]
if(names.value ===''||names.value==null){
mess.push('Name is required')
e.preventDefault()
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
  let messag=[]
if(text.value ===''||text.value==null){
  messag.push('Text is required')
e.preventDefault()
wrong.innerText=messag
}else{
  return wrong.innerText="correct"
 }
 })
