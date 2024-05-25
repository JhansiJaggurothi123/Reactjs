import React, { useState } from 'react'
import './App.css' 
const App = () => {
  const [data,setData]= useState({
    username : '',
    password : ''
  });
  const {username,password} =data;
  const changeHandler = e =>{
    setData ({...data,[e.target.name]:[e.target.value]})
  }
  const submithandler = e =>{
    e.preventDefault()
    console.log(data);
  }
  return (
    <body>
    <div className="container">
      <center>
        <h1 className='title'>Login form</h1>
      <form  onSubmit={submithandler}>
        <div className='form-group'>
      <label><b>Username  :</b></label>
      <input className="input-field"type="text " name='username' value={username} onChange={changeHandler}/><br/>
      </div>
      <div className='form-group'>
      <label><b>Password  :</b></label>
      <input className='input-field'type="password"  name='password' value={password} onChange={changeHandler}/><br/>
      <button className='submit-btn'type="submit">Login</button>
      </div>
      </form>
      </center>
    </div>
     </body>
  )
}

export default App
