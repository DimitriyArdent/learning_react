import logo from './logo.svg';
import './App.css';
import { UserContextProvider } from './Context/Context';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Users from './Components/Users';
import Cats from './Components/Cats/Cats';
import Redirect from './Components/Other/Redirect';
import Post from './Components/Post';
 function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
      <Login> </Login>
      <Routes>
      <Route path='/users' element={<Users></Users>}></Route>
      <Route path='/cats' element={<Cats></Cats>}></Route>
      <Route path='/redirect' element={<Redirect></Redirect>}></Route>
      <Route path='/post' element={<Post></Post>}></Route>

       </Routes>
      </BrowserRouter>     
    </UserContextProvider>
    
  );
}

export default App;

 

 