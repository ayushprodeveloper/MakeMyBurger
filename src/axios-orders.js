import axios from 'axios';


const instance = axios.create({
    baseURL:'https://burger-app-58f6d.firebaseio.com/'
});

export default instance;