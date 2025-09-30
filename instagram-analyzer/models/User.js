 import mongoose from 'mongoose';

// Reels schema
const reelSchema = new mongoose.Schema({
  src: String,
  caption: String,
  views: Number,
  likes: Number,
  comments: Number,
  vibe: String,
});

// Audience demographics schema
const audienceSchema = new mongoose.Schema({
  gender: {
    male: Number,
    female: Number,
    other: Number,
  },
  ageGroups: {
    "13–17": Number,
    "18–24": Number,
    "25–34": Number,
    "35–44": Number,
    "45+": Number,
  },
  countries: {
    type: Map,
    of: Number, // e.g., { India: 62, Nepal: 14 }
  },
});

// Engagement analytics schema
const analyticsSchema = new mongoose.Schema({
  avgLikes: Number,
  avgComments: Number,
  avgShares: Number,
  avgSaves: Number,
  engagementRate: Number,
});

// Main user schema
const userSchema = new mongoose.Schema({
  name: String,
  insta_id: String,
  age: Number,
  country: String,
  married_status: String,
  followers: Number,
  reach: Number,
  health_score: Number,
  reels: [reelSchema],
  audience: audienceSchema,
  analytics: analyticsSchema,
});

export default mongoose.model('User', userSchema);
