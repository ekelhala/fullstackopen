import axios from "axios";

const BASE_URL = 'http://localhost:3001/persons'

const send = withData => axios.post(BASE_URL, withData).then(response => response.data)

const deleteContact = id => axios.delete(`${BASE_URL}/${id}`).then(response => response.data)

const update = withData => axios.put(`${BASE_URL}/${withData.id}`,withData).then(response => response.data)

export default { send, deleteContact,update }