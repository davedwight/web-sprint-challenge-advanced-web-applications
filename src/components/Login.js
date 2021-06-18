import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from './../helpers/axiosWithAuth';

const initialValues = {
  credentials: {
    username: 'Lambda',
    password: 'School'
  }
};

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory();

  const [state, setState] = useState(initialValues);
  const [error, setError] = useState("")
  //replace with error state

  const handleChange = (e) => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.setIsAuth(true);
        history.push('/bubbles');
      })
      .catch(err => {
        setError(err.message);
      })
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Username:
          <input
            name='username'
            id='username'
            type='text'
            value={state.credentials.username}
            onChange={handleChange}
          />
        </label>
        <label>Password:
          <input 
            name='password'
            id='password'
            type='password'
            value={state.credentials.password}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.