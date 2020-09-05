import axios from 'axios';

const KEY = 'AIzaSyD1jySFSIoYhzWiH_u_CwF9pPZl0xPARUs'

export default axios.create({ // creates instance of axios customized to a specific url
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY // authorization   
    }
});