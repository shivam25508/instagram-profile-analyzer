// assets.js
import logo from './logo.svg';
import profilePic from './profile.jpeg';
import heroImage from './heroImage.png';

import post1 from './post1.jpeg';
import post2 from './post2.jpeg';
import post3 from './post3.jpeg';
import post4 from './post4.jpeg';
import post5 from './post5.jpeg';
import post6 from './post6.jpeg';
import post7 from './post7.jpeg';
import post8 from './post8.jpeg';
import post9 from './post9.jpeg';
import post10 from './post10.jpeg';

import thumb1 from './reel1.jpg';
import thumb2 from './reel2.jpg';
import thumb3 from './reel3.jpg';
import thumb4 from './reel4.jpg';
import thumb5 from './reel5.jpg';

import reel1 from './reel1.mp4';
import reel2 from './reel2.mp4';
import reel3 from './reel3.mp4';
import reel4 from './reel4.mp4';
import reel5 from './reel5.mp4';

export const assets = {
  logo,
  profilePic,
  heroImage,

  thumbnails: [thumb1, thumb2, thumb3, thumb4, thumb5],

  posts: [
    { src: post1, caption: "Thank you everyone for my Birthday ❤️❤️", likes: 1200095, comments: 45885, tags: ["chill","sunset","travel"], vibe: "Aesthetic", quality: "High" },
    { src: post2, caption: "My FAV song ...", likes: 9005568, comments: 20445, tags: ["coffee","morning","casual"], vibe: "Romantic", quality: "Medium" },
    { src: post3, caption: "City lights in Mumbai", likes: 1500569, comments: 60646, tags: ["city","night","urban"], vibe: "Luxury", quality: "High" },
    { src: post4, caption: "Grand Finale Winner 🔥🔥", likes: 844600, comments: 15542, tags: ["winner","friend","trending"], vibe: "Crazy", quality: "High" },
    { src: post5, caption: "Special day ", likes: 1106560, comments: 304564, tags: ["latest","trend","trending"], vibe: "Friendly", quality: "High" },
    { src: post6, caption: "Kahani do baar moka deti hai , hum nahi ", likes: 954560, comments: 26565, tags: ["fitness","gym"], vibe: "Energetic", quality: "Medium" },
    { src: post7, caption: "Roadies Winner ", likes: 13466500, comments: 56540, tags: ["fashion","street","style"], vibe: "Aesthetic", quality: "High" },
    { src: post8, caption: "Weekend ", likes: 10066650, comments: 26468, tags: ["travel","weekend","viral"], vibe: "Casual", quality: "Medium" },
    { src: post9, caption: "First time Gangleader in #roadiesdoublecross ✨❤️ ", likes: 1400000, comments: 65956, tags: ["fight","elvish"], vibe: "Energetic", quality: "High" },
    { src: post10, caption: "Do bhai dono tabahi🔥 ", likes: 4400000 , comments: 60900, tags: ["enjoy","funny"], vibe: "Casual" , quality: "High" }
  ],

  reels: [
    { src: reel1, caption: "Tere samaj na aayegi baat meri ..", views: 24565000, likes: 6569450, comments: 254630, tags: ["dance","viral","trend"], vibe: "Energetic" },
    { src: reel2, caption: "Ab system glow karega . . .", views: 46565200, likes: 356690, comments: 26665, tags: ["glow","fit","trend"], vibe: "Casual" },
    { src: reel3, caption: "Big billion days are coming !", views: 600220, likes: 55620, comments: 4550, tags: ["advertisement","flipkart","shop"], vibe: "Casual" },
    { src: reel4, caption: "Chalo pyaar karte hai", views: 46560800, likes: 4545430, comments: 32335, tags: ["reels","viral","love"], vibe: "Romantic" },
    { src: reel5, caption: "Romantic", views: 5523200, likes: 211490, comments: 65638, tags: ["viral","love","trending"], vibe: "Romantic" }
  ]
};
