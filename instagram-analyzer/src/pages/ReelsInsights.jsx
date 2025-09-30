import React, { useState } from "react";
import { assets } from "../assets/assets";

const ReelsInsights = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-24">
      <h1 className="text-3xl font-bold mb-4 text-purple-600">Reels Insights</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {assets.reels.map((reel, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-3">
            <div
              className="w-[180px] h-[320px] mx-auto overflow-hidden rounded mb-2 cursor-pointer"
              onClick={() => setPlayingIndex(i)}
            >
              {playingIndex === i ? (
                <video
                  src={reel.src}
                  controls
                  autoPlay
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <img
                  src={assets.thumbnails[i] || assets.heroImage}
                  alt="thumbnail"
                  className="w-full h-full object-cover rounded hover:scale-105 transition"
                />
              )}
            </div>

            <p className="font-medium text-sm">{reel.caption}</p>
            <p className="text-xs text-gray-500">
              👁️ {reel.views} · ❤️ {reel.likes} · 💬 {reel.comments}
            </p>
            <p className="text-xs text-blue-500">Tags: {reel.tags.join(", ")}</p>
            <p className="text-xs text-pink-500">
              Vibe: {reel.vibe.charAt(0).toUpperCase() + reel.vibe.slice(1)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReelsInsights;
