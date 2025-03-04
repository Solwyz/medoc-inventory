import React, { useState } from "react";
import SearchIcon from "../../Assets/common/Search Icon.svg";
import FilterIcon from "../../Assets/common/filter_alt.svg";
import addIcon from "../../Assets/common/Add.svg";
import closeIcon from "../../Assets/common/close (2).svg";
import Export from "../../Assets/orderSection/Export.svg";
import checkBox from "../../Assets/orderSection/Vector (1).svg";
import checkedBox from "../../Assets/orderSection/Rectangle 908.svg";
import Delete from "../../Assets/orderSection/delete (1).svg";
import OrderListIsEmpty from "../../Assets/orderSection/illo.svg";
import DeleteIcon from "../../Assets/orderSection/Featured icon.svg";
import DeleteIcon2 from "../../Assets/common/delete.svg";

function Orders() {
    const [checkedItems, setCheckedItems] = useState({});
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [activeTab, setActiveTab] = useState("Supplier");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderToDelete, setOrderToDelete] = useState(null);



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
        products.forEach(({ id }) => {
            updatedCheckedItems[id] = newCheckedState;
        });

        setCheckedItems(updatedCheckedItems);
    };


    const products = [
        { id: 1, supplierId: "652542", supplierName: "Multivitamin Vitamin Healthkart", productName: "KIt Kat jncwcn jnkcnwcnwn", companyName: "Solwyz Tech", contactPerson: "Sujieendran", phone: "75861642615", email: "richard@gmail.com", taxID: "GST-51520221451", state: "Ajman", accountNumber: "99965248151120", contractStartDate: "25/08/2024", contractEndDate: "", supplier: "Li-Med Labs", totalAmount: "AED 200", status: "Instock", purchaseOrderId: "AED 200" },
        { id: 2, supplierId: "652543", supplierName: "Multivitamin Vitamin Healthkart", productName: "KIt Kat jncwcn jnkcnwcnwn", companyName: "Solwyz Tech", contactPerson: "Sujieendran", phone: "75861642615", email: "richard@gmail.com", taxID: "GST-51520221451", state: "Ajman", accountNumber: "99965248151120", contractStartDate: "25/08/2024", contractEndDate: "", supplier: "Li-Med Labs", totalAmount: "AED 200", status: "Instock", purchaseOrderId: "AED 200" },
        { id: 3, supplierId: "652544", supplierName: "Multivitamin Vitamin Healthkart", productName: "KIt Kat jncwcn jnkcnwcnwn", companyName: "Solwyz Tech", contactPerson: "Sujieendran", phone: "75861642615", email: "richard@gmail.com", taxID: "GST-51520221451", state: "Ajman", accountNumber: "99965248151120", contractStartDate: "25/08/2024", contractEndDate: "", supplier: "Li-Med Labs", totalAmount: "AED 200", status: "Pending", purchaseOrderId: "AED 200" },
    ];

    const statusStyles = {
        Instock: "text-[#29860A] bg-[#E1FDD7]",
        Ongoing: "text-[#BD7416] bg-[#FFF3E4]",
        Pending: "text-[#FF0000] bg-[#FFE7E7]",
    };

    const tabs = ["Supplier", "Customer"];

    const handleCreateClick = () => {
        setIsModalOpen(true);
    }

    return (
        <div className="bg-[#f7f7f7] w-full min-w-max  min-h-svh h-full">
            <div className="h-[72px]"></div>
            <div className="ml-[242px] bg-[#f7f7f7] px-6 py-8">
                <div className="flex items-center justify-between">
                    <div className="text-[20px] leading-[24px] font-medium">Supplier and Customer</div>
                    <div className="flex bg-[#415BAD] w-[123px] h-[40px] rounded-lg items-center justify-center gap-2 text-white hover:cursor-pointer hover:bg-[#304BA0]" onClick={handleCreateClick}>
                        <div><img className="h-4 w-4" src={addIcon}></img></div>
                        <div className="text-[14px] font-normal">Create new</div>
                    </div>
                </div>

                <div className="bg-white p-6 mt-8 rounded-lg h-full min-h-svh">

                    <div className="flex items-center justify-between">
                        <div>
                            <div className="bg-[#F0F0F0] px-1 py-1 w-fit rounded-lg">
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
                            </div>
                        </div>

                        <div className="border border-[#FF0000] rounded-lg w-fit h-fit py-3 px-4 text-[#FF0000] flex ml-4">
                            <img className="mr-2" src={DeleteIcon2} alt="" />
                            Delete
                        </div>

                    </div>



                    {products.length === 0 ? (
                        <div className="flex flex-col items-center justify-center mt-[214px]">
                            <img src={OrderListIsEmpty} alt="Empty Order List" className="w-[156px] h-[87px]" />
                            <h1 className="text-[14px] font-normal mt-1 text-[#696A70]">This list is empty</h1>
                        </div>
                    ) : (
                        <div className="mt-4">
                            <table className="w-full bg-white mt-4 border">
                                <thead className="bg-[#F0F0F0] px-6 py-4">
                                    <tr>
                                        <th className="p-3 font-medium text-center text-sm flex items-center">
                                            <img
                                                src={selectAllChecked ? checkedBox : checkBox}
                                                className="mr-4 cursor-pointer"
                                                alt="select all"
                                                onClick={toggleSelectAll}
                                            />
                                            Product ID
                                        </th>
                                        <th className="p-3 font-medium text-center text-sm">Supplier Name</th>
                                        <th className="p-3 font-medium text-center text-sm">Product Name</th>
                                        <th className="p-3 font-medium text-center text-sm">Company Name</th>
                                        <th className="p-3 font-medium text-center text-sm">Contact Person Name</th>
                                        <th className="p-3 font-medium text-center text-sm">Phone Number</th>
                                        <th className="p-3 font-medium text-center text-sm">Email Address</th>
                                        <th className="p-3 font-medium text-center text-sm">GST / Tax ID</th>
                                        <th className="p-3 font-medium text-center text-sm">State</th>
                                        <th className="p-3 font-medium text-center text-sm">Account Number</th>
                                        <th className="p-3 font-medium text-center text-sm">Contract Start Date</th>
                                        <th className="p-3 font-medium text-center text-sm">Contract end Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(({ id, supplierId, supplierName, productName, companyName, contactPerson, phone, email, taxID, state, accountNumber, contractStartDate, contractEndDate, supplier, totalAmount, status, purchaseOrderId }) => (
                                        <tr key={id}>
                                            <td className="p-3 font-medium text-center text-sm flex items-center">
                                                <img src={checkedItems[id] ? checkedBox : checkBox} className="mr-4" alt=""
                                                    onClick={() => toggleCheckbox(id)} />
                                                {supplierId}</td>
                                            <td className="p-3 font-medium text-center text-sm">{supplierName}</td>
                                            <td className="p-3 font-medium text-center text-sm">{productName}</td>
                                            <td className="p-3 font-medium text-center text-sm">{companyName}</td>
                                            <td className="p-3 font-medium text-center text-sm">{contactPerson}</td>
                                            <td className="p-3 font-medium text-center text-sm">{phone}</td>
                                            <td className="p-3 font-medium text-center text-sm">{email}</td>
                                            <td className="p-3 font-medium text-center text-sm">{taxID}</td>
                                            <td className="p-3 font-medium text-center text-sm">{state}</td>
                                            {/* <td className="p-3 font-normal text-center text-[12px]">
                                                <button className={`py-1 px-4 rounded-lg ${statusStyles[status]}`}>{status}</button>
                                            </td> */}
                                            <td className="p-3 font-medium text-center text-sm">{accountNumber}</td>
                                            <td className="p-3 font-medium text-center text-sm">{contractStartDate}</td>
                                            <td className="p-3 font-medium text-center text-sm">{contractEndDate}</td>
                                            {/* <td className="p-3 font-medium text-center text-sm">
                                                <button onClick={() => handleDeleteClick(id)}>
                                                    <img src={Delete} alt="delete" />
                                                </button>
                                            </td> */}
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
                    <div className="bg-white shadow-lg w-auto h-auto">
                        <div className=" bg-[#DEE2EF] p-6 flex items-center justify-between">
                            <div className="font-medium text-[16px]">Create Purchase Order</div>
                            <div><img className="w-[13px] h-[13px] hover:cursor-pointer" src={closeIcon} onClick={() => setIsModalOpen(false)}></img></div>
                        </div>
                        <div className="p-6">
                            <div className="flex gap-6">
                                <div className="">
                                    <div className="text-[14px] font-normal">Product Name</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[372px]"
                                        placeholder="Enter Product name"></input>
                                </div>
                                <div className="">
                                    <div className="text-[14px] font-normal">Supplier</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[372px]"
                                        placeholder="Enter Supplier name"></input>
                                </div>
                            </div>

                            <div className="flex gap-6 mt-6">
                                <div className="">
                                    <div className="text-[14px] font-normal">Product ID</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[372px]"
                                        placeholder="Enter Product ID"></input>
                                </div>
                                <div className="">
                                    <div className="text-[14px] font-normal">Category</div>
                                    <select
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[372px]">
                                        <option value="">Select Category</option>
                                        <option value="Food">Food</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex gap-6 mt-6">
                                <div className="">
                                    <div className="text-[14px] font-normal">SKU</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[372px]"
                                        placeholder="Enter SKU ID"></input>
                                </div>
                                <div className="">
                                    <div className="text-[14px] font-normal">Stock Quantity</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[372px]"
                                        placeholder="Enter Stock quantity"></input>
                                </div>
                            </div>

                            
                            <div className="flex  mt-12 justify-end">
                                <button className="px-[52px] py-[14px] border-[1px] rounded-lg mr-2" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button className="px-[52px] py-[14px] bg-[#6C55B2] hover:bg-[#4a3588] text-[#FFFFFF] rounded-lg">Place order</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Orders;
