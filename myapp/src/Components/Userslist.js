import React, { useState } from 'react'
import styles from './UsersList.css'


const validates = (usersInfo) => {
const errors = {}

if(!usersInfo.firstName){
    errors.firstName = 'Firstname is required'
}else if (usersInfo.firstName.length < 4){
    errors.firstName = 'Firstname must be more then 4 letters'
}if (!usersInfo.lastName){
    errors.lastName = 'Lastname is required'
}else if (usersInfo.lastName.length < 4){
    errors.lastName = 'Lastname must be more then 4 letters'
}if (!usersInfo.email.includes('@')){
    errors.email = 'Email is required'
}if (!usersInfo.age){
    errors.age = 'Age is required'
} else if (usersInfo.age<18){
    errors.age = "You must be more then 18 years old"
}

return errors
}

export default function Userslist() {
    const [users, setUsers]=useState([]);
    const [usersInfo, setUsersInfo]=useState({firstName:'', lastName:'', email:'', age:'', sex:''});
    const [formErrors, setFormErrors]= useState({})
  
    
    function save(event){
        event.preventDefault();
        setUsers((prevUsers) => ([...prevUsers, {...usersInfo}]));
        setFormErrors(validates(formErrors))
    }


    const onformChange = (event) => {
        console.log(event, "value", event.target.value)
        const {name, value} = event.target
        setUsersInfo((prevState) =>({
            ...prevState,
            [name]: value,
         
        }))
    
   }


  return (
    <>
    <form onSubmit={save}>
    Name:<input value= {usersInfo.firstName} name='firstName'onChange={onformChange}/>
    LastName:<input value= {usersInfo.lastName} name='lastName'onChange={onformChange}/>
    Mail:<input value={usersInfo.email} name= 'email'onChange={onformChange}/> 
    Age:<input value={usersInfo.age} name='age' onChange= {onformChange}/>
    Sex: <select value={usersInfo.sex} name= 'sex' onChange={onformChange}>
        <option value='male'> Male </option>
        <option value='female'> Female </option>
        </select>
    </form>

    <button onClick= {save}>Save</button>
   {console.log(users)}
    </>
  )
}
