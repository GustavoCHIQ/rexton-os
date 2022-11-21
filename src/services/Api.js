import axios from "axios";

const Api = axios.create({
    baseURL: "http://18.228.116.44:3000"
})

export default Api;