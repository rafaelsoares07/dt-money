import axios from 'axios'

const mode = process.env.REACT_APP_API || "https://dt-money-nine-dun.vercel.app/api"

console.log(mode)


export const api = axios.create({
    baseURL: mode
})