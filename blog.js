
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
form.addEventListener('submit',(e)=>{
  let messag=[]
if(text.value ===''||text.value==null){
  messag.push('Text is required')
e.preventDefault()
wrong.innerText=messag
}
else if(text.value.length <=5){
  messag.push('Comments should have 5 letters')
  e.preventDefault()
  wrong.innerText=messag
  }else{
  return wrong.innerText=""
 }
 })
// localstorege
document.querySelector('#update').addEventListener('click',join)
let paragraph= document.querySelector('#paragraph')
function join(){
  let firstN=document.querySelector('#name').value
  let firstC=document.querySelector('#comment').value
  
  console.log(`${firstN}, ${firstC}`)
  // is there any comments? 
  let comments = JSON.parse(localStorage.getItem("comments")) || []
  
  comments.push({firstName: firstN, comment: firstC})
  localStorage.setItem("comments", JSON.stringify(comments));
}
function getPageContent() {
  let comments = JSON.parse(localStorage.getItem("comments")) || [];
  for (let i=0; i< comments.length; i++){
    const comment = comments[i]
    let section = document.getElementById('commentSection')
    console.log(section)
    section.innerHTML+= `<p> ${comment.firstName},  ${comment.comment}</p>`
  }
  // show blogs
  let articles = JSON.parse(localStorage.getItem("articles")) || [];
  for (let i=0; i< articles.length; i++){
    const article = articles[i]
    const blogSection = document.getElementById("blogSection");
    blogSection.innerHTML += `<div class="introduction">
  <div class="photo">
      <a href="#">
          <img src=${article.blogImage} alt=""></a>
   </div>
   <div>
      <span>${article.blogDescription}</span>
      <a href="#">  
      <p class="headline"> 
      ${article.blogTitle}  
      </p></a>
   </div>
</div>`
  }
}
// likes
clickLikes();
function clickLikes() {
  if (localStorage.clickIncrease) {
    localStorage.clickIncrease = Number(localStorage.clickIncrease)+1;
  } else {
    localStorage.clickIncrease = 1;
  }
  document.getElementById("count").innerHTML = localStorage.clickIncrease;
}
// slider
let slideIndex = [1,1];
let slideId = ["", "introduction"]
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}
function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
