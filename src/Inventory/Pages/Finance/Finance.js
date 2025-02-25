import React, { useState } from "react";
import loadingImg from "../../Assets/common/illo.svg";
import rightArrow from "../../Assets/common/rightArrow.svg";
import leftArrow from "../../Assets/common/leftArrow.svg";

function Finance() {
  const transactions = [
    // {
    //   id: "652542",
    //   date: "17 Jan, 2025",
    //   revenue: "AED 240",
    //   expense: "AED 240",
    //   profit: "AED 240",
    //   orderId: "0010021",
    //   paymentMode: "Online",
    //   status: "Complete",
    //   taxAmount: "AED 240",
    // },
    // {
    //   id: "652542",
    //   date: "17 Jan, 2025",
    //   revenue: "AED 240",
    //   expense: "AED 240",
    //   profit: "AED 240",
    //   orderId: "0010021",
    //   paymentMode: "Online",
    //   status: "Pending",
    //   taxAmount: "AED 240",
    // },
  ];
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(transactions.length / rowsPerPage) || 1;

  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="bg-[#f7f7f7] w-full min-w-max min-h-svh h-full">
      <div className="h-[72px]"></div>
      <div className="ml-[242px] px-6 py-8">
        <div className="text-[20px] text-[#2C2B2B] leading-[24px] font-medium">
          Transaction Management
        </div>
        <div className="bg-white p-6 mt-4 h-full min-h-svh overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#F0F0F0] h-10  ">
            {/* border border-[#D6D6D6] */}
              <tr >
                <th className="p-3 font-medium rounded-tl-lg text-[#2F3139] text-sm ">
                  Transaction ID
                </th>
                <th className="p-3 font-medium text-[#2F3139] text-sm">Date</th>
                <th className="p-3 font-medium text-[#2F3139] text-sm">
                  Revenue
                </th>
                <th className="p-3 font-medium text-[#2F3139] text-sm">
                  Expense
                </th>
                <th className="p-3 font-medium text-[#2F3139] text-sm">
                  Profit
                </th>
                <th className="p-3 font-medium text-[#2F3139] text-sm">
                  Order ID
                </th>
                <th className="p-3 font-medium text-[#2F3139] text-sm">
                  Payment Mode
                </th>
                <th className="p-3 font-medium text-[#2F3139] text-sm">
                  Status
                </th>
                <th className="p-3 font-medium text-[#2F3139] rounded-tr-lg text-sm">Tax</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length === 0 ? (
                <tr>
                  <td colSpan="9" className="text-center py-[200px]">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        src={loadingImg}
                        alt="No transactions"
                        className="w-[156px] h-[87px] mb-4"
                      />
                      <p className="text-[#050710] text-sm font-normal">
                        You have no transactions yet !!
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                paginatedTransactions.map((transaction, index) => (
                  <tr
                    key={index}
                    className="text-center border hover:bg-[#F6F6F6] border-[#E6E6E7]"
                  >
                    <td className="text-[#2C2B2B] text-sm py-5">
                      {transaction.id}
                    </td>
                    <td className="text-[#2C2B2B] text-sm py-5">
                      {transaction.date}
                    </td>
                    <td className="text-[#2C2B2B] text-sm py-5">
                      {transaction.revenue}
                    </td>
                    <td className="text-[#2C2B2B] text-sm py-5">
                      {transaction.expense}
                    </td>
                    <td className="text-[#2C2B2B] text-sm py-5">
                      {transaction.profit}
                    </td>
                    <td className="text-[#050710] text-sm py-5">
                      {transaction.orderId}
                    </td>
                    <td className="text-[#050710] text-sm py-5">
                      {transaction.paymentMode}
                    </td>
                    <td className="text-[#2C2B2B] text-sm py-5">
                      <span
                        className={
                          transaction.status === "Complete"
                            ? "text-[#29860A] bg-[#E1FDD7] text-sm rounded-lg py-1 px-4"
                            : "text-[#C61610] bg-[#FFE4E3] text-sm rounded-lg py-1 px-4"
                        }
                      >
                        {transaction.status}
                      </span>
                    </td>
                    <td className="text-[#2C2B2B] text-sm py-5">
                      {transaction.taxAmount}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className=""
            >
              <img src={rightArrow} alt="" />
            </button>
            <span className="px-4 py-2">
              {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className=""
            >
              <img src={leftArrow} alt="" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finance;
