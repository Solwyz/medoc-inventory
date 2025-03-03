import React, { useState } from "react";
import quantityIcon from "../../Assets/dashboard/Quantity.svg";
import overviewIcon from "../../Assets/dashboard/overview.svg";
import receivedIcon from "../../Assets/dashboard/On the way.svg";
import numberIcon from "../../Assets/dashboard/no of.svg";
import catIcon from "../../Assets/dashboard/cat.svg";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function Dashboard() {
  const [alerts, setAlerts] = useState([
    { name: "Tata Salt", remainingQuantity: 5, unit: "Packet" },
    { name: "Sugar", remainingQuantity: 5, unit: "Kg" },
    { name: "Rice", remainingQuantity: 20, unit: "Kg" },
    { name: "Rice", remainingQuantity: 5, unit: "Kg" },
  ]);

  const stockData = [
    { item: "Dermo skin care", soldQuantity: 40, remainingQuantity: 250, price: "AED 14" },
    { item: "Hydrating Face Cream", soldQuantity: 30, remainingQuantity: 150, price: "AED 20" },
    { item: "Vitamin C Serum", soldQuantity: 25, remainingQuantity: 100, price: "AED 35" },
    { item: "Aloe Vera Gel", soldQuantity: 50, remainingQuantity: 200, price: "AED 18" },
    { item: "Sunscreen SPF 50", soldQuantity: 45, remainingQuantity: 180, price: "AED 25" }
  ];

  const barData = {
    labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: false,
        data: [2.5, 3, 2.2, 2.8, 2.1, 3.2, 2.7],
        backgroundColor: "#4A3AFF",
        borderRadius: 8,
        barThickness: 16,
      },
    ],
  };
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          callback: (value) => `${value}M`,
        },
        grid: {
          display: true,
          drawBorder: true,
          borderDash: [0, 5],
        },
      },
    },
    barPercentage: 0.8, // Increases the height of bars
    categoryPercentage: 0.9, // Adjusts spacing between bars
  };

  const doughnutData = {
    labels: ["Dermocosmetics", "Skincare", "Haircare"],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ["#6283C0", "#8855B2", "#BDABF5"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%",
    plugins: {
      legend: {
        display: false,
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-[#f7f7f7] w-full min-w-max min-h-svh h-full">
      <div className="h-[72px]"></div>

      <div className="ml-[242px]  px-6 py-8">
        <div className="text-[20px] text-[#2C2B2B] leading-[24px] font-medium">
          Overview
        </div>

        <div className="flex">
          {/* Overview Cards */}

          <div>
            <div className="flex gap-6 mt-5  ">
              {["Total Earnings", "Total Shipment", "Total Orders"].map(
                (label, index) => (
                  <div
                    key={index}
                    className="bg-white p-4  w-[251px] h-[152px] rounded-lg shadow"
                  >
                    <img src={overviewIcon} className="w-10 h-10" alt="" />
                    <p className="font-light text-base mt-6">{label}</p>
                    <p className="font-medium text-[#304BA0] text-[24px] leading-5 mt-2">
                      AED 104,56
                    </p>
                  </div>
                )
              )}
            </div>

            {/* Charts Section */}
            <div className="mt-6 flex gap-6">
              <div className="bg-white p-4 w-[413px] h-[265px]  rounded-lg shadow">
                <h3 className="font-normal text-[18px] ">Revenue</h3>
                <div className="h-[193px]">
                  <Bar data={barData} options={barOptions} />
                </div>
              </div>
              <div className="bg-white p-4 w-[365px] h-[265px]  rounded-lg shadow">
                <h3 className="font-normal text-[18px] ">Product Selling</h3>
                <div style={{ height: "172px", width: "" }} className="mt-6">
                  <Doughnut data={doughnutData} options={options} />
                </div>
              </div>
            </div>

            <div className="bg-white w-full h-[374px] p-6 rounded-lg mt-6">
              <h3 className="font-normal text-[18px]">Top Selling Stock</h3>
              {stockData.length > 0 ? (
                <table className="w-full mt-8 border-collapse">
                  <thead>
                    <tr className="text-left  ">
                      <th className="text-base font-medium text-[#717171]">Item</th>
                      <th className="text-base font-medium text-[#717171]">Sold Quantity</th>
                      <th className="text-base font-medium text-[#717171]">Remaining Quantity</th>
                      <th className="text-base font-medium text-[#717171]">Price</th>
                    </tr>
                  </thead>
                  <tbody  >
                    {stockData.map((stock, index) => (
                      <tr key={index} className="border-b    ">
                        <td className="py-4 text-[#282828] text-base font-normal">{stock.item}</td>
                        <td className="py-4 text-[#282828] text-base font-normal">{stock.soldQuantity}</td>
                        <td className="py-4 text-[#282828] text-base font-normal">{stock.remainingQuantity}</td>
                        <td className="py-4 text-[#282828] text-base font-normal">{stock.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-gray-500 mt-4">No data available</p>
              )}
            </div>
          </div>

          {/* Alerts & Inventory Summary */}
          <div className="space-y-6 ml-6 mt-[20px]">
            <div className="bg-white p-4 rounded-lg w-[330px] h-[318px] shadow">
              <h3 className="font-medium text-[18px]">Alerts</h3>
              {alerts.length > 0 ? (
                alerts.map((alert, index) => (
                  <div
                    key={index}
                    className="flex items-center space-y-4  justify-between mt-4"
                  >
                    <h1 className="font-medium  text-base ">
                      {alert.name}
                      <p className="text-[#667085] font-normal text-sm">
                        Remaining Quantity: {alert.remainingQuantity}{" "}
                        {alert.unit}
                      </p>
                    </h1>
                    <div
                      className={`${
                        alert.remainingQuantity < 10
                          ? "text-[#AA3028] bg-[#FEECEB]"
                          : "text-[#2E7D32] bg-[#E8F5E9]"
                      } rounded-[16px] w-[50px] h-[22px] text-center text-xs font-medium flex items-center justify-center`}
                    >
                      {alert.remainingQuantity < 10 ? "Low" : "OK"}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm mt-2">
                  No alerts available
                </p>
              )}
            </div>

            <div className="bg-white p-4 rounded-lg w-[330px] h-[183px] l shadow">
              <h3 className="font-medium text-[18px]  ">Inventory Summary</h3>
              <div className="flex justify-between mt-8 px-3 ">
                <div className="items-center justify-center text-center">
                  <img
                    src={quantityIcon}
                    alt=""
                    className="w-[30px] h-[30px] mx-auto"
                  />
                  <h1 className="text-[#5C5B5B] font-semibold mt-2 ">868</h1>
                  <h2 className="text-[#444444] text-sm font-medium mt-1">
                    Quantity in Hand
                  </h2>
                </div>
                <div className="border border-[#E1E2E5]"></div>
                <div className="items-center justify-center text-center">
                  <img
                    src={receivedIcon}
                    alt=""
                    className="w-[30px] h-[30px] mx-auto"
                  />
                  <h1 className="text-[#5C5B5B] font-semibold mt-2 ">200</h1>
                  <h2 className="text-[#444444] text-sm font-medium mt-1">
                    To be received
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg w-[330px] h-[183px]  shadow">
              <h3 className="font-medium text-[18px]  ">Product Summary</h3>
              <div className="flex justify-between mt-8 ">
                <div className="items-center justify-center text-center">
                  <img
                    src={numberIcon}
                    alt=""
                    className="w-[30px] h-[30px] mx-auto"
                  />
                  <h1 className="text-[#5C5B5B] font-semibold mt-2">18</h1>
                  <h2 className="text-[#444444] text-sm font-medium mt-1">
                    Number of Suppliers
                  </h2>
                </div>
                <div className="border items-center mx-auto border-[#E1E2E5]"></div>
                <div className="items-center justify-center text-center">
                  <img
                    src={catIcon}
                    alt=""
                    className="w-[30px] h-[30px] mx-auto"
                  />
                  <h1 className="text-[#5C5B5B] font-semibold mt-2 ">45</h1>
                  <h2 className="text-[#444444] text-sm font-medium mt-1">
                    Number of Categories
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
