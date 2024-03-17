import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'

function ArrayComponent() {
    const[val,setVal] = useState('hello from array component')
    const[books,setBooks]=useState([
        {id:0, name:'Lord of the rings', Author: 'J.R.T',
         image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBP0TQsvyY26Fj1XxwEyXt6vt4r37dzJ__z8h_V0FjBQ&s'},
    {id:1,name: 'Song of ice and fire', Author:'Martin', 
    image:'https://upload.wikimedia.org/wikipedia/en/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg?20210904220743'}])

const navigate = useNavigate()

function handleNav(b){
    navigate(`/array/${b.id}`)
}

  return (
 <div>{books.map((b,i)=>(
        <div key={i} onClick={()=>handleNav(b)}> 
            <div>{b.name}</div>
            <div>{b.Author}</div>
            <img src={`${b.image}`}></img>

        </div>
    ))}</div>
  )
}

export default ArrayComponent