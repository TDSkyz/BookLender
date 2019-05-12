import axios from 'axios';

var axiosInstance = axios.create({
  baseURL: process.env.PUBLIC_URL + '/api' || 'http://localhost:8080/api/',
});


export default axiosInstance