import React, { use, useEffect, useState } from "react";
import quantityIcon from "../../Assets/dashboard/Quantity.svg";
import overviewIcon from "../../Assets/dashboard/overview.svg";
import receivedIcon from "../../Assets/dashboard/On the way.svg";
import numberIcon from "../../Assets/dashboard/no of.svg";
import catIcon from "../../Assets/dashboard/cat.svg";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Api from "../../Services/Api";
Chart.register(...registerables);

function Dashboard() {
  const [summary, setSummary] = useState({});
  const [stockData, setStockData] = useState([]);
  const [orderSummary, setOrderSummary] = useState({});
  const [earnings, setEarnings] = useState([]);
  const years = [2019, 2020, 2021, 2022, 2023, 2024, 2025];
  

  const [alerts, setAlerts] = useState([
    { name: "Tata Salt", remainingQuantity: 5, unit: "Packet" },
    { name: "Sugar", remainingQuantity: 5, unit: "Kg" },
    { name: "Rice", remainingQuantity: 20, unit: "Kg" },
    { name: "Rice", remainingQuantity: 5, unit: "Kg" },
  ]);

  // const stockData = [
  //   { item: "Dermo skin care", soldQuantity: 40, remainingQuantity: 250, price: "AED 14" },
  //   { item: "Hydrating Face Cream", soldQuantity: 30, remainingQuantity: 150, price: "AED 20" },
  //   { item: "Vitamin C Serum", soldQuantity: 25, remainingQuantity: 100, price: "AED 35" },
  //   { item: "Aloe Vera Gel", soldQuantity: 50, remainingQuantity: 200, price: "AED 18" },
  //   { item: "Sunscreen SPF 50", soldQuantity: 45, remainingQuantity: 180, price: "AED 25" }
  // ];

  const barData = {
    labels: years,
    datasets: [
      {
        label: false,
        data: earnings,
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
    labels: ["Total Earnings", "Total Shipments", "Total Orders"],
    datasets: [
      {
        data: [summary.totalEarnings, summary.totalShipments, summary.totalOrders],
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


  useEffect(() => {
    Api.get('api/dashBoard/summary')
    .then(response => {
      if(response.status === 200) {
        console.log('summary',response.data);
        setSummary(response.data)
      } else {
        console.error('Error fetching summary:', response);
      }
    })

    Api.get('api/dashBoard/orders/top-products')
    .then(response => {
      if(response.status === 200) {
        console.log('top products response',response.data);
        setStockData(response.data)
      } else {
        console.error('Error fetching top products:', response);
      }
    })

    Api.get('api/dashBoard/orders/delivered-count')
    .then(response => {
      if(response.status === 200) {
        console.log('delivered count response',response.data);
        setOrderSummary(response.data)
      } else {
        console.error('Error fetching delivered count:', response);
      }
    })

    Api.get('api/dashBoard/earnings/yearly')
    .then(response => {
      if(response.status === 200) {
        console.log('yearly earnings response',response);
      } else {
        console.error('Error fetching yearly earnings:', response);
      }

    })

   

  },[])

  // useEffect(() => {
  //   years.forEach(year => (
  //     Api.get(`api/dashBoard/earnings/yearly?year=${year}`)
  //     .then(response => {
  //       if(response.status === 200) {
  //         console.log('yearly earnings response',response.data);
  //         setEarnings(prev => {
  //           const updated = [...prev];
  //           if (updated.length < years.length) {
  //           updated.push({ [year]: response.data });
  //           }
  //           console.log('updated',updated);
  //           return updated;
  //         });
  //         console.log('earnings',earnings);
  //       } else {
  //         console.error('Error fetching yearly earnings:', response);
  //       }
  //     })
  //   ))
  // },[])

  useEffect(() => {
    const tempEarnings = [];
    let completedRequests = 0;
  
    years.forEach(year => {
      Api.get(`api/dashBoard/earnings/yearly?year=${year}`)
        .then(response => {
          if (response.status === 200) {
            tempEarnings.push({ year: parseInt(year), value: response.data });
          } else {
            console.error(`Error fetching for year ${year}`, response);
          }
        })
        .catch(error => {
          console.error(`Failed for year ${year}`, error);
        })
        .finally(() => {
          completedRequests++;
  
          if (completedRequests === years.length) {
            // Sort earnings by year (low to high)
            const sorted = tempEarnings.sort((a, b) => a.year - b.year);
  
            // Final structured array like [{ "2019": 0 }, { "2020": 100 }, ...]
            const finalArray = sorted.map(item => ({ [item.year]: item.value }));
  
            // Values-only array like [0, 100, 200, ...]
            const valuesOnlyArray = sorted.map(item => item.value);
  
            // Set to state
            setEarnings(valuesOnlyArray);
  
            // Optional: log both
            console.log('Sorted earnings:', finalArray);
            console.log('Values only:', valuesOnlyArray);
            console.log('Earnings:', earnings);
          }
        });
    });
  }, []);
  
  

  return (
    <div className="bg-[#f7f7f7] w-full min-w-max min-h-svh h-full">
      <div className="h-[72px]"></div>

      <div className="ml-[242px]  px-6 py-8">
        <div className="text-[20px] text-[#2C2B2B] leading-[24px] font-medium">
          Overview
        </div>

        <div className="flex">
          {/* Overview Cards */}

          <div className="w-full">
            <div className="flex gap-6 mt-5  ">

              <div
                className="bg-white p-4  w-[251px] h-[152px] rounded-lg shadow"
              >
                <img src={overviewIcon} className="w-10 h-10" alt="" />
                <p className="font-light text-base mt-6">Total Earnings</p>
                <p className="font-medium text-[#304BA0] text-[24px] leading-5 mt-2">
                  AED {summary.totalEarnings}
                </p>
              </div>

              <div
                className="bg-white p-4  w-[251px] h-[152px] rounded-lg shadow"
              >
                <img src={overviewIcon} className="w-10 h-10" alt="" />
                <p className="font-light text-base mt-6">Total Shipments</p>
                <p className="font-medium text-[#304BA0] text-[24px] leading-5 mt-2">
                  AED {summary.totalShipments}
                </p>
              </div>

              <div
                className="bg-white p-4  w-[251px] h-[152px] rounded-lg shadow"
              >
                <img src={overviewIcon} className="w-10 h-10" alt="" />
                <p className="font-light text-base mt-6">Total Orders</p>
                <p className="font-medium text-[#304BA0] text-[24px] leading-5 mt-2">
                  AED {summary.totalOrders}
                </p>
              </div>

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
                <h3 className="font-normal text-[18px] ">Product Selling </h3>
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
                        <td className="py-4 text-[#282828] text-base font-normal">{stock.product?.name}</td>
                        <td className="py-4 text-[#282828] text-base font-normal">{stock.soldQuantity}</td>
                        <td className="py-4 text-[#282828] text-base font-normal">{stock.product?.stockQuantity}</td>
                        <td className="py-4 text-[#282828] text-base font-normal">AED {stock.product?.price}</td>
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
                      className={`${alert.remainingQuantity < 10
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

            <div className="bg-white p-4 rounded-lg w-[330px] h-auto l shadow">
              <h3 className="font-medium text-[18px]  ">Order Summary</h3>
              <div className="flex justify-between mt-8 px-3 ">
                <div className="items-center justify-center text-center">
                  <img
                    src={quantityIcon}
                    alt=""
                    className="w-[30px] h-[30px] mx-auto"
                  />
                  <h1 className="text-[#5C5B5B] font-semibold mt-2 ">{orderSummary.last1Year}</h1>
                  <h2 className="text-[#444444] text-sm font-medium mt-1">
                    Last 1 year Orders
                  </h2>
                </div>
                <div className="border border-[#E1E2E5]"></div>
                <div className="items-center justify-center text-center">
                  <img
                    src={quantityIcon}
                    alt=""
                    className="w-[30px] h-[30px] mx-auto"
                  />
                  <h1 className="text-[#5C5B5B] font-semibold mt-2 ">{orderSummary.last6Months}</h1>
                  <h2 className="text-[#444444] text-sm font-medium mt-1">
                    Last 6 month orders
                  </h2>
                </div>
              </div>
              <div className="flex justify-between mt-8 px-3 ">
                <div className="items-center justify-center text-center">
                  <img
                    src={quantityIcon}
                    alt=""
                    className="w-[30px] h-[30px] mx-auto"
                  />
                  <h1 className="text-[#5C5B5B] font-semibold mt-2 ">{orderSummary.last3Months}</h1>
                  <h2 className="text-[#444444] text-sm font-medium mt-1">
                    Last 3 month Orders
                  </h2>
                </div>
                <div className="border border-[#E1E2E5]"></div>
                <div className="items-center justify-center text-center">
                  <img
                    src={quantityIcon}
                    alt=""
                    className="w-[30px] h-[30px] mx-auto"
                  />
                  <h1 className="text-[#5C5B5B] font-semibold mt-2 ">{orderSummary.last1Month}</h1>
                  <h2 className="text-[#444444] text-sm font-medium mt-1">
                    Last 1 month orders
                  </h2>
                </div>
              </div>
            </div>

            {/* <div className="bg-white p-4 rounded-lg w-[330px] h-[183px]  shadow">
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
            </div> */}


          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
