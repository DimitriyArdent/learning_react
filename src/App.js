import './App.css';
import { useState } from 'react';
 

function App() {
  const[arr, setArr]= useState(['one', 'two'])

  const[numbers, setNumbers] = useState(['three', 'four'])
  const[text, setText] = useState('')

   function addNumber(){
    setArr((prev)=>[...prev,'thousand'])
   }

   function mergeArrays(n){
    setArr((prev)=>[...prev,n])
   }
   function deleteMe(clickedElement,index){
      //setArr(arr.filter((element)=> element !=clickedElement))
     setArr(arr.filter((element, elementIndex)=> elementIndex != index))
   }
   function handleChange(text){
        console.log(text)
        setText(text)
   }
   function handleAddNumber(){
    setArr((prev)=>[...prev,text])
    //setText('')
   }
   return (
  <div id='my first tag'>
        <div  >


          {arr.map((el,i)=>(

            <div className='space'>
                      <div key={i} className='text-color' >   {`${el}    ${i}`}</div>
                  <button onClick={()=>deleteMe(el,i)}>delete me </button>
            </div>
          
                 
             
            
        ))}
        <button onClick={()=>addNumber()}>click me to add 'ten'</button>

        <div>
            {numbers.map((n,i)=>(
              <div key={i} onClick={()=>mergeArrays(n)} className='numbers'>{n}</div>
            ))}
        </div>

                <div className='space'>
                        <button onClick={()=> handleAddNumber()}>add number</button>
                        <input value={text} onChange={(e)=>handleChange(e.target.value)}></input>
                        <div>{text}</div>
                </div>
        </div>
  </div>   
  );
}

export default App;
