import {createContext, useState} from 'react'
 
 


export const EffectContext = createContext({})

export const EffectContextProvider = ({children})=>{
    
    const [user, setUser] = useState({isAdmin:false, name: 'guest'})
    

    return <EffectContext.Provider value={{user, setUser}}>{children}</EffectContext.Provider>
}