import React,{useState} from 'react'

function Main() {
    const [arr,setarr] = useState([1,2,3])
  return (
    <div>{arr.map((ar)=>(
        <div>{ar}</div>
    ))}</div>
  )
}

export default Main