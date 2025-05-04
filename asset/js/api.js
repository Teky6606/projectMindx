function getInfo_pokemon() {
    const name = document.getElementById('searchpokemon').value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('info').innerHTML = `
                <h2>${data.name.toUpperCase()}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
            `;
        })
        .catch(error => {
            document.getElementById('info').innerHTML = `
                <p>Pokémon not found.</p>
            `;
        });
}
