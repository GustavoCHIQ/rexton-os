// consultar api

import axios from 'react-native-axios'

const Api = axios.create({
  baseURL: 'http://18.228.192.34:3000/',
  timeout: 10000,
});

export default Api;