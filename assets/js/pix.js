function copyPixKey() {
    const pixKey = document.getElementById('pix-key').innerText;
    navigator.clipboard.writeText(pixKey).then(() => {
      document.getElementById('copied-message').style.display = 'block';
    }).catch(err => {
      console.error('Erro ao copiar chave PIX: ', err);
    });
  }
  