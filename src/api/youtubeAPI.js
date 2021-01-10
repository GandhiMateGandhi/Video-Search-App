import axios from 'axios';

const KEY = 'AIzaSyBVXbYp-TIyELAYJZKdLbuwb92P0KLE5D8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    },
    headers: {

        }
})