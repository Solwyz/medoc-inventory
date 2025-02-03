import React from 'react';
import Dashboard from '../../Assets/sidebarSection/Dashboard.svg';
import RightArrow from '../../Assets/sidebarSection/arrow_forward_ios.svg';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="fixed top-[72px] left-0 w-[242px] h-[calc(100vh-72px)] bg-[#2B2342] px-4 py-4 overflow-y-auto">
      {[
        { name: 'Dashboard', path: 'dashboard' },
        { name: 'Orders', path: "orders" },
        { name: 'Finance', path:"finance"},
        { name:'Inventory',path:"inventory"},
        {name:'Products', path:"product"},
        {name:'Stocks',path:"stock"},
        {name:'Purchase & Sales', path: "purchaseSales"}
      ].map((item, index) => (
        <Link to={item.path} >
          <div key={index} className="px-4 py-[14px] hover:bg-[#423664] cursor-pointer hover:rounded-lg mt-2">
            <div className="flex items-center justify-between text-[14px] leading-4 font-normal text-white">
              <div className="flex">
                <img className="mr-2" src={Dashboard} alt="" />
                <h1>{item.name}</h1>
              </div>
              <img className="ml-auto" src={RightArrow} alt="" />
            </div>
          </div>
        </Link>
      ))
      }
    </div >
  );
}

export default Sidebar;
