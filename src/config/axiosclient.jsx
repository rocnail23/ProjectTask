import axios from "axios"

const axiosClient = axios.create({
    baseURL: "https://projecttask.onrender.com"
})


export default axiosClient