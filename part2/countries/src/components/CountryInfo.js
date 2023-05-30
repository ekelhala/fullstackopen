import {useEffect,useState} from 'react'
import getWeather from '../services/weatherService'
import './country_info.css'

const CountryInfo = (props) => {

    const [weather,setWeather] = useState(null)
    
    useEffect(() => {
        const latlong = props.country.capitalInfo.latlng
        getWeather(latlong[0],latlong[1])
            .then((response) => {
                setWeather(response)
            })
    },[props.country.capitalInfo.latlng])

    let languageList = []
    let currencies = []
    for(const [,language] of Object.entries(props.country.languages)) {
        languageList.push(<li key={language}>{language}</li>)
    }
    for(const [,currency] of Object.entries(props.country.currencies)) {
        currencies.push(` ${currency.name}`)
    }
    let renderWeather, renderIcon = null
    if(weather !== null) {
        renderWeather = <p>Temperature: {weather.main.temp} Celsius<br/>Wind: {weather.wind.speed} m/s<br/>{weather.weather[0].description}</p>
        renderIcon = <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='Weather icon'/>
    }
    return(
        <div className='info-container'>
            <h1>{props.country.name.common}</h1>
            <div className='basic-info-container'>
                <img className='basic-info-container-img' src={props.country.flags.png} alt="Country flag"/>
                <div>
                    <h3>Basic information</h3>
                    <ul>
                        <li><b>Population: </b>{props.country.population}</li>
                        <li><b>Area: </b>{props.country.area} sq km</li>
                        <li><b>Capital: </b>{props.country.capital[0]}</li>
                        <li>
                            <b>Languages:</b>
                            <ul className='language-list'>
                                {languageList}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='basic-info-container'>
                <div>
                    <h3>About</h3>
                    <p>{props.country.name.common} is a country located in {props.country.region}.</p><p> Its currencies are: {currencies}</p>
                </div>
                <div>
                    <h3>Weather in {props.country.capital[0]}</h3>
                    {renderWeather}
                </div>
                {renderIcon}
            </div>
        </div>
    )
}

export default CountryInfo