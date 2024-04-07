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

/**
 * Validates and cleans user input before an API call
 * Supports input in string of characters or string of numbers (id) format
 * @param {string} input - User input to be validated
 * @returns {string} Returns cleaned string if it's in valid format, otherwise returns empty (falsy) string
 */
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

/**
 * Gets pokemon type data and returns HTML template literal with the result
 * @param {Array.<Object>} types - Array of objects containing pokemon types (at least 1)
 * @returns {string} Template literal containing HTML <span> elements with pokemon types,
 * ready to be inserted into DOM
 */
const getTypes = (types) => {
    return types
        .map(item => `<span class="type ${item.type.name}">${item.type.name}</span>`)
        .join('');      
}

/**
 * Gets pokemon stats (HP, Attack, Defense, Sp. Attack, Sp. Defense, Speed) 
 * and updates table rows with the result
 * @param {Array.<Object>} stats - Array of objects containing pokemon stats
 * @returns {void} Updates DOM
 */
const updateStats = (stats) => {
    stats.forEach((item) => { 
        document.getElementById(item.stat.name).innerHTML = item.base_stat;
        statTableRowIds.add(item.stat.name); 
    });
}

/**
 * Renders pokemon data from parsed JSON and updates DOM with the result
 * @param {Object} data - Parsed JSON object containing all pokemon data to be processed
 * @returns {void} Updates DOM
 */
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

/**
 * Makes an API call to get data of user specified pokemon and renders it to the user
 * @returns {void} Passes data to helper functions to update DOM with the result (pokemon data or error)
 */
const fetchPokemonData = async () => {
    try {
        // Validate user input
        const pokemonToSearch = validateAndCleanInput(formInput.value);
        if (!pokemonToSearch) {
            alert('Please enter a valid pokémon name or id');
            clearData();
            return;
        }
        // Make API call and parse JSON data
        const response = await fetch(API_ENDPOINT + pokemonToSearch);
        const data = await response.json(); 
        // Render result      
        showPokemonData(data);
    } catch (err) {
        // Display error and clear all data
        alert('Pokémon not found');
        console.error(err);
        clearData();
    }
}

/**
 * Clears all rendered data in case of an error
 * @returns {void} Updates DOM
 */
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