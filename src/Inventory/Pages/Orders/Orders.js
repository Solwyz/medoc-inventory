import React, { useState } from "react";
import SearchIcon from "../../Assets/common/Search Icon.svg";
import FilterIcon from "../../Assets/common/filter_alt.svg";
import Export from "../../Assets/orderSection/Export.svg";
import checkBox from "../../Assets/orderSection/Vector (1).svg";
import checkedBox from "../../Assets/orderSection/Rectangle 908.svg";
import Delete from "../../Assets/orderSection/delete (1).svg";
import OrderListIsEmpty from "../../Assets/orderSection/illo.svg";
import DeleteIcon from "../../Assets/orderSection/Featured icon.svg";

function Orders() {
  const [checkedItems, setCheckedItems] = useState({});
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [activeTab, setActiveTab] = useState("New orders");
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
    orders.forEach(({ id }) => {
      updatedCheckedItems[id] = newCheckedState;
    });

    setCheckedItems(updatedCheckedItems);
  };


  const orders = [
    { id: 1, orderId: "652542", date: "17 Jan, 2025", products: "Face cream-120ml", items:"30", amount: "AED 240", payment: "COD",  expectedDelivey: "17 Jan, 2025", status: "Complete" },
    { id: 2, orderId: "652543", date: "18 Jan, 2025", products: "Face cream-120ml", items:"30", amount: "AED 360", payment: "Paid",  expectedDelivey: "17 Jan, 2025", status: "Ongoing" },
    { id: 3, orderId: "652544", date: "19 Jan, 2025", products: "Face cream-120ml", items:"30", amount: "AED 120", payment: "COD",  expectedDelivey: "17 Jan, 2025", status: "Pending" },
  ];

  const statusStyles = {
    Complete: "text-[#29860A] bg-[#E1FDD7]",
    Ongoing: "text-[#BD7416] bg-[#FFF3E4]",
    Pending: "text-[#FF0000] bg-[#FFE7E7]",
  };

  const tabs = ["New orders", "Pending", "Ongoing", "Completed", "Cancelled", "Return"];

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
        <div className="text-[20px] leading-[24px] font-medium">Order Management</div>
        <div className="bg-white p-6 mt-8 rounded-lg h-full min-h-svh">
          <div className="flex justify-between">
            <div className="flex">
              <div className="border hover:border-[#8F8F8F] focus-within:border-[#8F8F8F] rounded-lg items-center w-[584px] py-[12px] pl-4 text-[#2C2B2B] flex">
                <img className="mr-2 w-4 h-4" src={SearchIcon} alt="" />
                <input type="text" placeholder="Search" className="outline-none w-full" />
              </div>

              <div className="border hover:border-[#8F8F8F] focus-within:border-[#8F8F8F] rounded-lg w-[96px] py-[14px] pl-4 text-[#2C2B2B] flex ml-4 ">
                <img className="mr-2" src={FilterIcon} alt="" />
                <input type="text" placeholder="Filter" className="outline-none w-full placeholder:text-[#2C2B2B]" />
              </div>

              {/* <div className="border rounded-lg w-[96px] py-[14px] pl-4 text-[#696A70] flex ml-4">
                <img className="mr-2" src={FilterIcon} alt="" />
                <input type="text" placeholder="Filter" className="outline-none w-full" />
              </div> */}

            </div>
            <div className="border hover:border-[#8F8F8F]  rounded-lg py-[14px] px-4 text-[#2C2B2B] flex ml-4">
              <img className="mr-2" src={Export} alt="" />
              Export
            </div>
          </div>

          <div className="bg-[#F0F0F0] px-1 py-1 w-fit mt-8 rounded-lg ">
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
                    <th className="p-4 font-medium text-center text-sm flex items-center"> Order ID</th>
                    <th className="p-4 font-medium text-center text-sm">Date</th>
                    <th className="p-4 font-medium text-center text-sm">Product</th>
                    <th className="p-4 font-medium text-center text-sm">Item</th>
                    <th className="p-4 font-medium text-center text-sm">Payment Mode</th>

                    <th className="p-4 font-medium text-center text-sm">Expected Delivery</th>
                    <th className="p-4 font-medium text-center text-sm">Amount</th>
                    {/* <th className="p-4 font-medium text-center text-sm">Action</th> */}

                    {/* <th className="p-4 font-medium text-center text-sm">Invoice ID</th>
                    <th className="p-4 font-medium text-center text-sm">Status</th> */}

                  </tr>
                </thead>
                <tbody>
                  {orders.map(({ id, orderId, date, products, items,expectedDelivey, amount, payment, invoice, status }) => (
                    <tr key={id}>
                      <td className="p-4 font-medium text-center text-sm flex items-center">{orderId}</td>
                      <td className="p-4 font-medium text-center text-sm">{date}</td>
                      <td className="p-4 font-medium text-center text-sm">{products}</td>
                      <td className="p-4 font-medium text-center text-sm">{items}</td>
                      <td className="p-4 font-medium text-center text-sm">{payment}</td>
                      <td className="p-4 font-medium text-center text-sm">{expectedDelivey}</td>
                      <td className="p-4 font-medium text-center text-sm">{amount}</td>
                      {/* <td className="p-4 font-normal text-center text-[12px]">
                        <button className={`py-1 px-4 rounded-lg ${statusStyles[status]}`}>{status}</button>

                      </td> */}
                      {/* <td className="p-4 font-medium text-center text-sm">
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

export default Orders;
