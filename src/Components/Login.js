import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
        
         <Link to={'/users'}>users</Link>
         <Link to={'/cats'}>cats</Link>
         <Link to={'/redirect'}>redirect</Link>
         <Link to={'/post'}>post</Link>

    </div>
  )
}

export default Login