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
          phonebookService.update(newPerson)
            .then(() => {
              props.setNotificationMessage(`Changed ${newPerson.name}'s number.`)
              props.setNotificationType('info')
              setTimeout(() => props.setNotificationMessage(null),5000)
              const removeIndex = props.persons.indexOf(checkPerson)
              const updatedPersons = props.persons.toSpliced(removeIndex,1,newPerson)
              props.setPersons(updatedPersons)
            })
            .catch((error) => {
              if(error.response.status === 404) {
                props.setNotificationMessage(`Information of ${newPerson.name} was not found from server`)
                props.setNotificationType('warning')
                setTimeout(() => props.setNotificationMessage(null),5000)
              }
            })
        }
       }
       else {
        alert(`${checkPerson.name} is already in phonebook!`)
       } 
      }
      else{
        phonebookService.send(newPerson)
          .then(() => {
            props.setNotificationMessage(`Added ${newPerson.name} to contacts.`)
            props.setNotificationType('info')
            setTimeout(() => props.setNotificationMessage(null),5000)
            props.setPersons(props.persons.concat([newPerson]))
          })
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