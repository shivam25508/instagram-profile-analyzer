import React, { useState } from "react";
import { assets } from "../assets/assets";

const PostsInsights = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-24">
      <h1 className="text-3xl font-bold mb-4 text-green-600">Posts Insights</h1>

      {/*  Grid of Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assets.posts.map((post, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-4 cursor-pointer hover:scale-[1.02] transition"
            onClick={() => setSelectedPost(post)}
          >
            {/*  Enlarged Thumbnail */}
            <img
              src={post.src}
              alt={post.caption}
              className="w-full h-60 object-cover rounded mb-2"
            />

            <p className="font-medium">{post.caption}</p>
            <p className="text-sm text-gray-500">❤️ {post.likes} · 💬 {post.comments}</p>
            <p className="text-xs text-blue-500">Tags: {post.tags.join(', ')}</p>
            <p className="text-xs text-pink-500">Vibe: {post.vibe}</p>
            <p className="text-xs text-gray-400">Quality: {post.quality}</p>
          </div>
        ))}
      </div>

      {/*  Modal Popup */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-4 text-xl font-bold text-gray-600"
              onClick={() => setSelectedPost(null)}
            >
              &times;
            </button>

            <img
              src={selectedPost.src}
              alt={selectedPost.caption}
              className="w-full h-80 object-cover rounded mb-4"
            />
            <p className="font-semibold text-lg">{selectedPost.caption}</p>
            <p className="text-sm text-gray-500">❤️ {selectedPost.likes} · 💬 {selectedPost.comments}</p>
            <p className="text-xs text-blue-500">Tags: {selectedPost.tags.join(', ')}</p>
            <p className="text-xs text-pink-500">Vibe: {selectedPost.vibe}</p>
            <p className="text-xs text-gray-400">Quality: {selectedPost.quality}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostsInsights;
