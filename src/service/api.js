import axios from 'axios'

export default axios.create({
    //baseURL: `http://81.248.203.26:8080/_HJAHW/api/`,
    baseURL: `http://192.168.1.16/_HJAHW/api/`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})