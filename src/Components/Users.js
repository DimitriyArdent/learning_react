import React, { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/Context'
 function Users() {
    const { state, dispatch } = useContext(UserContext);
    const[name,setName] =useState('')
    const[house,setHouse] =useState('')
    const[editHouse,setEditedHouse] = useState('')
  return (
    <div>
             <div>{state.gameOfThronesCharacters.map((ch,i)=>(
                <div key={i}  >
                    
                   <span onClick={()=>dispatch({type:'DELETE_CHAR', data:ch.name})}>{`${ch.name} of house ${ch.house}`}</span> 
                    <input onChange={(e)=>setEditedHouse(e.target.value)}></input>
                    <button onClick={()=>dispatch({type:'EDIT_CHAR_HOUSE', data:{name:ch.name,house:editHouse}})} >edit house</button>
                    
                    </div>
             ))}</div>
<input onChange={(e)=>setName(e.target.value)}></input>
<input onChange={(e)=>setHouse(e.target.value)}></input>

<button onClick={()=>dispatch({type:'ADD_CHARACTER', data:{name:name,house:house}})}>add char</button>
    </div>
  )
}

export default Users