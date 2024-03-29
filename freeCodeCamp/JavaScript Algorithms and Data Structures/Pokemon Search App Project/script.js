const form = document.getElementById('form');
const formInput= document.getElementById('search-input');
const nameSpan = document.getElementById('pokemon-name');
const idSpan = document.getElementById('pokemon-id');
const weightSpan = document.getElementById('weight');
const heightSpan = document.getElementById('height');
const spriteDiv = document.getElementById('sprite-container');
const typesDiv = document.getElementById('types');
const statTableRowIds = new Set();

const API_ENDPOINT = ' https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/';

const validateAndCleanInput = (input) => {
    const cleanedInp = input
        .replace(/[^\w\s\-]/g, '')
        .toLowerCase();
    const nameFormat = /^[a-z\-]+$/;
    const idFormat = /^[0-9]+$/;

    return nameFormat.test(cleanedInp) || ( idFormat.test(cleanedInp) && cleanedInp.length < 6 )
        ? cleanedInp
        : '';
}

const getTypes = (types) => {
    return types
        .map(item => `<span class="type ${item.type.name}">${item.type.name}</span>`)
        .join('');      
}

const updateStats = (stats) => {
    stats.forEach((item) => { 
        document.getElementById(item.stat.name).innerHTML = item.base_stat;
        statTableRowIds.add(item.stat.name); 
    });
}

const showPokemonData = (data) => {
    const { sprites, stats, types } = data;
    nameSpan.textContent = data.name.toUpperCase();
    idSpan.textContent = `#${data.id}`;
    weightSpan.textContent = `Weight: ${data.weight}`;
    heightSpan.textContent = `Height: ${data.height}`;
    spriteDiv.innerHTML = `<img id="sprite" src="${sprites.front_default}" alt="${data.name} front default sprite">`;
    typesDiv.innerHTML = getTypes(types);  
    updateStats(stats);
}

const fetchPokemonData = async () => {
    try {
        const pokemonToSearch = validateAndCleanInput(formInput.value);
        if (!pokemonToSearch) {
            alert('Please enter a valid pokémon name or id');
            clearData();
            return;
        }
        const response = await fetch(API_ENDPOINT + pokemonToSearch);
        const data = await response.json();       
        showPokemonData(data);
    } catch (err) {
        alert('Pokémon not found');
        console.error(err);
        clearData();
    }
}

const clearData = () => {
    nameSpan.textContent = '';
    idSpan.textContent = '';
    weightSpan.textContent = '';
    heightSpan.textContent = '';

    const pokemonSprite = document.getElementById('sprite');
    if (pokemonSprite) {
        pokemonSprite.remove();
    }
    const typeSpans = [...typesDiv.children];
    if (typeSpans) {
        typeSpans.forEach(span => { span.remove() });
    }

    statTableRowIds.forEach(stat => { document.getElementById(stat).textContent = '' });    
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchPokemonData();
});