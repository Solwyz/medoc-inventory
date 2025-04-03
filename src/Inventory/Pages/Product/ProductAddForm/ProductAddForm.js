import React from 'react'
import Save from "../../../Assets/Product Section/ProductAddForm/save.svg"
import Cancel from "../../../Assets/Product Section/ProductAddForm/cancel.svg"
import ArrowLeft from "../../../Assets/Product Section/ProductAddForm/Group 1261153066.svg"
import { Link } from 'react-router-dom'


function ProductAddForm() {
    return (
        <div className='bg-[#F9F9FB] w-full min-w-max min-h-svh h-full'>
            <div className="h-[72px]"></div>
            <div className="ml-[242px] bg-[#F9F9FB] px-6 py-8">
                <div className="flex items-center justify-between">
                   <Link to="/product">
                        <div className="flex items-center">
                            <img className='' src={ArrowLeft} alt="" />
                            <div className="text-[20px] leading-[24px] font-medium">Add Product</div>
                        </div>
                   </Link>
                    <div className="flex">
                        <div className=" border border-[#D5D5D5] bg-white rounded-lg justify-center items-center py-[12px] px-4 text-[#696A70] flex ">
                            <img className="mr-2 w-4 h-4" src={Cancel} alt="" />
                            Cancel
                        </div>
                        <div className="border rounded-lg  py-[13px] px-[16px] justify-center items-center text-[14px] font-normal text-white ml-4 hover:bg-[#415BAD] bg-[#304BA0] flex ">
                            <img className="mr-2" src={Save} alt="" />
                            Save
                        </div>


                    </div>


                </div>
                <div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Product Name</label>
                            <input
                                type="text"
                                className="w-full mt-1 p-2 border rounded-lg"
                                placeholder="Enter product name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Product ID</label>
                            <input
                                type="text"
                                className="w-full mt-1 p-2 border rounded-lg bg-gray-100"
                                placeholder="Product ID"
                                disabled
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Product Description</label>
                            <textarea className="w-full mt-1 p-2 border rounded-lg" rows="4"></textarea>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">List Price</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 p-2 border rounded-lg"
                                    placeholder="AED 120.00"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Sale Price</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 p-2 border rounded-lg"
                                    placeholder="AED 100.00"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" className="w-4 h-4" />
                            <label className="text-sm">Charge tax on this product</label>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Created Date</label>
                                <input
                                    type="date"
                                    className="w-full mt-1 p-2 border rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Last Updated Date</label>
                                <input
                                    type="date"
                                    className="w-full mt-1 p-2 border rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Return Policy</label>
                            <select className="w-full mt-1 p-2 border rounded-lg">
                                <option>15 Days</option>
                                <option>30 Days</option>
                                <option>No Returns</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Manufacture Details</label>
                            <textarea className="w-full mt-1 p-2 border rounded-lg" rows="4"></textarea>
                        </div>
                        <div className="border-dashed border-2 border-gray-300 p-6 text-center rounded-lg">
                            <p className="text-gray-500">Drop your images & videos or click to browse</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductAddForm
