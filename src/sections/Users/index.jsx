import { useState, useEffect } from 'react'
import UsersList from './components/UsersList'

function UsersSection() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/JoneTheBuilder/contact')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => setUsers(data))
      .catch(error => {
        console.error('Error fetching users:', error)
        setError('Failed to load users. Please try again later.')
      })
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        {error ? (
          <p className="error-message">{error}</p>
        ) : (
          <UsersList users={users} />
        )}
      </div>
    </section>
  )
}

export default UsersSection
