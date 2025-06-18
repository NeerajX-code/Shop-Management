import axios from 'axios'

const instance = axios.create({
    baseURL : "https://wholesale-backend-cnfg.onrender.com/"
})
export default instance;