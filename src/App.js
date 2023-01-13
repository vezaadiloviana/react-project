import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import EmployeeList from './Pages/EmployeeList';

function App() {
  return (
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/employee-list' element={<EmployeeList/>}/>
    </Routes>
  );
}

export default App;
