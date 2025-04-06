import React, { useEffect, useState } from "react";
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
import Api from "../../Services/Api";

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
    const [orders, setOrders] = useState([])
    const [refreshKey, setRefreshKey] = useState(0);





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



    const statusStyles = {
        'In Stock': "text-[#29860A] bg-[#E1FDD7]",
        "Out of Stock": "text-[#FF0000] bg-[#FFE7E7]",
    };

    // const tabs = ["New orders", "Ongoing", "Dispatched", "Delivered", "Cancelled"];

    const handleDeleteClick = (id) => {
        console.log("idd", id)
        setOrderToDelete(id);
        setIsModalOpen(true);
    };

    useEffect(() => {
        Api.get('api/products/products')

            .then((response) => {
                console.log("oder list", response.data)
                setOrders(response.data)



            })
            .catch((error) => {
                console.log("error", error)

            })
    }, [refreshKey])

    const confirmDelete = () => {
        Api.delete(`api/products/${orderToDelete}`)
            .then(response => {
                console.log("response", response)
                if (response.status === 204 || response.status === 200) {
                    console.log(`Product with ID ${orderToDelete} deleted.`);
                    setIsModalOpen(false);
                    setOrderToDelete(null);
                    setRefreshKey(prev => prev + 1);
                    // setOrders(orders.filter(order => order.id !== orderToDelete));
                } else {
                    console.error("Failed to delete the product.");
                }
            })

    };

    const handleViewModal = (product) => {
        setSelectProduct(product)
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
                    <div>
                        <div className="">
                            <div className="flex justify-between items-center">
                                <div className=" flex">
                                    <div className= "border hover:border-[#8F8F8F] focus-within:border-[#8F8F8F] rounded-lg items-center w-[584px] py-[12px] pl-4 text-[#2C2B2B] flex">
                                        <img className="mr-2 w-4 h-4" src={SearchIcon} alt="" />
                                        <input type="text" placeholder="Search" className="outline-none w-full" />
                                    </div>
                                  
                                    

                                    <button className="border hover:border-[#8F8F8F] focus-within:border-[#8F8F8F] rounded-lg w-[96px] py-[14px] pl-4 text-black flex ml-4">

                                        {/* <div className="border rounded-lg w-[96px] py-[14px] pl-4 text-[#696A70] flex ml-4">
    
                                    <img className="mr-2" src={FilterIcon} alt="" />
                                    <input type="text" placeholder="Filter" className="outline-none w-full" />
                                </div> */}
                                        <img className="mr-2" src={FilterIcon} alt="" />
                                        Filter
                                    </button>
                                </div>
                                <div >
                                    <div className="border hover:border-[#8F8F8F] rounded-lg py-[14px] px-4 text-[#2C2B2B] flex ml-4 cursor-pointer">
                                        <img className="mr-2" src={Export} alt="" />
                                        Export
                                    </div>
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
                                            {orders.map((product, index) => (
                                                <tr key={index}>
                                                    <td className="p-4 font-medium text-start text-sm flex items-center">
                                                        <img src= {checkedItems[product.id] ? checkedBox : checkBox} className="mr-4 cursor-pointer" alt="select" onClick={() => toggleCheckbox(product.id)} />
                                                        {product.id}   
                                                    </td>
                                                    <td className="p-4 font-medium text-start text-sm">{product.name}</td>
                                                    <td className="p-4 font-medium text-start text-sm">AED  {product.price}</td>
                                                    <td className="p-4 font-medium text-start text-sm">{product.stockQuantity}</td>
                                                    <td className="p-4 font-normal text-start text-[12px]">
                                                        <button className={`py-1 px-4 rounded-lg ${product.stockLow ? 'Out of Stock text-[#FF0000] bg-[#FFE7E7]' : 'In Stock text-[#29860A] bg-[#E1FDD7]'}`}>
                                                            {product.stockLow ? 'Out of Stock' : 'In Stock'}
                                                        </button>
                                                    </td>

                                                    <td className="p-4 font-medium text-center justify-between items-start flex text-sm relative">
                                                        <button
                                                            onClick={() => handleViewModal(product)}
                                                            onMouseEnter={() => setHoverAction(`edit-${product.id}`)}
                                                            onMouseLeave={() => setHoverAction(null)}
                                                            className="relative"
                                                        >
                                                            <img src={hoverAction === `edit-${product.id}` ? eyeIconBlue : eyeIconBlack} alt="View" />
                                                            {hoverAction === `edit-${product.id}` && (
                                                                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                                                                    View
                                                                </span>
                                                            )}
                                                        </button>

                                                        <button
                                                            onClick={() => handleDeleteClick(product.id)}
                                                            onMouseEnter={() => setHoverAction(`delete-${product.id}`)}
                                                            onMouseLeave={() => setHoverAction(null)}
                                                            className="relative"
                                                        >
                                                            <img src={hoverAction === `delete-${product.id}` ? Delete : deleteBlack} alt="Delete" />
                                                            {hoverAction === `delete-${product.id}` && (
                                                                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                                                                    Delete
                                                                </span>
                                                            )}
                                                        </button>

                                                        <button
                                                            onMouseEnter={() => setHoverAction(`view-${product.id}`)}
                                                            onMouseLeave={() => setHoverAction(null)}
                                                            className="relative"
                                                        >
                                                            <img src={hoverAction === `view-${product.id}` ? editBlue : editBlack} alt="Edit" />
                                                            {hoverAction === `view-${product.id}` && (
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
                                    <img className="w-[210px] h-[210px] " src={selectProduct.imageUrls[0]} alt="" />
                                </div>
                                <div className='ml-10'>

                                    <div className="text-[16px] font-medium"> {selectProduct.name}</div>
                                    <div className="text-[16px] text-[#787878] font-normal mt-2">{selectProduct.description}</div>
                                    <div className="text-[16px] text-[#787878] font-normal">{ }</div>
                                    <div className="mt-8">
                                        <div className="flex space-x-6 text-[16px] text-[#5E5E5E] font-medium " ><div>Brand:</div><div className="text-black">{selectProduct.brand}</div></div>
                                        <div className="flex space-x-6 text-[16px] text-[#5E5E5E] font-medium  "><div>Quantity:</div><div className="text-black">{selectProduct.stockQuantity}</div></div>
                                        <div className="flex space-x-6 text-[16px] text-[#5E5E5E] font-medium " ><div>Price:</div><div className="text-black">{selectProduct.price}</div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-4">
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>

    );
}

export default Product;