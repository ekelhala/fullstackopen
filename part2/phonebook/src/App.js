import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addNewName = (event) => {
    event.preventDefault()
    const newPerson = {name: newName}
    if(persons.find(elem => elem.name === newPerson.name)){
      alert(`${newName} is already in phonebook!`)
    }
    else{
      setPersons(persons.concat([newPerson]))
    }
    setNewName('')
  }
  const numbers = persons.map(person => <p key={person.name}>{person.name}</p>)
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {numbers}
    </div>
  )

}

export default App
