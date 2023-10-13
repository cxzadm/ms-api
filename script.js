const fetchCharacter = async (characterId) => {
    try {
        const response = await fetch(`https://swapi.dev/api/people/${characterId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error al obtener datos para el personaje ${characterId}: ${error.message}`);
    }
};

const displayCharacterInfo = async (characterId) => {
    const character = await fetchCharacter(characterId);
    if (character) {
        const characterList = document.getElementById('characterList');
        const characterCard = document.createElement('div');
        characterCard.className = 'characterCard';
        characterCard.innerHTML = `
            <h2>ID del personaje: ${character.id}</h2>
            <p>Nombre del personaje: ${character.name}</p>
        `;
        characterList.appendChild(characterCard);
    }
};

const fetchAndDisplayCharacters = () => {
    for (let i = 1; i <= 80; i++) {
        displayCharacterInfo(i);
    }
};

fetchAndDisplayCharacters();
