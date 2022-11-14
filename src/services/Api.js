import axios from "axios";

const Api = axios.create({
    baseURL: "http://52.67.18.252:3000"
})

export default Api;