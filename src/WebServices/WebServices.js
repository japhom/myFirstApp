import axios from 'axios';
import WebService from './WebService';

const url = 'https://anapioficeandfire.com/api/characters';

export default {
    async postLogin({ character }) {
        const user = await WebService.post(url + '583', {
            character
        });
        return {
            user
        };
    },
    async getCharacter({ character }) {
        return await WebService.get(url + '/' + character);
    }
};
