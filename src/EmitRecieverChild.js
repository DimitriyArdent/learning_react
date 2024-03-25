import React,{useEffect,useState} from 'react'

import eventEmitter from './eventEmitter'

function EmitRecieverChild() {
    const[data,setData] = useState('')
    useEffect(()=>{
        const  listener =  eventEmitter.addListener('fromheader',(data)=>console.log(`data from emit reciever child ${data}`))
   
           return ()=>{
                   listener.remove()
           }
       })
  return (
  <div>

<div>emit reciever child</div>   
<div>{data}</div>
  </div>
   )
}

export default EmitRecieverChild