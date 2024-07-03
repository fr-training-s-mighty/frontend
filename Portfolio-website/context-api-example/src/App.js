import logo from './logo.svg';
import './App.css';
import UserProfile from './UserProfile';
import { useContext } from 'react';
import { UserContext } from './UserContext';
import Dashboard from './Dashboard';

function App() {
  const { user } = useContext(UserContext);
  return (
    <div className="App">
       <Navbar/>
       <div className='container mt-4'>
        {user?<Dashboard/>:<Login/>}
       </div>
    </div>
  );
}

const Navbar = () =>{
  const {user,logout} = useContext(UserContext);
  return (
    <h1>Navigation</h1>
  );
}


export default App;
