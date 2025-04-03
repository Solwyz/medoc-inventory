import React, { useState } from "react";
import SearchIcon from "../../Assets/common/Search Icon.svg";
import FilterIcon from "../../Assets/common/filter_alt.svg";
import Export from "../../Assets/orderSection/Export.svg";
import checkBox from "../../Assets/orderSection/Vector (1).svg";
import checkedBox from "../../Assets/orderSection/Rectangle 908.svg";
import Delete from "../../Assets/Product Section/dltRed.svg";
import OrderListIsEmpty from "../../Assets/orderSection/illo.svg";
import DeleteIcon from "../../Assets/orderSection/Featured icon.svg";
import AddButn from "../../Assets/Product Section/Add.svg";
import imprt from "../../Assets/Product Section/Import.svg";
import eyeIconBlue from "../../Assets/Product Section/Frame 1261155649.svg";
import eyeIconBlack from "../../Assets/Product Section/visibility.svg";
import editBlue from "../../Assets/Product Section/Frame 1261155651 (1).svg";
import editBlack from "../../Assets/Product Section/Frame 1261155651.svg";
import deleteBlack from "../../Assets/Product Section/Frame 1261155650.svg";
import ProductImg from "../../Assets/Product Section/productImg/Rectangle 9234.png";
import Close from "../../Assets/Product Section/close.svg";
import CloseRed from "../../Assets/Product Section/closeRed.svg";
import ProductAddForm from "./ProductAddForm/ProductAddForm";
import { Link } from "react-router-dom";

function Product() {
    const [checkedItems, setCheckedItems] = useState({});
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [activeTab, setActiveTab] = useState("New orders");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderToDelete, setOrderToDelete] = useState(null);
    const [hoverAction, setHoverAction] = useState(null)
    const [isViewModal, setIsViewModal] = useState(false);
    const [selectProduct, setSelectProduct] = useState(null)
    const [hoverClose, setHoverClose] = useState(null)





    const toggleCheckbox = (id) => {
        setCheckedItems((prev) => {
            const newCheckedItems = { ...prev, [id]: !prev[id] };
            setSelectAllChecked(Object.values(newCheckedItems).every(Boolean)); // If all checked, set selectAllChecked to true
            return newCheckedItems;
        });
    };

    const toggleSelectAll = () => {
        const newCheckedState = !selectAllChecked;
        setSelectAllChecked(newCheckedState);

        const updatedCheckedItems = {};
        orders.forEach(({ id }) => {
            updatedCheckedItems[id] = newCheckedState;
        });

        setCheckedItems(updatedCheckedItems);
    };


    const orders = [
        { ProductId: 1, Price: "AED 240", ProductDetailems: "Multivitamin Vitamin Healthkart Tablet", ProductDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", Brand: "Cipla", Quantity: "100ml", payment: "COD", invoice: "CT/12/2544", status: 'In Stock' },
        { ProductId: 2, Price: "AED 360", ProductDetailems: "Multivitamin Vitamin Healthkart Tablet", ProductDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", Brand: "Cipla", Quantity: "100ml", payment: "Online", invoice: "CT/12/2545", status: "Out of Stock" },

    ];

    const statusStyles = {
        'In Stock': "text-[#29860A] bg-[#E1FDD7]",
        "Out of Stock": "text-[#FF0000] bg-[#FFE7E7]",
    };

    // const tabs = ["New orders", "Ongoing", "Dispatched", "Delivered", "Cancelled"];

    const handleDeleteClick = (id) => {
        setOrderToDelete(id);
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        // Implement deletion logic here
        console.log(`Order with ID ${orderToDelete} deleted.`);
        setIsModalOpen(false);
        setOrderToDelete(null);
    };

    const handleViewModal = (id) => {
        setSelectProduct(id)
        setIsViewModal(true)

    }

    return (
        <div className="bg-[#F9F9FB] w-full min-w-max min-h-svh h-full">
            <div className="h-[72px]"></div>
            <div className="ml-[242px] bg-[#F9F9FB] px-6 py-8">
                <div className="flex items-center justify-between">
                    <div className=""> <div className="text-[20px] leading-[24px] font-medium">Product Management</div></div>
                    <div className="flex">
                        <div className=" border border-[#D5D5D5] rounded-lg justify-center cursor-pointer items-center py-[10px] px-3 text-[#696A70] flex ">
                            <img className="mr-2 w-4 h-4" src={imprt} alt="" />
                            Import
                        </div>
                        <Link to={"addproduct"}>
                            <div
                                className="border rounded-lg ml-4  py-[13px] px-[16px] cursor-pointer justify-center items-center text-[14px] font-normal text-white hover:bg-[#415BAD] bg-[#304BA0] flex ">
                                <img className="mr-2" src={AddButn} alt="" />
                                Add Product
                            </div>
                        </Link>

                    </div>
                </div>
                <div className="bg-white p-6 mt-8 rounded-lg h-full min-h-svh">
                    <div className="flex justify-between">
                        <div className="flex">
                            <div className="border hover:border-[#8F8F8F] focus-within:border-[#8F8F8F] rounded-lg items-center w-[584px] py-[12px] pl-4 text-[#696A70] flex">
                                <img className="mr-2 w-4 h-4" src={SearchIcon} alt="" />
                                <input type="text" placeholder="Search" className="outline-none w-full" />
                            </div>
                            <div className="border hover:border-[#8F8F8F] focus-within:border-[#8F8F8F] rounded-lg w-[96px] py-[14px] pl-4 text-[#696A70] flex ml-4">
                                <img className="mr-2" src={FilterIcon} alt="" />
                                <input type="text" placeholder="Filter" className="outline-none w-full" />
                            </div>
                        </div>
                        <div className="border hover:border-[#8F8F8F]  rounded-lg py-[14px] px-4 text-[#2C2B2B] flex ml-4 cursor-pointer">
                            <img className="mr-2" src={Export} alt="" />
                            Export
                        </div>
                    </div>

                    {/* <div className="bg-[#F0F0F0] px-1 py-1 w-fit mt-8 rounded-lg ">
                        <div className="flex">
                            {tabs.map((tab) => (
                                <div
                                    key={tab}
                                    className={`px-6 py-2 cursor-pointer rounded-lg ${activeTab === tab ? "bg-white" : ""}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </div>
                            ))}
                        </div>
                    </div> */}

                    {orders.length === 0 ? (
                        <div className="flex flex-col items-center justify-center mt-[214px]">
                            <img src={OrderListIsEmpty} alt="Empty Order List" className="w-[156px] h-[87px]" />
                            <h1 className="text-[14px] font-normal mt-1 text-[#696A70]">Your order list is empty</h1>
                        </div>
                    ) : (
                        <div className="mt-4">
                            <table className="w-full bg-white mt-4 border">
                                <thead className="bg-[#F0F0F0] px-6 py-4">
                                    <tr>
                                        <th className="p-4 font-medium text-start text-sm flex items-center">
                                            <img
                                                src={selectAllChecked ? checkedBox : checkBox}
                                                className="mr-4 cursor-pointer"
                                                alt="select all"
                                                onClick={toggleSelectAll}
                                            />
                                            Product ID
                                        </th>
                                        <th className="p-4 font-medium text-start text-sm">Product Detail</th>
                                        <th className="p-4 font-medium text-start text-sm">Price</th>
                                        <th className="p-4 font-medium text-start text-sm">Quantity</th>
                                        <th className="p-4 font-medium text-start text-sm">Status</th>
                                        <th className="p-4 font-medium text-start text-sm">Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map(({ ProductId, Price, ProductDetailems, ProductDescription, Brand, Quantity, status }) => (
                                        <tr key={ProductId}>
                                            <td className="p-4 font-medium text-start text-sm flex items-center">
                                                <img src={checkedItems[ProductId] ? checkedBox : checkBox} className="mr-4" alt=""
                                                    onClick={() => toggleCheckbox(ProductId)} />
                                                {ProductId}</td>
                                            <td className="p-4 font-medium text-start text-sm">{ProductDetailems}</td>
                                            <td className="p-4 font-medium text-start text-sm">{Price}</td>
                                            <td className="p-4 font-medium text-start text-sm">{Quantity}</td>
                                            <td className="p-4 font-normal text-start text-[12px]">
                                                <button className={`py-1 px-4 rounded-lg ${statusStyles[status]}`}>{status}</button>
                                            </td>
                                            <td className="p-4 font-medium text-center justify-between items-start flex text-sm relative">
                                                <button
                                                    onClick={() => handleViewModal({ ProductId, Price, ProductDetailems, Brand, ProductDescription, Quantity, status })}
                                                    onMouseEnter={() => setHoverAction(`edit-${ProductId}`)}
                                                    onMouseLeave={() => setHoverAction(null)}
                                                    className="relative"
                                                >
                                                    <img src={hoverAction === `edit-${ProductId}` ? eyeIconBlue : eyeIconBlack} alt="View" />
                                                    {hoverAction === `edit-${ProductId}` && (
                                                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                                                            View
                                                        </span>
                                                    )}
                                                </button>

                                                <button
                                                    onClick={() => handleDeleteClick(ProductId)}
                                                    onMouseEnter={() => setHoverAction(`delete-${ProductId}`)}
                                                    onMouseLeave={() => setHoverAction(null)}
                                                    className="relative"
                                                >
                                                    <img src={hoverAction === `delete-${ProductId}` ? Delete : deleteBlack} alt="Delete" />
                                                    {hoverAction === `delete-${ProductId}` && (
                                                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                                                            Delete
                                                        </span>
                                                    )}
                                                </button>

                                                <button
                                                    onMouseEnter={() => setHoverAction(`view-${ProductId}`)}
                                                    onMouseLeave={() => setHoverAction(null)}
                                                    className="relative"
                                                >
                                                    <img src={hoverAction === `view-${ProductId}` ? editBlue : editBlack} alt="Edit" />
                                                    {hoverAction === `view-${ProductId}` && (
                                                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                                                            Edit
                                                        </span>
                                                    )}
                                                </button>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Confirmation Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[361px] h-[256px]">
                        <img className="w-12 h-12" src={DeleteIcon} alt="" />
                        <h1 className="mt-6 font-medium text-[16px]">Confirm  Delete</h1>
                        <h2 className="text-[14px] font-normal text-[#818180] mt-2">Are you sure you want to delete this order?</h2>
                        <div className="flex  mt-4">
                            <button className="px-[52px] py-[14px] border-[1px] rounded-lg mr-2" onClick={() => setIsModalOpen(false)}>Cancel</button>
                            <button className="px-[52px] py-[14px] bg-[#FFCFCF] hover:bg-[#FFA0A0] text-[#D41515] rounded-lg" onClick={confirmDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            )}

            {isViewModal && selectProduct && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
                    <div className="bg-white p-6 rounded-lg shadow-lg ">
                        <div className="flex items-center justify-between">
                            <h1 className="font-medium text-[16px]">Product Details</h1>
                            <button
                                onMouseEnter={() => setHoverClose(true)}
                                onMouseLeave={() => setHoverClose(false)}
                            >

                                <img
                                    className=""
                                    onClick={() => setIsViewModal(false)}
                                    src={hoverClose === true ? CloseRed : Close} alt="" />
                            </button>
                        </div>
                        <div className="flex mt-10">
                            <div>
                                <img className="w-[210px] h-[210px] " src={ProductImg} alt="" />
                            </div>
                            <div className='ml-10'>

                                <div className="text-[16px] font-medium"> {selectProduct.ProductDetailems}</div>
                                <div className="text-[16px] text-[#787878] font-normal mt-2">{selectProduct.ProductDescription.split(' ').slice(0, 7).join(' ')}</div>
                                <div className="text-[16px] text-[#787878] font-normal">{selectProduct.ProductDescription.split(' ').slice(7).join(' ')}</div>
                                <div className="mt-8">
                                    <div className="flex space-x-6 text-[16px] text-[#5E5E5E] font-medium " ><div>Brand:</div><div className="text-black">{selectProduct.Brand}</div></div>
                                    <div className="flex space-x-6 text-[16px] text-[#5E5E5E] font-medium  "><div>Quantity:</div><div className="text-black">{selectProduct.Quantity}</div></div>
                                    <div className="flex space-x-6 text-[16px] text-[#5E5E5E] font-medium " ><div>Price:</div><div className="text-black">{selectProduct.Price}</div></div>

                                </div>
                            </div>
                        </div>
                        <div className="flex mt-4">

                        </div>
                    </div>
                </div>
            )}

        </div>

    );
}

export default Product;
