import React, { useState } from 'react';
import Save from "../../../Assets/Product Section/ProductAddForm/save.svg";
import Cancel from "../../../Assets/Product Section/ProductAddForm/cancel.svg";
import ArrowLeft from "../../../Assets/Product Section/ProductAddForm/Group 1261153066.svg";
import { Link } from 'react-router-dom';
import Api from '../../../Services/Api';

function ProductAddForm() {
    // State to store form data
    const [formData, setFormData] = useState({
        productName: "",
        productId: "", // Assuming this might be set dynamically later
        productDescription: "",
        quantity: "",
        status: "In Stock",
        listPrice: "",
        salePrice: "",
        chargeTax: false,
        createdDate: "",
        updatedDate: "",
        returnPolicy: "15 Days",
        manufactureDetails: ""
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    // Handle form submission (console log the data)
    const handleSave = () => {
        console.log("Form Data:", formData);
        Api.post('api/products',
            {
                "id": formData.productId,
                "name": formData.productName,
                "price": formData.salePrice,
                "quantity": formData.quantity,
                
                "description": formData.productDescription,
                "manufacturerDetails": formData.manufactureDetails,
                "bestSeller": true,
                "whishlist": true,
              }
        )
        .then(response => {
            if(response && response.data) {
                console.log('product added', response);
            } else {
                console.error('Error adding product:', response);
            }
        })
    };

    return (
        <div className='bg-[#F9F9FB] w-full min-w-max min-h-svh h-full'>
            <div className="h-[72px]"></div>
            <div className="ml-[242px] bg-[#F9F9FB] px-6 py-8">
                <div className="flex items-center justify-between">
                    <Link to="/product">
                        <div className="flex items-center">
                            <img src={ArrowLeft} alt="Back" />
                            <div className="text-[20px] leading-[24px] font-medium">Add Product</div>
                        </div>
                    </Link>
                    <div className="flex">
                        <div className="border border-[#D5D5D5] bg-white rounded-lg py-[12px] px-4 text-[#696A70] flex items-center">
                            <img className="mr-2 w-4 h-4" src={Cancel} alt="Cancel" />
                            Cancel
                        </div>
                        <button 
                            onClick={handleSave} 
                            className="border rounded-lg py-[13px] px-[16px] text-[14px] font-normal text-white ml-4 hover:bg-[#415BAD] bg-[#304BA0] flex items-center"
                        >
                            <img className="mr-2" src={Save} alt="Save" />
                            Save
                        </button>
                    </div>
                </div>

                {/* Form */}
                <div className="space-y-4 mt-6">
                    <div>
                        <label className="block text-sm font-medium">Product Name</label>
                        <input
                            type="text"
                            name="productName"
                            value={formData.productName}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded-lg"
                            placeholder="Enter product name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Product ID</label>
                        <input
                            type="text"
                            name="productId"
                            value={formData.productId}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded-lg bg-gray-100"
                            placeholder="Product ID"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Product Description</label>
                        <textarea
                            name="productDescription"
                            value={formData.productDescription}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded-lg"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium">Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-lg"
                                placeholder="0"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Status</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-lg"
                            >
                                <option value="In Stock">In Stock</option>
                                <option value="Out of Stock">Out of Stock</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium">List Price</label>
                            <input
                                type="text"
                                name="listPrice"
                                value={formData.listPrice}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-lg"
                                placeholder="AED 120.00"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Sale Price</label>
                            <input
                                type="text"
                                name="salePrice"
                                value={formData.salePrice}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-lg"
                                placeholder="AED 100.00"
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="chargeTax"
                            checked={formData.chargeTax}
                            onChange={handleChange}
                            className="w-4 h-4"
                        />
                        <label className="text-sm">Charge tax on this product</label>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium">Created Date</label>
                            <input
                                type="date"
                                name="createdDate"
                                value={formData.createdDate}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Last Updated Date</label>
                            <input
                                type="date"
                                name="updatedDate"
                                value={formData.updatedDate}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-lg"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Return Policy</label>
                        <select
                            name="returnPolicy"
                            value={formData.returnPolicy}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded-lg"
                        >
                            <option>15 Days</option>
                            <option>30 Days</option>
                            <option>No Returns</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Manufacture Details</label>
                        <textarea
                            name="manufactureDetails"
                            value={formData.manufactureDetails}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded-lg"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="border-dashed border-2 border-gray-300 p-6 text-center rounded-lg">
                        <p className="text-gray-500">Drop your images & videos or click to browse</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductAddForm;
