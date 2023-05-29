import phonebookService from "../services/phonebook"

const PersonsList = (props) => {

    const deletePerson = (id) => {
        const thePerson = props.persons.find(elem => elem.id === id)
      if(window.confirm(`Delete ${thePerson.name}?`)) {
        phonebookService.deleteContact(id)
            .then(() => {
                props.setNotificationMessage(`Deleted ${thePerson.name}`)
                props.setNotificationType('info')
                setTimeout(() => props.setNotificationMessage(null), 5000)
                const index = props.persons.findIndex(elem => elem.id === id)
                const newPersons = props.persons.toSpliced(index,1)
                props.setPersons(newPersons)
            })
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

  export default PersonsList