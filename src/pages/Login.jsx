import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../context'

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = event => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
      <h1>Login</h1>
      <form className='userForm' onSubmit={login}>
        <MyInput type="text" placeholder='input login' />
        <MyInput type="password" placeholder='input password' />
        <MyButton>Submit</MyButton> 
      </form>
    </div>
  )
}

export default Login