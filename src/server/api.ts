import axios from 'axios'

const api = axios.create({
  baseURL: process.env.HYPERLLNIK,
})

export default api
