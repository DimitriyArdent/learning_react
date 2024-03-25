import React,{useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { UserContext } from './context/context'
import { useContext } from 'react'
import eventEmitter from './eventEmitter'


export default function Header() {
  const {user ,setUser} = useContext(UserContext)

  function emittedValues(data){
    setUser(data.text)
  }

  useEffect(()=>{
    const listener = eventEmitter.addListener('grandChildEmitter',(data)=> emittedValues(data))
  })

  return (
    <div>
             <div style={{backgroundColor:'orange', height:'50px'}}>Header
             <input onChange={(e)=>eventEmitter.emit('fromheader',e.target.value)}></input>

             <div>{`hello ${user.username || user}`}</div>

            <div style={{display:'flex', justifyContent:'space-around'}}>
                <Link to={'/array'}>array component</Link>
                <Link to={'/words'}>words</Link>
                <Link to={'/alt'}>alt</Link>
                <Link to={'/'}>home</Link>
                <Link to={'/effect'}>effect</Link>
                <Link to={'/emitter'}>emitter</Link>

            </div>
            
            </div>
     </div>
   )
}
