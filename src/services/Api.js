import axios from "axios";

const Api = axios.create({
    baseURL: "http://54.94.161.165:3000"
})

export default Api;