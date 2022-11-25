// const { Result } = require("postcss");
// const { json } = require("stream/consumers");

const buttonCep = document.querySelector('#button-cep')
const formCep = document.querySelector('#insira-cep')
const jogaCep = document.querySelector('#cep-encontrado')

buttonCep.addEventListener('click', handleClick);

async function handleClick() {
  const cep = formCep.value;

  try {
    const response = await fetch (`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    jogaCep.innerHTML = JSON.stringify(data);
    return data;
  } catch (error) {
    jogaCep.innerHTML = `(erro: ${error.message}), Insira um CEP Válido!`
  }
}