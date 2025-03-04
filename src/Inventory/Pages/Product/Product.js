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

function Product() {
    const [checkedItems, setCheckedItems] = useState({});
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [activeTab, setActiveTab] = useState("New orders");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderToDelete, setOrderToDelete] = useState(null);
    const [hoverAction, setHoverAction] = useState(null)





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
        { ProductId: 1, Price: "AED 240", ProductDetailems: "Multivitamin Vitamin Healthkart Tablet", Quantity: "100ml", payment: "COD", invoice: "CT/12/2544", status: 'In Stock' },
        { ProductId: 2, Price: "AED 360", ProductDetailems: "Multivitamin Vitamin Healthkart Tablet", Quantity: "100ml", payment: "Online", invoice: "CT/12/2545", status: "Out of Stock" },

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

    return (
        <div className="bg-[#f7f7f7] w-full min-w-max min-h-svh h-full">
            <div className="h-[72px]"></div>
            <div className="ml-[242px] bg-[#f7f7f7] px-6 py-8">
                <div className="flex items-center justify-between">
                    <div className=""> <div className="text-[20px] leading-[24px] font-medium">Product Management</div></div>
                    <div className="flex">
                        <div className="border rounded-lg  py-[13px] px-[16px] justify-center items-center text-[14px] font-normal text-white bg-[#415BAD] hover:bg-[#304BA0] flex ">
                            <img className="mr-2" src={AddButn} alt="" />
                            Add Product
                        </div>
                        <div className=" border border-[#D5D5D5] rounded-lg justify-center items-center py-[13px] px-4 text-[#696A70] flex ml-4">
                            <img className="mr-2 w-4 h-4" src={imprt} alt="" />
                            Import
                        </div>

                    </div>
                </div>
                <div className="bg-white p-6 mt-8 rounded-lg h-full min-h-svh">
                    <div className="flex justify-between">
                        <div className="flex">
                            <div className="border rounded-lg items-center w-[584px] py-[12px] pl-4 text-[#696A70] flex">
                                <img className="mr-2 w-4 h-4" src={SearchIcon} alt="" />
                                <input type="text" placeholder="Search" className="outline-none w-full" />
                            </div>
                            <div className="border rounded-lg w-[96px] py-[14px] pl-4 text-[#696A70] flex ml-4">
                                <img className="mr-2" src={FilterIcon} alt="" />
                                <input type="text" placeholder="Filter" className="outline-none w-full" />
                            </div>
                        </div>
                        <div className="border rounded-lg py-[14px] px-4 text-[#2C2B2B] flex ml-4">
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
                                    {orders.map(({ ProductId, Price, ProductDetailems, Quantity, status }) => (
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
                                            <td className="p-4 font-medium text-center justify-between items-start flex text-sm">
                                                <button
                                                    onClick={() => handleDeleteClick(ProductId)}
                                                    onMouseEnter={() => setHoverAction(`delete- ${ProductId}`)}
                                                    onMouseLeave={() => setHoverAction(null)}
                                                >
                                                    <img src={hoverAction === `delete- ${ProductId}` ? Delete : deleteBlack} alt="delete" />
                                                </button>
                                                <button
                                                    onMouseEnter={() => setHoverAction(`edit- ${ProductId}` )}
                                                    onMouseLeave={() => setHoverAction(null)}
                                                >
                                                    <img src={hoverAction === `edit- ${ProductId}` ? eyeIconBlue : eyeIconBlack} alt="" />
                                                </button>
                                                <button
                                                    onMouseEnter={() => setHoverAction(`view- ${ProductId}`)}
                                                    onMouseLeave={() => setHoverAction(null)}
                                                >
                                                    <img src={hoverAction === `view- ${ProductId}` ? editBlue : editBlack} alt="" />
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
        </div>
    );
}

export default Product;
