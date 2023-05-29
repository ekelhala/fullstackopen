import { useState, useEffect } from 'react'
import phonebookService from './services/phonebook'
import { Filter, NewPersonForm, Notification, PersonsList } from './components'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  // Notification type changes the color of message, can be 'warning' or 'info'
  const [notificationType, setNotificationType] = useState('warning')

  useEffect(() => {
    phonebookService.getAll()
          .then(personData => {
            setPersons(personData)
          })
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} type={notificationType}/>
      <Filter filterText={filterText} setFilterText={setFilterText}/>
      <h3>Add new person</h3>
      <NewPersonForm newName={newName} newNumber={newNumber} persons={persons}
                     setNewName={setNewName} setNewNumber={setNewNumber} setPersons={setPersons}
                     setNotificationMessage={setNotificationMessage} setNotificationType={setNotificationType}/>
      <h2>Contacts</h2>
      <PersonsList persons={persons} setPersons={setPersons} filterText={filterText}
                    setNotificationMessage={setNotificationMessage} setNotificationType={setNotificationType}/>
    </div>
  )

}

export default App
