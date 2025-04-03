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
    const [isModal2Open, setIsModal2Open] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
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

    const handleCreateSupplierClick = () => {
        setIsModalOpen(true)
    }

    const handleCreateCustomerClick = () => {
        setIsModal2Open(true);
    }

    const handleDeleteClick = () => {
        setDeleteModal(true);
    }

    const confirmDelete = () => {
        setDeleteModal(false);
    }

    return (
        <div className="bg-[#f7f7f7] w-full  min-h-svh h-full">
            <div className="h-[72px]"></div>
            <div className="ml-[242px] bg-[#f7f7f7] px-6 py-8">
                <div className="flex items-center justify-between">
                    <div className="text-[20px] leading-[24px] font-medium">Supplier and Customer</div>
                    <div className="flex bg-[#415BAD] w-[123px] h-[40px] rounded-lg items-center justify-center gap-2 text-white hover:cursor-pointer hover:bg-[#304BA0]" onClick={activeTab === 'Supplier'? handleCreateSupplierClick : handleCreateCustomerClick}>
                        <div><img className="h-4 w-4" src={addIcon}></img></div>
                        <div className="text-[14px] font-normal">Create new</div>
                    </div>
                </div>
                <div className="bg-white pt-6 px-6 mt-8 rounded-t-lg h-full">
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

                        <div className="border border-[#FF0000] rounded-lg w-fit h-fit py-3 px-4 text-[#FF0000] flex ml-4 hover:cursor-pointer" onClick={handleDeleteClick}>
                            <img className="mr-2" src={DeleteIcon2} alt="" />
                            Delete
                        </div>

                    </div>
                </div>

                <div className="bg-white pb-6 px-6 w rounded-b-lg h-full min-h-svh  overflow-x-auto w-min-[1854px] w-full">



                    {activeTab === "Supplier" && (
                        <div className="w-full overflow-x-auto h-svh">
                            <div className="min-w-[1800px]">
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
                                                    <th className="p-3 font-medium text-center text-sm">Contract End Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {products.map(({ id, supplierId, supplierName, productName, companyName, contactPerson, phone, email, taxID, state, accountNumber, contractStartDate, contractEndDate }) => (
                                                    <tr key={id}>
                                                        <td className="p-3 font-medium text-center text-sm flex items-center">
                                                            <img
                                                                src={checkedItems[id] ? checkedBox : checkBox}
                                                                className="mr-4 cursor-pointer"
                                                                alt=""
                                                                onClick={() => toggleCheckbox(id)}
                                                            />
                                                            {supplierId}
                                                        </td>
                                                        <td className="p-3 font-medium text-center text-sm">{supplierName}</td>
                                                        <td className="p-3 font-medium text-center text-sm">{productName}</td>
                                                        <td className="p-3 font-medium text-center text-sm">{companyName}</td>
                                                        <td className="p-3 font-medium text-center text-sm">{contactPerson}</td>
                                                        <td className="p-3 font-medium text-center text-sm">{phone}</td>
                                                        <td className="p-3 font-medium text-center text-sm">{email}</td>
                                                        <td className="p-3 font-medium text-center text-sm">{taxID}</td>
                                                        <td className="p-3 font-medium text-center text-sm">{state}</td>
                                                        <td className="p-3 font-medium text-center text-sm">{accountNumber}</td>
                                                        <td className="p-3 font-medium text-center text-sm">{contractStartDate}</td>
                                                        <td className="p-3 font-medium text-center text-sm">{contractEndDate}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}


                    {activeTab === "Customer" && (

                        <div className="w-full overflow-x-auto h-svh">
                           <div className="min-w-[1800px]">
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
                                                        Customer Name
                                                    </th>
                                                    <th className="p-3 font-medium text-center text-sm">Company Name</th>
                                                    <th className="p-3 font-medium text-center text-sm">Contact Person Name</th>
                                                    <th className="p-3 font-medium text-center text-sm">Phone Number</th>
                                                    <th className="p-3 font-medium text-center text-sm">Email Address</th>
                                                    <th className="p-3 font-medium text-center text-sm">Product Name</th>
                                                    <th className="p-3 font-medium text-center text-sm">Company Name</th>
                                                    <th className="p-3 font-medium text-center text-sm">State</th>
                                                    <th className="p-3 font-medium text-center text-sm">GST / Tax ID</th>
                                                    <th className="p-3 font-medium text-center text-sm">Account Number</th>
                                                    <th className="p-3 font-medium text-center text-sm">Contract Start Date</th>
                                                    <th className="p-3 font-medium text-center text-sm">Contract Expiry Date</th>
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
                    )}

                </div>
            </div>

            {/* Confirmation Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
                    <div className="bg-white shadow-lg w-auto h-auto">
                        <div className=" bg-[#DEE2EF] p-6 flex items-center justify-between">
                            <div className="font-medium text-[16px]">Add new Supplier</div>
                            <div><img className="w-[13px] h-[13px] hover:cursor-pointer" src={closeIcon} onClick={() => setIsModalOpen(false)}></img></div>
                        </div>
                        <div className="p-6">
                            <div className="flex gap-6">
                                <div className="">
                                    <div className="text-[14px] font-normal">Supplier Name</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[250px] h-[48px]"
                                        placeholder="Enter Supplier name"></input>
                                </div>
                                <div className="">
                                    <div className="text-[14px] font-normal">Product Name</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[372px] h-[48px]"
                                        placeholder="Enter Product name"></input>
                                </div>

                            </div>

                            <div className="flex gap-6 mt-6">
                                <div className="">
                                    <div className="text-[14px] font-normal">Company Name</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[250px] h-[48px]"
                                        placeholder="Enter Product ID"></input>
                                </div>
                                <div className="">
                                    <div className="text-[14px] font-normal">Contact person name</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[250px] h-[48px]"
                                        placeholder="Enter Product ID"></input>
                                </div>
                                <div className="">
                                    <div className="text-[14px] font-normal">Phone number</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[250px] h-[48px]"
                                        placeholder="Enter Product ID"></input>
                                </div>

                            </div>

                            <div className="flex gap-6 mt-6">
                                <div className="">
                                    <div className="text-[14px] font-normal">Email Address</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[250px] h-[48px]"
                                        placeholder="Enter SKU ID"></input>
                                </div>
                                <div className="">
                                    <div className="text-[14px] font-normal">GST/TAX ID</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[250px] h-[48px]"
                                        placeholder="Enter Stock quantity"></input>
                                </div>
                                <div className="">
                                    <div className="text-[14px] font-normal">State</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[250px] h-[48px]"
                                        placeholder="Enter Stock quantity"></input>
                                </div>
                            </div>

                            <div className="flex gap-6 mt-6">
                                <div className="">
                                    <div className="text-[14px] font-normal">Account Number</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[250px] h-[48px]"
                                        placeholder="Enter SKU ID"></input>
                                </div>
                                <div className="">
                                    <div className="text-[14px] font-normal">Contract Start Date</div>
                                    <input type="date"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[250px] h-[48px]">
                                    </input>
                                </div>
                                <div className="">
                                    <div className="text-[14px] font-normal">Contract End Date</div>
                                    <input type="date"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[250px] h-[48px]">
                                    </input>
                                </div>
                            </div>


                            <div className="flex gap-4 mt-12 justify-end">
                                <button className="px-[16px] py-[12px] border-[1px] rounded-lg mr-2" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button className="px-[16px] py-[12px] bg-[#6C55B2] hover:bg-[#4a3588] text-[#FFFFFF] rounded-lg">Add Supplier</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {/* Confirmation Modal 2*/}
            {isModal2Open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
                    <div className="bg-white shadow-lg w-auto h-auto">
                        <div className=" bg-[#DEE2EF] p-6 flex items-center justify-between">
                            <div className="font-medium text-[16px]">Add new Customer</div>
                            <div><img className="w-[13px] h-[13px] hover:cursor-pointer" src={closeIcon} onClick={() => setIsModal2Open(false)}></img></div>
                        </div>
                        <div className="p-6">
                            <div className="flex gap-6">
                                <div className="">
                                    <div className="text-[14px] font-normal">Customer Name</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[250px] h-[48px]"
                                        placeholder="Enter Customer name"></input>
                                </div>
                                <div className="">
                                    <div className="text-[14px] font-normal">Company Name</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[372px] h-[48px]"
                                        placeholder="Enter Company name"></input>
                                </div>

                            </div>

                            <div className="flex gap-6 mt-6">

                                <div className="">
                                    <div className="text-[14px] font-normal">Contact person name</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[250px] h-[48px]"
                                        placeholder="Enter Contact person name"></input>
                                </div>
                                <div className="">
                                    <div className="text-[14px] font-normal">Phone number</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[250px] h-[48px]"
                                        placeholder="Enter Phone number"></input>
                                </div>
                                <div className="">
                                    <div className="text-[14px] font-normal">Email Address</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[250px] h-[48px]"
                                        placeholder="Enter Email ID"></input>
                                </div>

                            </div>

                            <div className="flex gap-6 mt-6">
                                <div className="">
                                    <div className="text-[14px] font-normal">State</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[250px] h-[48px]"
                                        placeholder="Enter State"></input>
                                </div>

                                <div className="">
                                    <div className="text-[14px] font-normal">GST/TAX ID</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[250px] h-[48px]"
                                        placeholder="Enter GST/TAX ID"></input>
                                </div>

                                <div className="">
                                    <div className="text-[14px] font-normal">Account Number</div>
                                    <input type="text"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[250px] h-[48px]"
                                        placeholder="Enter Account number"></input>
                                </div>
                            </div>

                            <div className="flex gap-6 mt-6">

                                <div className="">
                                    <div className="text-[14px] font-normal">Contract Start Date</div>
                                    <input type="date"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[250px] h-[48px]">
                                    </input>
                                </div>
                                <div className="">
                                    <div className="text-[14px] font-normal">Contract End Date</div>
                                    <input type="date"
                                        className="border border-[#E0E0E0] focus:outline-none rounded-lg mt-2 p-4 w-[250px] h-[48px]">
                                    </input>
                                </div>
                            </div>


                            <div className="flex gap-4 mt-12 justify-end">
                                <button className="px-[16px] py-[12px] border-[1px] rounded-lg mr-2" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button className="px-[16px] py-[12px] bg-[#6C55B2] hover:bg-[#4a3588] text-[#FFFFFF] rounded-lg">Add Customer</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {/* Delete Modal */}
            {deleteModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[361px] h-[256px]">
                        <img className="w-12 h-12" src={DeleteIcon} alt="" />
                        <h1 className="mt-6 font-medium text-[16px]">Confirm  Delete</h1>
                        <h2 className="text-[14px] font-normal text-[#818180] mt-2">Are you sure you want to delete this Supplier?</h2>
                        <div className="flex  mt-4">
                            <button className="px-[52px] py-[14px] border-[1px] rounded-lg mr-2" onClick={() => setDeleteModal(false)}>Cancel</button>
                            <button className="px-[52px] py-[14px] bg-[#FFCFCF] hover:bg-[#FFA0A0] text-[#D41515] rounded-lg" onClick={confirmDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Orders;
