import React from "react";
import { Link, useLocation } from "react-router-dom";
import Dashboard from "../../Assets/sidebarSection/Dashboard.svg";
import Orders from "../../Assets/sidebarSection/Frame (2).svg";
import Finance from "../../Assets/sidebarSection/Frame (3).svg";
import Products from "../../Assets/sidebarSection/Frame (4).svg";
import Supplier from "../../Assets/sidebarSection/Frame (5).svg";
import Stocks from "../../Assets/sidebarSection/Frame (6).svg";
import Purchase from "../../Assets/sidebarSection/Frame (1).svg";
import RightArrow from "../../Assets/sidebarSection/arrow_forward_ios.svg";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", img: Dashboard },
    { name: "Orders", path: "/orders", img: Orders },
    { name: "Finance", path: "/finance", img: Finance },
    { name: "Products", path: "/product", img: Products },
    { name: "Purchase & Sales", path: "/purchaseSales", img: Supplier },
    { name: "Supplier & Customer", path: "/supplierCustomer", img: Purchase },
  ];

  return (
    <div className="fixed top-[72px] left-0 w-[242px] h-[calc(100vh-72px)] bg-[#2B2342] px-4 py-4 overflow-y-auto">
      {menuItems.map((item, index) => {
        const isActive = location.pathname === item.path;

        return (
          <Link to={item.path} key={index}>
            <div
              className={`px-4 py-[14px] mt-2 cursor-pointer flex items-center justify-between text-[14px] leading-4 font-normal text-white 
                ${isActive ? "bg-[#423664] rounded-full" : "hover:bg-[#423664] hover:rounded-full"}`}
            >
              <div className="flex items-center">
                <img className="mr-2" src={item.img} alt={item.name} />
                <h1>{item.name}</h1>
              </div>
              <img className="ml-auto" src={RightArrow} alt="Arrow" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
