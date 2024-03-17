import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'

function Alternative() {
 const navigate = useNavigate()

 function redirectUser(){
    navigate('/words')
 }
 
 const timeoutId = setTimeout(redirectUser,2000)

  return (
        <div>
                Wait patiently..

        </div>
   
  )
}

export default Alternative