import axios from 'axios'

export default axios.create({
    baseURL: `https://gilles-boyer.github.io/chrono/src/assets/`,
    //baseURL: `http://localhost/_HJAHW/api/`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})