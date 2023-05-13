import axios from 'axios'

export default axios.create({
    baseURL: `http://api.chrono.circuit-felix-guichard.com/api/`,
    //baseURL: `http://localhost/_HJAHW/api/`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})