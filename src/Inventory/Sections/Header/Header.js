import React from 'react'

function Header() {
  return (
    <div>
    <div className="h-[72px] z-[1000] pl-[40px] pr-[25px] flex items-center">
      <img className="cursor-pointer" src={medoLogo} alt="Logo" />
      <div className="flex justify-end ml-auto">
        <img className="cursor-pointer" src={Notification} alt="Notification" />
        <img className="ml-4 cursor-pointer" src={Announce} alt="Announcement" />
        <div className="relative ">
          <img 
            className="ml-16 cursor-pointer" 
            src={User} 
            alt="User" 
            onClick={toggleDropdown} 
          />
        
            <div className="absolute right-0  mt-8 w-48 bg-white border rounded-md shadow-lg">
              <button 
              
                className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-100"
              >
                <img src={LogoutIcon} alt="Logout" className="mr-2" />
                Log out
              </button>
        
             
            </div>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header
