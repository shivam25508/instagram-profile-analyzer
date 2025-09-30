import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const AudienceDemographics = ({
  gender = { male: 58, female: 40, other: 2 },
  ageGroups = { "13–17": 5, "18–24": 35, "25–34": 40, "35–44": 15, "45+": 5 },
  countries = [
    { name: "India", percent: "62%" },
    { name: "Nepal", percent: "14%" },
    { name: "UAE", percent: "9%" },
    { name: "USA", percent: "6%" },
    { name: "Others", percent: "9%" },
  ],
}) => {
  const genderData = {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        data: [gender.male, gender.female, gender.other],
        backgroundColor: ["#3b82f6", "#f472b6", "#a78bfa"],
      },
    ],
  };

  const ageData = {
    labels: Object.keys(ageGroups),
    datasets: [
      {
        label: "Audience Age Groups",
        data: Object.values(ageGroups),
        backgroundColor: "#facc15",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-24">
      <h1 className="text-3xl font-bold mb-8 text-yellow-600">Audience Demographics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Gender Split */}
        <ChartCard title="Gender Split">
          <Pie
            data={genderData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </ChartCard>

        {/* Age Groups */}
        <ChartCard title="Age Groups">
          <Bar
            data={ageData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    stepSize: 10,
                    callback: (value) => `${value}%`,
                  },
                },
              },
            }}
          />
        </ChartCard>

        {/* Geographic Distribution */}
        <div className="bg-white rounded-xl shadow p-6 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Geographic Distribution</h2>
          <ul className="space-y-2 text-gray-700">
            {countries.map((country, i) => (
              <li key={i} className="flex justify-between border-b pb-1">
                <span>{country.name}</span>
                <span className="font-semibold text-yellow-600">{country.percent}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Reusable chart container
const ChartCard = ({ title, children }) => (
  <div className="bg-white rounded-xl shadow p-6">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="w-full h-[300px]">{children}</div>
  </div>
);

export default AudienceDemographics;
