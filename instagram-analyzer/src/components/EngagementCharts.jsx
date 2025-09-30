import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const EngagementCharts = () => {
  const barData = {
  labels: ["Likes", "Comments", "Shares", "Saves"],
  datasets: [
    {
      label: "Engagement Volume",
      data: [1200000, 950000, 720000, 880000], 
      backgroundColor: "#3b82f6",
    },
  ],
};



  const pieData = {
    labels: ["Posts", "Reels", "Stories"],
    datasets: [
      {
        data: [40, 50, 10],
        backgroundColor: ["#facc15", "#10b981", "#6366f1"],
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-10">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Engagement Charts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-[300px]">
          <Bar
            data={barData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    callback: (value) => value.toLocaleString(),
                  },
                },
              },
            }}
          />
        </div>
        <div className="w-full h-[300px]">
          <Pie
            data={pieData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EngagementCharts;
