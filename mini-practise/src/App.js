import './App.css';
import Navbar from './components/navbar';
import Login from './pages/login';
import Profile from './pages/profile';
import Register from './pages/register';
import { Routes,Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
