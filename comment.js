document.querySelector('#update').addEventListener('click',join)

let names= document.querySelector('p')
function join(){
  let firstN=document.querySelector('#name').value
  let firstD=document.querySelector('#date').value
  let firstC=document.querySelector('#comment').value
  names.innerHTML +=  ` <br>${firstN}, ${firstD} , ${firstC} ,</br>`
}

document.querySelector('#likes').addEventListener('click',find)
const answer=document.querySelector('span');

let count=0
answer.innerHTML=count

function find(){
  if(count>=0){
   count++
  }
  answer.innerHTML=count
}

