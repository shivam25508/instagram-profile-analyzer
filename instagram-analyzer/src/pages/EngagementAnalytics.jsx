import React, { useState } from "react";
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

const EngagementAnalytics = () => {
  const [viewType, setViewType] = useState("reels");

  const metrics = {
    posts: {
      avgLikes: 850000,
      avgComments: 32000,
      avgShares: 12000,
      avgSaves: 18000,
      engagementRate: "7.2%",
    },
    reels: {
      avgLikes: 1200000,
      avgComments: 45000,
      avgShares: 18000,
      avgSaves: 22000,
      engagementRate: "9.6%",
    },
  };

  const insights = {
    posts: [
      "Posts perform best on weekends.",
      "Engagement dips during early mornings.",
      "Hashtags improve reach by 18%.",
    ],
    reels: [
      "Reels outperform posts by 35% in likes.",
      "Peak engagement occurs between 6–9 PM IST.",
      "Short reels (<30s) have higher completion rate.",
    ],
  };

  const current = metrics[viewType];
  const currentInsights = insights[viewType];

  const barData = {
    labels: ["Likes", "Comments", "Shares", "Saves"],
    datasets: [
      {
        label: `${viewType.charAt(0).toUpperCase() + viewType.slice(1)} Engagement`,
        data: [
          current.avgLikes,
          current.avgComments,
          current.avgShares,
          current.avgSaves,
        ],
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
    <div className="min-h-screen bg-gray-50 p-6 pt-24">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Engagement Analytics</h1>

      {/* Toggle View */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setViewType("posts")}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            viewType === "posts"
              ? "bg-blue-600 text-white"
              : "bg-white border border-blue-600 text-blue-600"
          }`}
        >
          Posts
        </button>
        <button
          onClick={() => setViewType("reels")}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            viewType === "reels"
              ? "bg-blue-600 text-white"
              : "bg-white border border-blue-600 text-blue-600"
          }`}
        >
          Reels
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center mb-10">
        <MetricBlock label="Avg Likes" value={current.avgLikes.toLocaleString()} />
        <MetricBlock label="Avg Comments" value={current.avgComments.toLocaleString()} />
        <MetricBlock label="Avg Shares" value={current.avgShares.toLocaleString()} />
        <MetricBlock label="Avg Saves" value={current.avgSaves.toLocaleString()} />
        <MetricBlock label="Engagement Rate" value={current.engagementRate} />
      </div>

      {/* Charts */}
<div className="bg-white rounded-xl shadow p-6 mb-10">
  <h2 className="text-lg font-semibold text-gray-800 mb-4">Engagement Charts</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="w-full">
      <Bar
        data={barData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
        style={{ height: "300px" }}
      />
    </div>
    <div className="w-full">
      <Pie
        data={pieData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
        style={{ height: "300px" }}
      />
    </div>
  </div>
</div>


      {/* Insights Summary */}
      <div className="bg-white rounded-xl shadow p-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Insights Summary</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {currentInsights.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MetricBlock = ({ label, value }) => (
  <div className="bg-white rounded-xl shadow p-4">
    <h2 className="text-lg font-semibold text-gray-700">{label}</h2>
    <p className="text-xl font-bold text-blue-600">{value}</p>
  </div>
);

export default EngagementAnalytics;
