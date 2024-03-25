import React,{useEffect,useState} from 'react'
import eventEmitter from './eventEmitter'
import EmitRecieverChild from './EmitRecieverChild'
function EmitReciever() {
const [data,setData] = useState()
const [openChild,setOpenChild] = useState(false)
    useEffect(()=>{
     const  listener =  eventEmitter.addListener('fromheader',(data)=>console.log(`data from Emit reciever ${data}`))

     return ()=>{
        listener.remove()
     }
       
    })
  return (
    <div>
        <div>Emit reciever</div>
        <button onClick={()=>setOpenChild(!openChild)}> open Child </button>
        <div>{data}</div>
        {openChild&& <EmitRecieverChild></EmitRecieverChild>}

    </div>
  )
}

export default EmitReciever