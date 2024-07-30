import React, { useState } from 'react'

const Registration = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegistered, setIsRegistered] = useState(false)
    const [isloggedIn, setIsloggedIn] = useState(false)
    const [users, setusers] = useState([])

    const handleauthentication=()=>{
        if(isRegistered){
      const user= users.find((u)=> u.email===email && u.password===password)
      if(user){
        setIsloggedIn(true)
      }else{
        alert("invalid credentials")
      }
        }
        else{
            const newuser= {email,password}
            setusers([...users, newuser])
            localStorage.setItem('users', JSON.stringify([...users,newuser]))
            setIsloggedIn(true)
        }
    }
    const handlelogout=()=>{

        setIsloggedIn(false)

    }

  return (
<div>
{isloggedIn?(<div><h2>Welcome {email}</h2> <button onClick={handlelogout}>Log out</button></div>)

:
        (<div>
        <h2>{isRegistered? 'Login': 'Register'}</h2>
        <form action="">
            <input type="email" name="" id="" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" name="" id="" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleauthentication}>{isRegistered? 'Login': 'Register'}</button>
        </form>

        <p>{isRegistered? 'Dont have an account? Register now': 'Already have an account? Login'}</p>
        <button onClick={()=>setIsRegistered(!isRegistered)}>{ isRegistered? 'Register' : 'Login'}</button>
  

</div>)}
</div>
  )
}

export default Registration