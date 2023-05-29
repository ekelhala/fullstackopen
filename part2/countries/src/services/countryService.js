import axios from 'axios'

const BASE_URL = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => axios.get(`${BASE_URL}/all`).then(response => response.data)

export default {getAll}