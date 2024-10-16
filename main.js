document.getElementById('form-inscrição').addEventListener('submit', function(event) {
   event.preventDefault(); // Evita o envio e do formulário e o carregamento da página

   // Captura as idades do formulário
   const idadeMaePAi = parseInt(event.target.idadeMaePai.value);
   const idadeUsuario = parseInt(event.target.idadeUsuario.value);

   // Seleciona as mensagens
   const successMessage = document.querySelector('.success-message');
   const errorMessage = document.querySelector('.error-message');

   // Limpa as mensagens anteriores
   successMessage.style.display = 'none';
   errorMessage.style.display = 'none';

   // Verifica se a idade dos pais é maior do que a do usuário
   if (idadeMaePAi > idadeUsuario) {
      successMessage.textContent = 'Você é mais jovem que sua mãe ou seu pai.';
      successMessage.style.display = 'block';
   } else if (idadeMaePAi <= idadeUsuario) {
      errorMessage.textContent= 'Você é mais velho ou tem a mesma iadde que sua mãe ou seu pai!';
      errorMessage.style.display = 'block';
   }
});
