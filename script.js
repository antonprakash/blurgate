// Code to handle the Matrix story interaction

document.getElementById("keyword").onclick = function(){
    // Create matrix effect
    const button = this;
    button.textContent = "ENTERING...";
    button.style.background = "linear-gradient(45deg, #00ff41, #008f11)";
    
    // Simulate loading
    setTimeout(() => {
        button.textContent = "WELCOME TO THE MATRIX";
        
        // Add matrix rain effect to body
        document.body.style.background = "#000";
        
        // Create falling matrix characters
        createMatrixRain();
        
        // Show success message
        setTimeout(() => {
            alert("You have successfully entered the Web Matrix. Your consciousness is now part of the digital realm. There is no going back...");
        }, 2000);
        
    }, 1500);
}

// Create matrix rain effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.3';
    
    document.body.appendChild(canvas);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for(let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px arial';
        
        for(let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 35);
}

// Generate a random access code (keeping original functionality)
function generateKeyword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let keyword = '';
  
    for(let i = 0; i < 6; i++) {
        keyword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return keyword;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Add typing effect to title
    const title = document.querySelector('.matrix-title');
    const titleText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < titleText.length) {
            title.textContent += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 500);
});