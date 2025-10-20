import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";
import DashboardCards from "../../components/dashboard/DashboardCards";
import UpcomingInterviewsTable from "../../components/dashboard/UpcomingInterviewsTAble";
import RecentApplicationsTable from "../../components/dashboard/RecentApplicationsTable";

ChartJS.register(ArcElement, ChartTooltip, Legend);

const Overview= () => {
  // ----- Line Chart Data -----
  const lineData = [
    { month: "Jan", applications: 30 },
    { month: "Feb", applications: 45 },
    { month: "Mar", applications: 60 },
    { month: "Apr", applications: 50 },
    { month: "May", applications: 80 },
    { month: "Jun", applications: 95 },
    { month: "Jul", applications: 85 },
  ];

  // ----- Doughnut Chart Data -----
  const doughnutData = {
    labels: ["Approved", "Pending", "Rejected"],
    datasets: [
      {
        label: "Applications",
        data: [50, 35, 15],
        backgroundColor: ["#080156", "#3B3BBF", "#6A6AE5"],
        borderWidth: 0,
        hoverOffset: 10,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#374151",
          font: { size: 14 },
        },
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

 
  

  return (
    <div className="lg:ml-64 mt-20 p-6 min-h-screen bg-gray-50">

        <h1 className="text-3xl font-bold mb-6 text-[#080156]">
         Overview
        </h1>
      {/* KPI Cards */}
      <DashboardCards />

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
          <h2 className="font-semibold text-gray-800 mb-4">
            Applications Over Time
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  color: "#111827",
                }}
              />
              <Line
                type="monotone"
                dataKey="applications"
                stroke="#080156"
                strokeWidth={3}
                dot={{ r: 5, stroke: "#3B3BBF", fill: "#6A6AE5" }}
                activeDot={{ r: 8, stroke: "#080156", fill: "#B3B3F9" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Doughnut Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
          <h2 className="font-semibold text-gray-800 mb-4">
            Status Distribution
          </h2>
          <div className="w-full h-[300px] flex items-center justify-center">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* Recent Applications */}
      <RecentApplicationsTable/>

        {/* Upcoming Interviews */}
      <UpcomingInterviewsTable/>
      </div>
    </div>
  );
};

export default Overview;
