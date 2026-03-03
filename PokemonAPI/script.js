const inputPoke = document.querySelector('#input-poke');
const btnPoke = document.querySelector('#btn-poke');

async function buscarPokemon() {
    const busca = inputPoke.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${busca}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        document.querySelector('#poke-nome').innerText = `${data.name} #${data.id}`;
        const imgAnimada = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        document.querySelector('#poke-img').src = imgAnimada;
        document.querySelector('#poke-ataque1').innerText = `ATAQUE 1: ${data.moves[0].move.name.toUpperCase()}`;
        document.querySelector('#poke-ataque2').innerText = `ATAQUE 2: ${data.moves[1].move.name.toUpperCase()}`;

    } catch (error) {
        alert("Pokémon não encontrado!");
    }
}

btnPoke.addEventListener('click', buscarPokemon);
