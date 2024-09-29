var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signup')
var btnColor = document.querySelector('.btnColor')

document.querySelector('#btnSignin')
  .addEventListener('click', () => {
    btnColor.style.left = "0px"
})

document.querySelector('#btnSignup')
  .addEventListener('click', () => {
    btnColor.style.left = "110px"
})



document.addEventListener("DOMContentLoaded", function () {
  const btnSignin = document.getElementById("btnSignin");
  const btnSignup = document.getElementById("btnSignup");
  const signinForm = document.getElementById("signin");
  const signupForm = document.getElementById("signup");

  // Função para mostrar o formulário de débito e ocultar o de crédito
  btnSignin.addEventListener("click", function () {
      signinForm.style.display = "block";
      signupForm.style.display = "none";
      btnSignin.classList.add("active");
      btnSignup.classList.remove("active");
  });

  // Função para mostrar o formulário de crédito e ocultar o de débito
  btnSignup.addEventListener("click", function () {
      signupForm.style.display = "block";
      signinForm.style.display = "none";
      btnSignup.classList.add("active");
      btnSignin.classList.remove("active");
  });

  // Validação antes do envio do formulário de débito
  signinForm.addEventListener("submit", function (event) {
      if (!validateForm(signinForm)) {
          event.preventDefault(); // Impede o envio do formulário se a validação falhar
          alert("Por favor, preencha todos os campos corretamente.");
      }
  });

  // Validação antes do envio do formulário de crédito
  signupForm.addEventListener("submit", function (event) {
      if (!validateForm(signupForm)) {
          event.preventDefault(); // Impede o envio do formulário se a validação falhar
          alert("Por favor, preencha todos os campos corretamente.");
      }
  });

  // Função de validação para garantir que todos os campos sejam preenchidos
  function validateForm(form) {
      const inputs = form.querySelectorAll(".input");
      let valid = true;

      inputs.forEach(function (input) {
          if (!input.value.trim()) {
              valid = false; // Se algum campo estiver vazio, a validação falha
              input.classList.add("error"); // Adiciona uma classe de erro (opcional)
          } else {
              input.classList.remove("error"); // Remove a classe de erro se o campo estiver preenchido
          }
      });

      return valid; // Retorna true se todos os campos estiverem preenchidos
  }
});


// Redirecionar ao enviar o formulário de Sign in
formSignin.addEventListener('submit', (event) => {
  event.preventDefault();  // Evitar o envio do formulário, se necessário
  window.location.href = 'pagar.html';  // Redirecionar para index2.html
});

// Redirecionar ao enviar o formulário de Sign up
formSignup.addEventListener('submit', (event) => {
  event.preventDefault();  // Evitar o envio do formulário, se necessário
  window.location.href = 'pagar.html';  // Redirecionar para index2.html
});