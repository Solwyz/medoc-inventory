import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import InventoryLayout from './Inventory/InventoryLayout';
import LoginPage from './Inventory/Pages/LoginPage/LoginPage';
import DashBoard from './Inventory/Pages/DashBoard/DashBoard';
import Orders from './Inventory/Pages/Orders/Orders';
import Finance from './Inventory/Pages/Finance/Finance';
import Product from './Inventory/Pages/Product/Product';

function App() {
  return (
    <div className="App font-AnekLatin">

  <Routes>
    <Route path="/" element={<InventoryLayout/>}>
      <Route index element={<DashBoard/>}/>
      <Route path='dashboard' element={<DashBoard/>}/>
      <Route path='orders' element={<Orders/>}/>
      <Route path='finance' element={<Finance/>}/>
      <Route path='product' element={<Product/>}/>
    </Route>
    <Route path='/login' element={<LoginPage/>}/>
  </Routes>

    </div>
  );
}

export default App;
