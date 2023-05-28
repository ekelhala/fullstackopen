import { useState } from 'react'

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

  const addNewPerson = (event) => {
    event.preventDefault()
    const newPerson = {name: newName, number: newNumber}
    if(persons.find(elem => elem.name === newPerson.name)){
      alert(`${newName} is already in phonebook!`)
    }
    else{
      setPersons(persons.concat([newPerson]))
    }
    setNewName('')
    setNewNumber('')
  }

  const getPersonList = () => {
    return persons.map(person => {
      if(person.name.toLowerCase().includes(filterText))
        return <p key={person.name}>{person.name} {person.number}</p>
      return null
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter <input value={filterText} onChange={(event) => setFilterText(event.target.value)}/>
      </div>
      <form onSubmit={addNewPerson}>
        <h3>Add new person</h3>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Contacts</h2>
      {getPersonList()}
    </div>
  )

}

export default App
