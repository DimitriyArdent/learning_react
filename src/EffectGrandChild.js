import React from 'react'
import { useContext, useState } from 'react'
import { EffectContext } from './context/effectContext'
export default function EffectGrandChild() {
  const{user,setUser} = useContext(EffectContext)
  const[text,settext] = useState('')
  const [role,setrole] = useState(false)
  function handleClick(){
    setrole(!role)
    setUser((prev)=>({...prev, isAdmin:!user.isAdmin}))
  }
  return (
    <div className='border'>
        <div>EffectGrandChild</div>
        <div>{`name : ${user.name}`}</div>
          <div>{` is admin ? ${user.isAdmin}`}</div>
          <input onChange={(e)=>settext(e.target.value)}></input>
          <button onClick={()=>setUser((prev)=>({...prev, name: text}))}>change name</button>
          <button onClick={()=>handleClick()}>change role to {role? 'user' : 'admin'}</button>
    </div>
 
  )
}
