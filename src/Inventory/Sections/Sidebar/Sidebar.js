import React from 'react';
import Dashboard from '../../Assets/sidebarSection/Dashboard.svg';
import Orders from '../../Assets/sidebarSection/Frame (2).svg';
import Finance from '../../Assets/sidebarSection/Frame (3).svg';
import Products from '../../Assets/sidebarSection/Frame (4).svg';
import Supplier from '../../Assets/sidebarSection/Frame (5).svg';
import Stocks from '../../Assets/sidebarSection/Frame (6).svg';
import Purchase from '../../Assets/sidebarSection/Frame (1).svg';
import RightArrow from '../../Assets/sidebarSection/arrow_forward_ios.svg';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="fixed top-[72px] left-0 w-[242px] h-[calc(100vh-72px)] bg-[#2B2342] px-4 py-4 overflow-y-auto">
      {[

        { name: 'Dashboard', path: 'dashboard',img:Dashboard },
        { name: 'Orders', path: "orders" ,img:Orders },
        { name: 'Finance', path:"finance" ,img:Finance},
        { name:'Products',path:"product" ,img:Products},
        {name:'Purchase & Sales', path:"purchaseSales" ,img:Supplier},
        {name:'Supplier & Customer', path: "supplierCustomer" ,img:Purchase}

      ].map((item, index) => (
        <Link to={item.path} >
          <div key={index} className="px-4 py-[14px] hover:bg-[#423664] cursor-pointer hover:rounded-lg mt-2">
            <div className="flex items-center justify-between text-[14px] leading-4 font-normal text-white">
              <div className="flex">
                <img className="mr-2" src={item.img} alt="" />
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
