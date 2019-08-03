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
    },

    async getWheater({ cityId }) {
        const ur = 'http://api.openweathermap.org/data/2.5/weather?id=';
        return await WebService.get(ur + cityId+'&appid=d0b76fd83718eef1932b224506cfb48f');
    }
};
