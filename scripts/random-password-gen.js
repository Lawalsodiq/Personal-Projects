const inputElement = document.querySelector('.js-input');
const buttonElement = document.querySelector('#js-generate-button');
const alertElement = document.querySelector('.js-alert');
const copyIcon = document.querySelector('.fa-copy');

console.log(alertElement);
buttonElement.addEventListener('click', createPassword);
copyIcon.addEventListener('click', () => {
  copyPassword();

  if (inputElement.value) {
    alertElement.classList.remove('active');
    setTimeout(() => {
      alertElement.classList.add('active');
    }, 1000);
  }
});


function createPassword() {

  const characters = "0123456789abcdefghijklmnopqrstuvwxyz!#$%&'()*?@[]_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLenght = 12;

  let password = '';


  for (let i = 0; i < passwordLenght; i++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
  }

  inputElement.value = password;
  
}

function copyPassword() {
  inputElement.select();
  inputElement.setSelectionRange(0, 999);
  navigator.clipboard.writeText(inputElement.value);
}