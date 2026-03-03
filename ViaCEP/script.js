const inputCep = document.querySelector('#input-cep');
const searchBt = document.querySelector('#button-search');
const clearBt = document.querySelector('#button-clear');

const campoCep = document.querySelector('#info-cep');
const campoLogradouro = document.querySelector('#info-logadouro');
const campoBairro = document.querySelector('#info-bairro');
const campoCidade = document.querySelector('#info-cidade');
const campoEstado = document.querySelector('#info-estado');

function verificar_cep(valor) {
    const cepLimpo = valor.replace(/\D/g, '');
    return cepLimpo.length === 8; // 
}

async function buscarCep() {
    const valor = inputCep.value;

    if (!verificar_cep(valor)) {
        alert("Digite um CEP válido!");
        return;
    }

    try {
        
        const response = await fetch(`https://viacep.com.br/ws/${valor}/json/`);
        const dados = await response.json(); 

        if (dados.erro) {
            alert("CEP não encontrado!");
            return;
        }
        campoCep.innerText = `Cep: ${dados.cep}`;
        campoLogradouro.innerText = `Logradouro: ${dados.logradouro}`;
        campoBairro.innerText = `Bairro: ${dados.bairro}`;
        campoCidade.innerText = `Cidade: ${dados.localidade}`;
        campoEstado.innerText = `Estado: ${dados.uf}`;

    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}


clearBt.addEventListener('click', () => {
    inputCep.value = '';
    [campoCep, campoLogradouro, campoBairro, campoCidade, campoEstado].forEach(p => p.innerText = p.id.replace('info-', '') + ': ');
});


searchBt.addEventListener('click', buscarCep);