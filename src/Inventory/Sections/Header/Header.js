import React from 'react';
import medoLogo from "../../Assets/HeaderSection/medocLogo.svg";
import Notification from "../../Assets/HeaderSection/Notification.svg";
import Announce from "../../Assets/HeaderSection/Announce.svg";
import User from "../../Assets/HeaderSection/User.svg";

function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 h-[72px] z-[1000] bg-white  flex items-center px-[40px]">
      <img className="w-[129px] h-[44px] cursor-pointer" src={medoLogo} alt="Logo" />
      <div className="flex justify-end ml-auto">
        <img className="cursor-pointer" src={Notification} alt="Notification" />
        <img className="ml-4 cursor-pointer" src={Announce} alt="Announcement" />
        <div className="relative">
          <img className="ml-16 cursor-pointer" src={User} alt="User" />
        </div>
      </div>
    </div>
  );
}

export default Header;
