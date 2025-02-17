import React from 'react'
import SearchIcon from "../../Assets/common/Search Icon.svg"
import FilterIcon from "../../Assets/common/filter_alt.svg"

function Orders() {
    return (
        <div className=' bg-[#f7f7f7] w-full min-w-max min-h-svh h-full'>
            <div className='h-[72px]'></div>
            <div className='ml-[242px] bg-[#f7f7f7] px-6 py-8'>
                <div className='text-[20px] leading-[24px] font-medium'>
                    Order Management
                </div>
                <div className='bg-white p-6 mt-8 rounded-lg h-full min-h-svh'>
                <div className='flex'>
                    <div className='border rounded-lg items-center w-[584px] py-[12px] pl-4 text-[#696A70] flex'>
                        <img className='mr-2 w-4 h-4 ' src={SearchIcon} alt="" />
                        <input
                            type='text'
                            placeholder='Search'   
    
                            className='outline-none w-full'
                        />
                    </div>
                    <div className='border rounded-lg w-[96px] py-[14px] pl-4 text-[#696A70] flex ml-4'>
                    <img className='mr-2' src={FilterIcon} alt="" />
                    <input
                      type='text'
                      placeholder='Filter'
                 
                   
                      className='outline-none w-full'
                    />
                  </div>
                  <div className='border rounded-lg w-[96px] py-[14px] pl-4 text-[#696A70] flex ml-4'>
                    <img className='mr-2' src={FilterIcon} alt="" />
                    <input
                      type='text'
                      placeholder='Filter'
                 
                   
                      className='outline-none w-full'
                    />
                  </div>
                </div>
            </div>
            </div>

            
        </div>
    )
}

export default Orders
