import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import InventoryLayout from './Inventory/InventoryLayout';
import HomePage from './Inventory/Pages/HomePage/HomePage';
import LoginPage from './Inventory/Pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App font-AnekLatin">

  <Routes>
    <Route path="/" element={<InventoryLayout/>}>
      <Route index element={<HomePage/>}/>
    </Route>
    <Route path='/login' element={<LoginPage/>}/>
  </Routes>

    </div>
  );
}

export default App;
