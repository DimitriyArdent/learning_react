import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { UserContext } from './context/context'
import { useContext } from 'react'

export default function Header() {
  const {user ,setUser} = useContext(UserContext)

  return (
    <div>
             <div style={{backgroundColor:'orange', height:'50px'}}>Header
             <div>{`hello ${user.username}`}</div>

            <div style={{display:'flex', justifyContent:'space-around'}}>
                <Link to={'/array'}>array component</Link>
                <Link to={'/words'}>words</Link>
                <Link to={'/alt'}>alt</Link>
                <Link to={'/'}>home</Link>
                <Link to={'/effect'}>alt</Link>

            </div>
            </div>

    </div>
   )
}
