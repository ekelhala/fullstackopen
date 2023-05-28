import axios from "axios";

const BASE_URL = 'http://localhost:3001/persons'

const send = withData => axios.post(BASE_URL, withData).then(response => response.data)

export default { send }