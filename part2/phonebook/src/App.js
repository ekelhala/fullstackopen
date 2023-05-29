import { useState, useEffect } from 'react'
import phonebookService from './services/phonebook'
import { Filter, NewPersonForm, PersonsList } from './components'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    phonebookService.getAll()
          .then(personData => {
            setPersons(personData)
          })
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={filterText} setFilterText={setFilterText}/>
      <h3>Add new person</h3>
      <NewPersonForm newName={newName} newNumber={newNumber} persons={persons}
                     setNewName={setNewName} setNewNumber={setNewNumber} setPersons={setPersons}/>
      <h2>Contacts</h2>
      <PersonsList persons={persons} setPersons={setPersons} filterText={filterText}/>
    </div>
  )

}

export default App
