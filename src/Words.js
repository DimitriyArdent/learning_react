import React,{useState} from 'react'

function Words() {
    const [arr,setarr] = useState(['react','is','fun'])
    
  return (
    <div>{arr.map((ar)=>(
        <div>{ar}</div>
    ))}</div>
  )
}

export default Words