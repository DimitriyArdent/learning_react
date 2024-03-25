import logo from './logo.svg';
import './App.css';
import { UserContextProvider } from './Context/Context';
import Users from './Components/Users';
function App() {
  return (
    <UserContextProvider>
      
        <Users></Users>

    </UserContextProvider>
    
  );
}

export default App;
