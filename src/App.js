
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Registor';
import SinglePropertyPage from './pages/SinglePropertyPage';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/property/:id' element={<SinglePropertyPage/>}/>
    </Routes>
    </>
  );
}

export default App;
