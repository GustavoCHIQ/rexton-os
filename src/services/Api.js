import axios from "axios";

const Api = axios.create({
    baseURL: "http://18.230.21.177:3000"
})

export default Api;