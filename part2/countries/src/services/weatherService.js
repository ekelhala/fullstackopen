import axios from 'axios'
import env from 'react-dotenv'

const BASE_URL = 'https://api.openweathermap.org'

const getWeather = (latitute,longitude) =>
     axios.get(`${BASE_URL}/data/2.5/weather?lat=${latitute}&lon=${longitude}&appid=${env.OPENWEATHERMAP_API_KEY}&units=metric`)
    .then(response => response.data)

export default getWeather