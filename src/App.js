import React, {useState} from 'react';
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([])
  const addUserHandler = (username, age) => {
    setUsersList((prev)=>{
      return [...prev, {name: username, age: age}]
    })
  }
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </React.Fragment>
  );
}

export default App;
