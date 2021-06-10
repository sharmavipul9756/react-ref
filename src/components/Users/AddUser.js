import Card from '../UI/Card'
import React, {useState, useRef} from 'react'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import classes from './AddUser.module.css'
import Wrapper from '../Helpers/Wrapper'

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

   const [enteredUsername, setEnteredUsername] = useState('')
   const [enteredAge, setEnteredAge]  = useState('')
   const [error, setError] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault()
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({title: 'Invalid input', message: 'Please enter the username and age correctly'})
            return;
        }
        if(+enteredAge < 1) {
            setError({title: 'Invalid age', message: 'Please enter the valid age (>0)'})
            return;
        }
        props.onAddUser(enteredUsername, enteredAge)
        // console.log(enteredUsername, enteredAge);
        
        setEnteredUsername('');
        setEnteredAge('')
    }

    const userNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    const errorHandler = () => {
        setError(null)
    }
    return (
        <Wrapper>
            {error &&  (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />)}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="userName">Username</label>
                <input type="text"
                 id="userName"
                  value={enteredUsername} 
                  onChange={userNameChangeHandler} 
                  ref={nameInputRef}
                  
                  />
                <label htmlFor="age">Age (in years)</label>
                <input type="number"
                 id="age" 
                 value={enteredAge} 
                 onChange={ageChangeHandler} 
                 ref={ageInputRef}
                 />
                <Button type="submit">Add User</Button>
                </form>
        </Card>
        </Wrapper>
    )
}

export default AddUser
