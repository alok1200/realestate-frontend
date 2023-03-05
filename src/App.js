
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Login from './pages/authLoginRegister/Login';
import Home from './pages/HomePage/Home';
import Register from './pages/authLoginRegister/Registor';
import SinglePropertyPage from './pages/SinglePropertyPage/SinglePropertyPage';
import PropertiesPage from './pages/Properties/PropertiesPage';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/property/:id' element={<SinglePropertyPage/>}/>
      <Route path='/propertyies/:cat' element={<PropertiesPage/>}/>
    </Routes>
    </>
  );
}

export default App;
