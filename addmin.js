// open and close dashbboard
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//  Messages
function myAddmin() {
  var x = document.getElementById("contact");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myAddmin() {
  var x = document.getElementById("contact");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myComment() {
  var x = document.getElementById("user-comment");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
function bold() {
  document.getElementById("blogDescription").style.fontWeight = "bold";
}
function italic() {
  document.getElementById("blogDescription").style.fontStyle = "italic";
}
function left() {
  document.getElementById("blogDescription").style.textAlign = "left";
}
function center() {
  document.getElementById("blogDescription").style.textAlign = "center";
}
function right() {
  document.getElementById("blogDescription").style.textAlign = "right";
}
function upper() {
  document.getElementById("blogDescription").style.textTransform = "uppercase";
}
function lower() {
  document.getElementById("blogDescription").style.textTransform = "lowercase";
}
function capitalize() {
  document.getElementById("blogDescription").style.textTransform = "capitalize";
}
function clean() {
  document.getElementById("blogDescription").style.fontWeight = "normal";
  document.getElementById("blogDescription").style.textAlign = "left";
  document.getElementById("blogDescription").style.fontStyle = "normal";
  document.getElementById("blogDescription").style.textTransform = "capitalize";
  document.getElementById("blogDescription").value = " ";
}
async function getBlogForm() {
  let blogTitle = document.getElementById("blogTitle").value;
  let blogDescription = document.getElementById("blogDescription").value;

  let imgInput = document.getElementById("uploadImage");
  let fileContents;
  if (imgInput.files && imgInput.files[0]) {
    fileContents = await readUploadedFileAsText(imgInput.files[0]);
    console.log(fileContents)
    document.getElementById("blah").setAttribute("src", fileContents)
  }
  return {
    blogTitle,
    blogDescription,
    fileContents,
  };
}
// blog section
async function addBlog() {
  const formData = await getBlogForm();
  let articles = JSON.parse(localStorage.getItem("articles")) || [];
  articles.push({
    blogDescription: formData.blogDescription,
    blogTitle: formData.blogTitle,
    blogImage: formData.fileContents,
  });
  localStorage.setItem("articles", JSON.stringify(articles));
  document.location.reload();
}
const readUploadedFileAsText = (inputFile) => {
  const temporaryFileReader = new FileReader();

  return new Promise((resolve, reject) => {
    temporaryFileReader.onerror = () => {
      temporaryFileReader.abort();
      reject(new DOMException("Problem parsing input file."));
    };
    temporaryFileReader.onload = (e) => {
      resolve(e.target.result);
    };
    temporaryFileReader.readAsDataURL(inputFile);
  });
};
function getPageContent() {
  let articles = JSON.parse(localStorage.getItem("articles")) || [];
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    const table = document.getElementById("blogsTable");
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    cell1.innerHTML = article.blogTitle;
    cell2.innerHTML = article.blogDescription;
    // cell3.innerHTML = article.blogImag;
    cell4.innerHTML = `<input type="button" id=${i} value="Edit" class="edit" onclick="edit(this.id)">
    <input type="button" value="Delete" class="delete" id=${i} onclick="del(this.id)">`;
  }
  let value = params.blog_edit_id;
  console.log(value, value !== null);
  if (value === null) {
    localStorage.removeItem("editing_blog", true);
    const saveButton = document.getElementById("blogButton");
    saveButton.addEventListener("click", addBlog);
    saveButton.textContent = "Add Blog";
  } else {
    const saveButton = document.getElementById("blogButton");
    saveButton.addEventListener("click", saveBlogEdit);
    saveButton.textContent = "Save Blog";
    let articles = JSON.parse(localStorage.getItem("articles")) || [];
    let blog = articles[value];
    let blogTitle = document.getElementById("blogTitle");
    let blogDescription = document.getElementById("blogDescription");
     let imgInput= document.getElementById("uploadImage");
    blogTitle.setAttribute("value", blog.blogTitle);
    blogDescription.setAttribute("value", blog.blogDescription);
    uploadImage.setAttribute("value", blog.blogImage);
  }
}
function edit(id) {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set("blog_edit_id", id);
  window.location.search = urlParams;
}
async function saveBlogEdit() {
  const formData = await getBlogForm();
  let value = params.blog_edit_id;
  let articles = JSON.parse(localStorage.getItem("articles")) || [];
  articles[value].blogDescription = formData.blogDescription || articles[value].blogDescription;
  articles[value].blogTitle = formData.blogTitle || articles[value].blogTitle;
  articles[value].blogImage = formData.fileContents || articles[value].blogImage;
  localStorage.setItem("articles", JSON.stringify(articles));
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.delete("blog_edit_id");
  window.location.search = urlParams;
}
// delete button
function del(id) {
  let articles = JSON.parse(localStorage.getItem("articles")) || [];
  articles.splice(id, 1);
  localStorage.setItem("articles", JSON.stringify(articles));
  document.location.reload();
}
// messages part
let messages = JSON.parse(localStorage.getItem("messages")) || [];
for (let i = 0; i < messages.length; i++) {
  const article = messages[i];
  const contact = document.getElementById("contact");
  contact.innerHTML += `<div class="title">
    <div class="name">
      <p>${article.firstName}</p>
    </div>
    <div class="email">
      <p>${article.email}</p>
    </div>
    <div class="dates">
      <p>${article.subject}</p>
    </div>
    <div class="message">
      <p>${article.text}</p>
    </div>
  </div>
  <hr />`;
}
// comments section
let comments = JSON.parse(localStorage.getItem("comments")) || [];
for (let i = 0; i < comments.length; i++) {
  const comment = comments[i];
  let commentSection = document.getElementById("commentSection");
  console.log(commentSection);
  commentSection.innerHTML += `<p> ${comment.firstName},  ${comment.comment}</p>`;
}
// input field validation
let form=document.getElementById('form')
let tittle=document.querySelector('#blogTitle')
let description=document.querySelector('#blogDescription')
let tittlesMessage=document.getElementById('tittlesMess')
let mess=document.getElementById('mess')

form.addEventListener('submit',()=>{
  let message=[]
if(tittle.value ===''||tittle.value==null){
message.push('Name is required')
tittlesMessage.innerText=message
}else{
    return username.innerText=""
   }
 })

 form.addEventListener('submit',()=>{
  let errors=[]
if(description.value ===''||description.value==null){
errors.push('Description is required')
mess.innerText=errors
}else{
    return username.innerText=""
   }
 })