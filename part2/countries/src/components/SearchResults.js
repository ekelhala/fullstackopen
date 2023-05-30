import CountryInfo from "./CountryInfo"

const ResultItem = (props) => <div><p>{props.text} <button onClick={(event) => props.resultSelected(props.id)}>Show</button></p></div>

const SearchResults = (props) => {
    
    const resultSelected = (index) => {
        props.setSearchResults([props.searchResults[index]])
    }
    let showElement = null
    if(props.searchResults.length === 1) {
        showElement = <CountryInfo country={props.searchResults[0]}/>
    }
    else if(props.searchResults.length < 10) {
        showElement = props.searchResults.map((result,index) => 
                                                    <ResultItem key={index} id={index}
                                                     text={result.name.common} resultSelected={resultSelected}/>)
    }
    else {
        showElement = <p>Please input more characters</p>
    }
    return(
        <div>
            {showElement}
        </div>
    )
}

export default SearchResults