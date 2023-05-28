import { useState } from 'react'

const Filter = (props) => 
    <div>filter <input value={props.filterText} onChange={(event) => props.setFilterText(event.target.value)}/></div>

const NewPersonForm = (props) => {

  const addNewPerson = (event) => {
    event.preventDefault()
    const newPerson = {name: props.newName, number: props.newNumber}
    if(props.persons.find(elem => elem.name === newPerson.name)){
      alert(`${props.newName} is already in phonebook!`)
    }
    else{
      props.setPersons(props.persons.concat([newPerson]))
    }
    props.setNewName('')
    props.setNewNumber('')
  }

  return(
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={props.newName} onChange={(event) => props.setNewName(event.target.value)}/>
        </div>
        <div>
          number: <input value={props.newNumber} onChange={(event) => props.setNewNumber(event.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const PersonsList = (props) => {
  const getPersonList = () => props.persons.map(person =>
    person.name.toLowerCase().includes(props.filterText) ? <p key={person.name}>{person.name} {person.number}</p> : null)

  return(<div>{getPersonList()}</div>)
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={filterText} setFilterText={setFilterText}/>
      <h3>Add new person</h3>
      <NewPersonForm newName={newName} newNumber={newNumber} persons={persons}
                     setNewName={setNewName} setNewNumber={setNewNumber} setPersons={setPersons}/>
      <h2>Contacts</h2>
      <PersonsList persons={persons} filterText={filterText}/>
    </div>
  )

}

export default App
