import { useState, useEffect } from 'react'
import axios from 'axios'

import phonebookService from './services/phonebook'

const Filter = (props) => 
    <div>filter <input value={props.filterText} onChange={(event) => props.setFilterText(event.target.value)}/></div>

const NewPersonForm = (props) => {

  const addNewPerson = (event) => {
    event.preventDefault()
    const newPerson = {name: props.newName, number: props.newNumber}
    const checkPerson = props.persons.find(person => person.name === newPerson.name)
    if(checkPerson){
     if(checkPerson.number !== newPerson.number) {
      if(window.confirm(`${checkPerson.name} is already in phonebook, do you want to replace the old number with a new one?`)) {
        newPerson.id = checkPerson.id
        const removeIndex = props.persons.indexOf(checkPerson)
        const updatedPersons = props.persons.toSpliced(removeIndex,1,newPerson)
        props.setPersons(updatedPersons)
        phonebookService.update(newPerson)
      }
     }
     else {
      alert(`${checkPerson.name} is already in phonebook!`)
     } 
    }
    else{
      props.setPersons(props.persons.concat([newPerson]))
      phonebookService.send(newPerson)
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

  const deletePerson = (id) => {
    if(window.confirm(`Delete ${props.persons.find(elem => elem.id === id).name}?`)) {
      const index = props.persons.findIndex(elem => elem.id === id)
      const newPersons = props.persons.toSpliced(index,1)
      props.setPersons(newPersons)
      phonebookService.deleteContact(id)
    }
  }

  const getPersonList = () => props.persons.map(person => {
    if(person.name.toLowerCase().includes(props.filterText)) 
      return(
      <div key={person.name}> 
        <p>{person.name} {person.number} <button onClick={() => deletePerson(person.id)}>Delete</button></p>
      </div>
      )
    return null})

  return(<div>{getPersonList()}</div>)
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
          .then(response => {
            setPersons(response.data)
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
