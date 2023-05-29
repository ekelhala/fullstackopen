const SearchBar = (props) => {
    return(
        <div>
            <input onChange={(event) => props.searchTermChanged(event.target.value)} value={props.searchText}/>
        </div>
    )
}

export default SearchBar