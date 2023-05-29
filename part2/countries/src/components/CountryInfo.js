import './country_info.css'

const CountryInfo = (props) => {
    if(props.country === null)
        return null
    let languageList = []
    let currencies = []
    for(const [,language] of Object.entries(props.country.languages)) {
        languageList.push(<li key={language}>{language}</li>)
    }
    for(const [,currency] of Object.entries(props.country.currencies)) {
        currencies.push(currency.name)
    }
    const timezones = props.country.timezones.map(tz => ` ${tz}`)
    return(
        <div className='info-container'>
            <h1>{props.country.name.common}</h1>
            <div className='basic-info-container'>
                <img src={props.country.flags.png} alt="Country flag"/>
                <div>
                    <h3>Basic information</h3>
                    <ul>
                        <li key={1}><b>Population: </b>{props.country.population}</li>
                        <li key={2}><b>Area: </b>{props.country.area} sq km</li>
                        <li key={3}><b>Capital: </b>{props.country.capital[0]}</li>
                        <li key={4}>
                            <b>Languages:</b>
                            <ul className='language-list'>
                                {languageList}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h3>About</h3>
                <p>{props.country.name.common} is a country located in {props.country.region}. Its currencies are: {currencies}</p>
                <p>Timezones used in the country are:{timezones.toString()}</p>
            </div>
        </div>
    )
}

export default CountryInfo