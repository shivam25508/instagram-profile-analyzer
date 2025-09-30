import { useState } from 'react';
import { assets } from '../assets/assets';

const ProfileCard = () => {
  const [showPopup, setShowPopup] = useState(false);

  const profile = {
    name: 'Elvish Yadav',
    username: 'elvish_yadav',
    profilePic: assets.profilePic,
    followers: 18300000,
    following: 662,
    posts: 1090,
    avgLikes: 120000,
    avgComments: 45000,
    engagementRate: 2.1
  };

  return (
    <div className="relative flex items-start gap-6 mt-10">
      {/* Profile Info */}
      <div className="flex flex-col items-center">
        <img src={profile.profilePic} alt={profile.name} className="w-32 h-32 rounded-full object-cover shadow-lg" />
        <h2 className="text-3xl font-bold mt-4">{profile.name}</h2>
        <p className="text-sm text-gray-200">@{profile.username}</p>

        <button
          onClick={() => setShowPopup(prev => !prev)}
          className="mt-6 px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-full transition"
        >
          {showPopup ? 'Hide Profile' : 'View Profile'}
        </button>
      </div>

      {/* Popup beside profile */}
      {showPopup && (
        <div className="absolute left-full top-0 ml-6 w-64 h-64 bg-white text-gray-800 shadow-xl rounded-xl p-4 text-xs">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-sm">Profile Details</h3>
            <button onClick={() => setShowPopup(false)} className="text-lg font-bold">&times;</button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div><p className="font-bold">{profile.followers.toLocaleString()}</p><p>Followers</p></div>
            <div><p className="font-bold">{profile.following}</p><p>Following</p></div>
            <div><p className="font-bold">{profile.posts}</p><p>Posts</p></div>
            <div><p className="font-bold">{profile.engagementRate}%</p><p>Engagement</p></div>
            <div><p className="font-bold">{profile.avgLikes.toLocaleString()}</p><p>Avg Likes</p></div>
            <div><p className="font-bold">{profile.avgComments.toLocaleString()}</p><p>Avg Comments</p></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
