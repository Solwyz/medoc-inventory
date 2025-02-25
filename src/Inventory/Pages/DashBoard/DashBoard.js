import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function Dashboard() {
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
      text: '',
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
                    <p className="text-gray-600">{label}</p>
                    <p className="text-xl font-bold text-blue-600">
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
                <div className="h-[193px]"><Bar data={barData} options={barOptions} /></div>
              </div>
              <div className="bg-white p-4 w-[365px] h-[265px]  rounded-lg shadow">
                <h3 className="font-normal text-[18px] ">Product Selling</h3>
                <div style={{ height: "172px", width: "" }} className="mt-6">
                  <Doughnut data={doughnutData} options={options} />
                </div>
              </div>
            </div>
            <div className="bg-white w-full h-[374px] p-4 rounded-lg mt-6" >

            </div>
            
          </div>

          {/* Alerts & Inventory Summary */}
          <div className="space-y-6 ml-6 mt-[20px]">
            <div className="bg-white p-4 rounded-lg w-[330px] h-[318px] shadow">
              <h3 className="font-normal text-[18px] ">Alerts</h3>
              <p className="text-red-500">
                Tata Salt - Remaining Quantity: 10 Packet
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg w-[330px] h-[183px] l shadow">
              <h3 className="font-normal text-[18px] ">Inventory Summary</h3>
              <p>Quantity in Hand: 868</p>
              <p>To be received: 200</p>
            </div>
            <div className="bg-white p-4 rounded-lg w-[330px] h-[183px]  shadow">
              <h3 className="font-normal text-[18px] ">Product Summary</h3>
              <p>Suppliers: 23</p>
              <p>Categories: 30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
