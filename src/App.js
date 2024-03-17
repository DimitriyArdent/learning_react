import './App.css';
import { useState } from 'react';

function App() {
 const [isOpen,setIsOpen] = useState(false)
 const [val,setVal] = useState('')
 const [trenary,setTrenary] = useState(true)
 const [secondTrenary,setSecondTrenary] = useState(false)
 const [isColor,setIsColor] = useState(false)
 const [placeholder,setPlaceholder] = useState('')
const [inlinestyle, setInlinestyle] = useState(0)
 function handleColorChange(){
  setIsOpen(!isOpen)
 }
 function handleVal(e){
  setVal(e.target.value)
 }
 function handleTrenary(){
  setTrenary(!trenary)
 }
 function handleExperimental(){

 }
 function handleInline(){
   setInlinestyle(prev => prev+5)
 }
   return (
    <div className='display'>
       {val==='red' && <div className='div-app' style={{background:'red'}}>im red div</div>}
       {val==='purple' && <div className='div-app' style={{background:'purple'}}>im purple div</div>}
       <button onClick={()=>handleColorChange()}>click me to change color</button>
       <input value={val} onChange={(e)=>handleVal(e)}></input>

       {trenary ? 
        <div className='div-app' style={{background:'yellow'}}>im yellow div  </div> :
           secondTrenary?
             <div className='div-app' style={{background:'orange'}}>im orange div  </div>:
             <div className='div-app' style={{background:'green'}}>im green div  </div>
         }

          <button onClick={()=>handleTrenary()}> trenary button</button>

        
        <div className={isColor? 'color-a' : 'color-b'} onClick={()=>setIsColor(!isColor)} >im experimental div</div>
           
        <div className={`color-a ${placeholder}`} onClick={()=>handleExperimental()} >im experimental div2</div>
        <input val={placeholder} onChange={(e)=>setPlaceholder(e.target.value)}></input>


        <div className={'color-a'} style={{padding:`${inlinestyle}px`}}   >im experimental div3</div>
         <button onClick={()=>handleInline()}> change experimental div3</button>
     </div>
 
  );

   }

 

export default App;
