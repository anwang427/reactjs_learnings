// helper functions for the unsplash api

import axios from 'axios'; // 3rd party imports by convention are above internal imports

export default axios.create({ // creates instance of axios customized to a specific url
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID AvUM05Kut6s6uj820wEbbrbgaSEKpunvOCxf-em3tZg'
    }
});

