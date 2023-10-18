// Code to handle generating keyword, storing it, and clearing blur

document.getElementById("keyword").onclick = function(){
    alert("Clearing blur filter");
    
    document.querySelectorAll('.blurred').forEach(function(element) {
      element.style.filter = 'none'; 
    });
  }

  // Generate a random keyword
function generateKeyword() {

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let keyword = '';
  
    for(let i = 0; i < 6; i++) {
      keyword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return keyword;
  }
  
  // Display the keyword 
  document.addEventListener('DOMContentLoaded', () => {
  
    const keyword = generateKeyword();
  
    document.getElementById('keyword').textContent = keyword;
  
  });