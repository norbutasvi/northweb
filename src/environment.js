export function getBaseUrl() {
    let BASE_URL = '';

    if (process.env.NODE_ENV === 'development') {
        BASE_URL = 'http://localhost:5000';
    } else {
        BASE_URL = 'https://northweb-server.herokuapp.com/';
    }

    return BASE_URL;
}

export default getBaseUrl