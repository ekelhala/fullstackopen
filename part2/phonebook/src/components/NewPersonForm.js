import phonebookService from "../services/phonebook"

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

  export default NewPersonForm