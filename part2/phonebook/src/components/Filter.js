const Filter = (props) => 
    <div>filter <input value={props.filterText} onChange={(event) => props.setFilterText(event.target.value)}/></div>

    export default Filter