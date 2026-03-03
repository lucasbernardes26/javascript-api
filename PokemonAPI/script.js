document.getElementById('btnEnviar').addEventListener('click', () => {
    const pokemon = document.getElementById('pokemonInput').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById('pokemonName').innerText = `${data.name} #${data.id}`;
            
            const imgUrl = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
            document.getElementById('imageContainer').innerHTML = `<img src="${imgUrl}" width="100px">`;

            document.getElementById('attack1').innerText = `ATAQUE 1: ${data.abilities[0].ability.name}`;
            document.getElementById('attack2').innerText = `ATAQUE 2: ${data.abilities[1] ? data.abilities[1].ability.name : 'N/A'}`;
        })
        .catch(erro => {
            alert("Pokémon não encontrado!");
            console.error(erro);
        });
});