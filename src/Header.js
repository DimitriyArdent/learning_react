import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function Header() {
  return (
    <div>
        
            <div style={{backgroundColor:'orange', height:'50px'}}>Header
            <div style={{display:'flex', justifyContent:'space-around'}}>
                <Link to={'/array'}>array component</Link>
                <Link to={'/words'}>words</Link>
                <Link to={'/alt'}>alt</Link>
                <Link to={'/'}>home</Link>
            </div>
            </div>

    </div>
   )
}
