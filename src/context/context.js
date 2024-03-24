import {createContext, useState} from 'react'
 
 


export const UserContext = createContext({})

export const UserContextProvider = ({children})=>{
    
    const [user, setUser] = useState({isLoggedIn: false,username: 'guest',role: ''})
    const [arr, setArr] = useState([1,2,3])


    return <UserContext.Provider value={{user, setUser,arr,setArr}}>{children}</UserContext.Provider>
}