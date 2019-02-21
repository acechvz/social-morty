import axios from 'axios';

export const PATH_API = 'https://rickandmortyapi.com/api';
export const PATH_CHARACTERS = '/character';

async function getRandomCharacters(charactersIds) {
    return await axios.get(`${PATH_API}${PATH_CHARACTERS}/${charactersIds}`);
}

export {
    getRandomCharacters
}