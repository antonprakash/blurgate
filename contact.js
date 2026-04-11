// Simple math captcha for contact form

let captchaAnswer = 0;

function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  
  let question = '';
  
  switch(operation) {
    case '+':
      captchaAnswer = num1 + num2;
      question = `What is ${num1} + ${num2}?`;
      break;
    case '-':
      captchaAnswer = num1 - num2;
      question = `What is ${num1} - ${num2}?`;
      break;
    case '*':
      captchaAnswer = num1 * num2;
      question = `What is ${num1} × ${num2}?`;
      break;
  }
  
  document.getElementById('captchaQuestion').textContent = question;
}

function validateCaptcha() {
  const userAnswer = parseInt(document.getElementById('captchaAnswer').value);
  return userAnswer === captchaAnswer;
}

document.addEventListener('DOMContentLoaded', () => {
  generateCaptcha();
  
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!validateCaptcha()) {
      alert('Incorrect captcha answer. Please try again.');
      generateCaptcha();
      document.getElementById('captchaAnswer').value = '';
      return;
    }
    
    alert('Message sent successfully!');
    document.getElementById('contactForm').reset();
    generateCaptcha();
  });
});