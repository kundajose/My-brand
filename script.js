document.querySelector("#expand").addEventListener('click',openNav)

function openNav() {
    document.querySelector(".top-nav").style.width = "60%"; 
  }
  
  document.querySelector("#closebtn").addEventListener('click',closeNav)
function closeNav() {
  document.querySelector(".top-nav").style.removeProperty('width');
}
