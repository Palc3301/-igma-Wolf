document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('cta-button');
    const idButton = document.getElementById('id-button');
  
    loginButton.addEventListener('mouseover', () => {
      loginButton.style.transform = 'scale(1.1)';
    });
  
    loginButton.addEventListener('mouseout', () => {
      loginButton.style.transform = 'scale(1)';
    });
  
    idButton.addEventListener('mouseover', () => {
      idButton.style.transform = 'scale(1.1)';
    });
  
    idButton.addEventListener('mouseout', () => {
      idButton.style.transform = 'scale(1)';
    });
  
    const divs = document.getElementsByClassName('produto');

    for (let i = 0; i < divs.length; i++) {
      const div = divs[i];
      div.addEventListener('click', () => {
        const pageNumber = i + 1;
        window.location.href = 'index3.html';
      });
    }
  });