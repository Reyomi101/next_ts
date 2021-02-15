import axios from 'axios';
 
export const WebClient = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
});