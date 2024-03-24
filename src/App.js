import './App.css';
import { useState } from 'react';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Words from './Words';
import Alternative from './Alternative';
import Main from './Main';
import ArrayComponent from './ArrayComponent';
import Row from './Row';
import Effect from './Effect';
 import { UserContextProvider } from './context/context';
function App() {
  const[isOpen, setisOpen]=useState(false)
  
return(
  <div> 
   <UserContextProvider>



       <BrowserRouter>
      <Layout> 
      <Routes>
         
               <Route path='/' element={<Main></Main>}></Route>

 
                <Route path='/alt' element={<Alternative></Alternative>}></Route>
                <Route path='/words' element={<Words></Words>}></Route>   

               <Route path='/array' element={<ArrayComponent></ArrayComponent>}></Route>
               <Route path='/array/:id' element={<Row></Row>}></Route>

               <Route path='/effect' element={<Effect></Effect>}></Route>
                
      </Routes>
      </Layout> 
      </BrowserRouter>

      </UserContextProvider>

   </div>
)
 

   }

 

export default App;
