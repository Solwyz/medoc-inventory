import React, { useState, useEffect } from "react";
import SearchIcon from "../../Assets/common/Search Icon.svg";
import FilterIcon from "../../Assets/common/filter_alt.svg";
import Export from "../../Assets/orderSection/Export.svg";
import OrderListIsEmpty from "../../Assets/orderSection/illo.svg";
import Api from "../../Services/Api";
function Orders() {
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState("New orders");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderStatus, setOrderStatus] = useState("");

  const tabs = [
    "New orders",
    "Pending",
    "Ongoing",
    "Completed",
    "Cancelled",
    "Return",
  ];

  useEffect(() => {
    fetchOrders(activeTab);
  }, [activeTab]);

  const statusMap = {
    "New orders": "NEW_ORDERS",
    Pending: "PENDING",
    Ongoing: "ONGOING",
    Completed: "COMPLETED",
    Cancelled: "CANCELLED",
    Return: "RETURN",
  };

  const fetchOrders = async (status) => {
    try {
      const apiStatus = statusMap[status] || "NEW_ORDERS";
      const url =
        apiStatus === "NEW_ORDERS"
          ? "api/order"
          : `api/order/status/${apiStatus}`;
      const response = await Api.get(url);
      console.log("API Response:", response.data); // Debugging
      setOrders(Array.isArray(response.data.data) ? response.data.data : []);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setOrders([]);
    }
  };

  const openModal = (order) => {
    setSelectedOrder(order);
    setOrderStatus(order.status);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const updateOrderStatus = async () => {
    try {
      await Api.post(`/api/order/${selectedOrder.id}`, { status: orderStatus });
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === selectedOrder.id
            ? { ...order, status: orderStatus }
            : order
        )
      );
      closeModal();
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <div className="bg-[#f7f7f7] w-full min-w-max min-h-svh h-full">
      <div className="h-[72px]"></div>
      <div className="ml-[242px] bg-[#f7f7f7] px-6 py-8">
        <div className="text-[20px] leading-[24px] font-medium">
          Order Management
        </div>
        <div className="bg-white p-6 mt-8 rounded-lg  min-h-svh">
          <div className="flex justify-between">
            <div className="flex">
              <div className="relative w-[584px]">
                <input
                  type="text"
                  placeholder="Search Product, Product ID"
                  className="border border-[#D5D5D5] focus:outline-[#75689C] text-[#696A70] text-sm font-normal rounded-lg p-2 pl-10 w-full h-[48px]"
                />
                <img
                  src={SearchIcon}
                  alt="Search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                />
              </div>
              <button className="border border-[#D5D5D5] hover:border-[#8F8F8F] flex items-center font-normal text-sm text-[#2C2B2B] p-2 ml-2 rounded-lg w-[87px] h-[48px]">
                <img src={FilterIcon} className="mr-2" alt="Filter" /> Filter
              </button>
            </div>
            <button className="bg-white border border-[#D5D5D5] hover:border-[#8F8F8F] flex items-center font-normal text-sm px-4 py-3 rounded-lg">
              <img src={Export} className="mr-2 w-4 h-4" alt="" /> Export
            </button>
          </div>
          <div className="bg-[#F0F0F0] px-1 py-1 w-fit mt-8 rounded-lg ">
            <div className="flex">
              {tabs.map((tab) => (
                <div
                  key={tab}
                  className={`px-6 py-2 cursor-pointer font-normal text-sm rounded-lg ${
                    activeTab === tab ? "bg-white" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>
          {orders.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-[214px]">
              <img
                src={OrderListIsEmpty}
                alt="Empty Order List"
                className="w-[156px] h-[87px]"
              />
              <h1 className="text-[14px] font-normal mt-1 text-[#696A70]">
                Your order list is empty
              </h1>
            </div>
          ) : (
            <div className="mt-4">
              <table className="w-full text-left text-[14px] border  font-normal border-collapse">
                <thead className="bg-[#F0F0F0] h-10 border-b border-[#D6D6D6]">
                  <tr className="text-sm font-medium text-[#2F3139]">
                    <th className="px-4 font-medium text-[#2F3139]  py-2 rounded-tl-lg">
                      Order ID
                    </th>
                    <th className="px-4 font-medium text-[#2F3139]  py-2">
                      Date
                    </th>
                    <th className="px-4 font-medium text-[#2F3139]  py-2">
                      Product
                    </th>
                    <th className="px-4 font-medium text-[#2F3139]  py-2">
                      Item
                    </th>
                    <th className="px-4 font-medium text-[#2F3139]  py-2">
                      Payment Mode
                    </th>
                    <th className="px-4 font-medium text-[#2F3139]  py-2">
                      Expected Delivery
                    </th>
                    <th className="px-4 font-medium rounded-tr-lg text-[#2F3139]  py-2">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      onClick={() => openModal(order)}
                      className="border-b h-[56px]  items-center hover:bg-[#F6F6F6] text-sm"
                    >
                      <td className="px-4 py-2">{order.orderId}</td>
                      <td className="px-4 py-2">{order.orderDate}</td>
                      <td className="px-4 py-2">
                        {order.orderItems.length > 0
                          ? order.orderItems
                              .map((item) => item.product.name)
                              .join(", ")
                          : order.user.cart.length > 0
                          ? order.user.cart
                              .map((item) => item.product.name)
                              .join(", ")
                          : "No Items"}
                      </td>
                      <td className="px-4 py-2">
                        {order.orderItems.length > 0
                          ? order.orderItems
                              .map((item) => `${item.quantity}`)
                              .join(", ")
                          : order.user.cart.length > 0
                          ? order.user.cart
                              .map((item) => `${item.quantity}`)
                              .join(", ")
                          : "No Items"}
                      </td>
                      <td className="px-4 py-2">{order.paymentMode}</td>
                      <td className="px-4 py-2">{order.expectedDelivery}</td>
                      <td className="px-4 py-2">{order.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-lg font-semibold">Order Details</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <p>
                <strong>Product Name:</strong>{" "}
                {selectedOrder.user.wishlist[0]?.product?.name}
              </p>
              <p>
                <strong>Order ID:</strong> {selectedOrder.orderId}
              </p>
              <p>
                <strong>Date of Order:</strong> {selectedOrder.orderDate}
              </p>
              <p>
                <p>
                  <strong>Items:</strong>{" "}
                  {selectedOrder?.orderItems?.length > 0
                    ? selectedOrder.orderItems
                        .map((item) => `${item.quantity}`)
                        .join(", ")
                    : selectedOrder?.user?.cart?.length > 0
                    ? selectedOrder.user.cart
                        .map((item) => `${item.quantity}`)
                        .join(", ")
                    : "No Items"}
                </p>
              </p>
              <p>
                <strong>Payment Mode:</strong> {selectedOrder.paymentMode}
              </p>
              <p>
                <strong>Expected Delivery:</strong>{" "}
                {selectedOrder.expectedDelivery}
              </p>
              <p>
                <strong>Amount:</strong> AED {selectedOrder.amount}
              </p>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">
                Order Status
              </label>
              <select
                value={orderStatus}
                onChange={(e) => setOrderStatus(e.target.value)}
                className="w-full p-2 border rounded-lg text-sm"
              >
                <option value="Pending">Pending</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 rounded-lg text-sm"
              >
                Cancel
              </button>
              <button
                onClick={updateOrderStatus}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm"
              >
                Save Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
