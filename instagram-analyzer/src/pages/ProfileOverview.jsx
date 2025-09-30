import React from "react";
import { assets } from "../assets/assets";

const ProfileOverview = () => {
  const profile = {
    name: "Elvish Yadav",
    married: "Single",
    age: 26,
    country: "India",
    instaId: "@elvish_yadav",
    followers: "12.5M",
    avgLikes: "1.2M",
    avgComments: "45K",
    reach: "9.8M",
    engagementRate: "9.6%",
    healthScore: 86, // out of 100
  };

  const circleRadius = 70;
  const circumference = 2 * Math.PI * circleRadius;
  const offset = circumference - (circumference * profile.healthScore) / 100;

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-24">
      {/* Profile Photo */}
      <div className="flex justify-center mb-6">
        <img
          src={assets.profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-yellow-500 shadow-lg"
        />
      </div>

      {/* Basic Info */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">{profile.name}</h1>
        <p className="text-sm text-gray-600 mt-2">
          <span className="font-semibold">Married:</span> {profile.married} &nbsp;•&nbsp;
          <span className="font-semibold">Age:</span> {profile.age} &nbsp;•&nbsp;
          <span className="font-semibold">Country:</span> {profile.country}
        </p>
        <p className="text-md text-yellow-600 mt-2">{profile.instaId}</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
        <MetricBlock label="Followers" value={profile.followers} />
        <MetricBlock label="Avg Likes" value={profile.avgLikes} />
        <MetricBlock label="Avg Comments" value={profile.avgComments} />
        <MetricBlock label="Reach" value={profile.reach} />
        <MetricBlock label="Engagement Rate" value={profile.engagementRate} />
      </div>

      {/* Profile Health Score */}
      <div className="mt-12 flex flex-col items-center">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Profile Health Score</h2>
        <div className="relative w-40 h-40">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="80"
              cy="80"
              r={circleRadius}
              stroke="#e5e7eb"
              strokeWidth="12"
              fill="transparent"
            />
            <circle
              cx="80"
              cy="80"
              r={circleRadius}
              stroke="#facc15"
              strokeWidth="12"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-yellow-500">{profile.healthScore}%</span>
            <span className="text-sm text-gray-500 mt-1">Composite Score</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4 max-w-md text-center">
          Based on engagement rate, follower growth, and content quality over the last 30 days.
        </p>
      </div>
    </div>
  );
};

// Reusable metric block
const MetricBlock = ({ label, value }) => (
  <div className="bg-white rounded-xl shadow p-4">
    <h2 className="text-lg font-semibold text-gray-700">{label}</h2>
    <p className="text-xl font-bold text-yellow-600">{value}</p>
  </div>
);

export default ProfileOverview;
