import React,{useEffect,useState} from 'react'
import { useContext } from 'react';
import { EffectContext } from './context/effectContext';
 import EffectChild from './EffectChild';
 import { EffectContextProvider } from './context/effectContext';
 function Effect() {
    const[state, setState] = useState(false)
    const[state2, setState2] = useState(false)
     useEffect(()=>{console.log('1')

    return (()=>{
        
    })
    },[])
     
 
   return (
    <>
    <EffectContextProvider>

         <button onClick={()=>setState(!state)}>hit me</button>
         <button onClick={()=>setState2(!state2)}>hit me2</button>
            <div>effect</div>
          <EffectChild></EffectChild>
       

    </EffectContextProvider>
          
     </>
   )
}

export default Effect