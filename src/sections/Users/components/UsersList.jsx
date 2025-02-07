import UsersListItem from './UsersListItem'

function UsersList({ users }) {
  return (
    <ul className="users-list">
      {users.map((user) => (
        <UsersListItem key={user.id} user={user} />
      ))}
    </ul>
  )
}

export default UsersList
