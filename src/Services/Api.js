import axios from "axios";

const Api = axios.create({
    baseURL: "http://52.67.177.136:3000"
})

export default Api;