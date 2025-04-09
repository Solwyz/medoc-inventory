import React, { useRef, useState } from 'react';
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
        brand: "",
        manufactureDetails: "",
        marketerDetails: "",
        stockLow: false,
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
    const handleSave = (e) => {
        // e.preventDefault()
        console.log("Form Data:", formData);
        Api.post('api/products',
            {
                "id": formData.productId,
                "name": formData.productName,
                "price": formData.salePrice,
                "stockQuantity": formData.quantity,
                "status": formData.status,
                "description": formData.productDescription,
                "createdDate": formData.createdDate,
                "updatedDate": formData.updatedDate,
                "manufacturerDetails": formData.manufactureDetails,
                "marketerDetails": formData.marketerDetails,
                "brand": formData.brand,
                "expiryDate": "2025-04-07",
                "imageUrls": [
                    "string"
                ],
                "stockLow": "true"
            }
        )
            .then(response => {
                console.log('Response:', response);
                if (response && response.data) {
                    console.log('product added', response);
                } else {
                    console.error('Error adding product:', response);
                }
            })
    };


    const [uploadedFile, setUploadedFile] = useState(null);





    const fileInputRef = useRef(null);

    // To trigger file selection
    const handleBoxClick = () => {
        fileInputRef.current.click();
    };


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log('Selected File:', file);
            setUploadedFile(file);
        }
    };



    return (
        <div className='bg-[#F9F9FB] w-full min-w-max min-h-svh h-full'>
            <div className="h-[72px]"></div>
            <div className="ml-[242px] bg-[#F9F9FB] px-6 py-8">
                <div className="flex items-center justify-between">
                    <Link to="/product">
                        <div className="flex items-center">
                            <img src={ArrowLeft} alt="Back" />
                            <div className="text-[20px] leading-[24px] font-normal">Add Product</div>
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
                <div className="space-y-4 mt-20 flex bg-white p-6 rounded-lg border">
                    <div className='w-[70%] pr-7 border-r space-y-7'>
                        <div>
                            <label className="block text-sm font-normal">Product Name</label>
                            <input
                                type="text"
                                name="productName"
                                value={formData.productName}
                                onChange={handleChange}
                                className="placeholder:text-[14px] font-normal w-full mt-1 p-2 border rounded-lg"
                                placeholder="Enter product name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-normal">Product ID</label>
                            <input
                                type="text"
                                name="productId"
                                value={formData.productId}
                                onChange={handleChange}
                                className="placeholder:text-[14px] font-normal w-full mt-1 p-2 border rounded-lg bg-gray-100"
                                placeholder="Product ID"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-normal">Product Description</label>
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
                                <label className="block text-sm font-normal">Quantity</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    className="placeholder:text-[14px] font-normal w-full mt-1 p-2 border rounded-lg"
                                    placeholder="0"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-normal">Status</label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded-lg text-[14px] font-normal"
                                >
                                    <option value="In Stock">In Stock</option>
                                    <option value="Out of Stock">Out of Stock</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-normal">List Price</label>
                                <input
                                    type="text"
                                    name="listPrice"
                                    value={formData.listPrice}
                                    onChange={handleChange}
                                    className="placeholder:text-[14px] font-normal w-full mt-1 p-2 border rounded-lg"
                                    placeholder="AED 120.00"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-normal">Sale Price</label>
                                <input
                                    type="text"
                                    name="salePrice"
                                    value={formData.salePrice}
                                    onChange={handleChange}
                                    className="placeholder:text-[14px] font-normal w-full mt-1 p-2 border rounded-lg"
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
                                <label className="block text-sm font-normal">Created Date</label>
                                <input
                                    type="date"
                                    name="createdDate"
                                    value={formData.createdDate}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-normal">Last Updated Date</label>
                                <input
                                    type="date"
                                    name="updatedDate"
                                    value={formData.updatedDate}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-normal">Brand</label>
                                <input
                                    type="text"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={handleChange}
                                    className="placeholder:text-[14px] font-normal w-full mt-1 p-2 border rounded-lg"
                                    placeholder="Enter brand name"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-normal">Return Policy</label>
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
                            <label className="block text-sm font-normal">Manufacture Details</label>
                            <textarea
                                name="manufactureDetails"
                                value={formData.manufactureDetails}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-lg"
                                rows="4"
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-normal">Marketer Details</label>
                            <textarea
                                name="marketerDetails"
                                value={formData.marketerDetails}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-lg"
                                rows="4"
                            ></textarea>
                        </div>
                    </div>

                    <div className='w-[30%] pl-7'>
                        <div
                            onClick={handleBoxClick}
                            className="mt-4 cursor-pointer border border-dashed border-gray-400 p-6 text-center rounded-lg bg-white"
                        >
                            <p className="text-sm text-gray-600">Click here to upload a product image</p>
                            <p className="text-xs text-gray-400">(Only images accepted)</p>
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                        />

                        {uploadedFile && (
                            <div className="mt-4 relative max-w-xs">
                                <button
                                    onClick={() => setUploadedFile(null)}
                                    className="absolute top-0 right-0 text-white bg-red-500 hover:bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-xs z-10"
                                >
                                    ×
                                </button>
                                <p className="text-sm text-gray-600">Selected File: {uploadedFile.name}</p>
                                {uploadedFile.type.startsWith('image') && (
                                    <img
                                        src={URL.createObjectURL(uploadedFile)}
                                        alt="Preview"
                                        className="mt-2 max-h-40 rounded border"
                                    />
                                )}
                            </div>
                        )}
                    </div>


                </div>
            </div>
        </div>
    );
}

export default ProductAddForm;
