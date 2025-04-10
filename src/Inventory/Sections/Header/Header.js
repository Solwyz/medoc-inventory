import React, { useEffect, useRef, useState } from 'react';
import medoLogo from "../../Assets/HeaderSection/medocLogo.svg";
import Notification from "../../Assets/HeaderSection/Notification.svg";
import Announce from "../../Assets/HeaderSection/Announce.svg";
import User from "../../Assets/HeaderSection/User.svg";
import LogoutIcon from "../../Assets/HeaderSection/logOutIcon.svg";
import { Link } from 'react-router-dom';

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dropdownRef = useRef(null);

  const handleLogOut = () => {
    console.log("Log out clicked");
    setDropdownVisible(false);
  }

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[72px] z-[1000] bg-white  flex items-center px-[40px]">
      <img className="w-[129px] h-[44px] cursor-pointer" src={medoLogo} alt="Logo" />
      <div className="flex justify-end ml-auto">
        <img className="cursor-pointer" src={Notification} alt="Notification" />
        <img className="ml-4 cursor-pointer" src={Announce} alt="Announcement" />
       
          <div className="relative" ref={dropdownRef}>
            <img className="ml-16 cursor-pointer" src={User} alt="User" onClick={toggleDropdown} />

            {dropdownVisible && (
            <div className="absolute right-0  mt-8 w-48 bg-white border rounded-md shadow-lg">
              <button
                onClick={handleLogOut}
                className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-100"
              >
                <img src={LogoutIcon} alt="Logout" className="mr-2" />
                Log out
              </button>
              
            </div>
          )}

          </div>

      
      </div>
    </div>
  );
}

export default Header;
