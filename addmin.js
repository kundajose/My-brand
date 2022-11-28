document.querySelector('#update').addEventListener('click',join)

let names= document.querySelector('li')

let data= document.querySelector('td')

function join(){
  let firstN=document.querySelector('#name').value
  names.innerHTML +=firstN

}
// open and close dashbboard
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
  document.getElementById("main").style.marginLeft= "0";
}