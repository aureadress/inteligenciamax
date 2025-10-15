// Mostrar/Ocultar senha
const showPasswordBtn = document.querySelector('.show-password');
const passwordInput = document.getElementById('senha');

showPasswordBtn.addEventListener('click', function() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});

// Processar login (quando tiver backend)
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = loginForm.querySelector('input[type="email"]').value;
  const senha = passwordInput.value;
  
  // Aqui vai a conexão com o backend depois
  console.log('Email:', email);
  console.log('Senha:', senha);
  
  alert('Login em desenvolvimento!');
});
