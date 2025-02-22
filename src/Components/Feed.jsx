import { MessageCircle, Repeat, Heart, Share2 } from "lucide-react";
import "./feed.scss";
import { userService } from "../lib/appwrite/services/user.service";

export default function Feed() {
  const tweets = [
    {
      id: 1,
      username: "John Doe",
      handle: "@johndoe",
      content: "Just setting up my Twitter clone! #ReactJS",
      avatar: "https://i.pravatar.cc/48?img=1",
    },
    {
      id: 2,
      username: "Jane Smith",
      handle: "@janesmith",
      content:
        "Learning React is so much fun! What's your favorite part? #WebDev",
      avatar: "https://i.pravatar.cc/48?img=2",
    },
    {
      id: 3,
      username: "Bob Johnson",
      handle: "@bobjohnson",
      content:
        "Check out this awesome Twitter clone I built with React! 🚀 #FrontEndDev",
      avatar: "https://i.pravatar.cc/48?img=3",
    },
    {
      id: 4,
      username: "Alice Brown",
      handle: "@alicebrown",
      content:
        "Any good resources for mastering CSS Grid and Flexbox? #CSSHelp",
      avatar: "https://i.pravatar.cc/48?img=4",
    },
    {
      id: 5,
      username: "Charlie Wilson",
      handle: "@charliewilson",
      content:
        "Just deployed my first React app! So excited! 😃 #WebDevelopment",
      avatar: "https://i.pravatar.cc/48?img=5",
    },
    {
      id: 6,
      username: "John Doe",
      handle: "@johndoe",
      content: "Just setting up my Twitter clone! #ReactJS",
      avatar: "https://i.pravatar.cc/48?img=1",
    },
    {
      id: 7,
      username: "Jane Smith",
      handle: "@janesmith",
      content:
        "Learning React is so much fun! What's your favorite part? #WebDev",
      avatar: "https://i.pravatar.cc/48?img=2",
    },
    {
      id: 8,
      username: "Bob Johnson",
      handle: "@bobjohnson",
      content:
        "Check out this awesome Twitter clone I built with React! 🚀 #FrontEndDev",
      avatar: "https://i.pravatar.cc/48?img=3",
    },
    {
      id: 9,
      username: "Alice Brown",
      handle: "@alicebrown",
      content:
        "Any good resources for mastering CSS Grid and Flexbox? #CSSHelp",
      avatar: "https://i.pravatar.cc/48?img=4",
    },
    {
      id: 10,
      username: "Charlie Wilson",
      handle: "@charliewilson",
      content:
        "Just deployed my first React app! So excited! 😃 #WebDevelopment",
      avatar: "https://i.pravatar.cc/48?img=5",
    },
  ];

  return (
    <div className="feed">
      <div className="feed-header">
        <h2 className="feed-h2">Home</h2>
      </div>
      <div className="feed-tweet-box">
        <img
          src="https://i.pravatar.cc/48?img=0"
          alt="avatar"
          className="feed-avatar"
        />
        <div className="feed-tweet-input">
          <textarea className="feed-textarea" placeholder="What's happening?" />
          <button className="feed-tweet-btn">Tweet</button>
        </div>
      </div>
      <div className="feed-tweets">
        {tweets.map((tweet) => (
          <div key={tweet.id} className="feed-tweet">
            <img
              src={tweet.avatar || "/placeholder.svg"}
              alt="avatar"
              className="feed-avatar"
            />
            <div className="feed-tweet-content">
              <div className="feed-tweet-header">
                <span className="feed-username">{tweet.username}</span>
                <span className="feed-handle">{tweet.handle}</span>
              </div>
              <p>{tweet.content}</p>
              <div className="feed-tweet-actions">
                <button>
                  <MessageCircle size={18} /> Comment
                </button>
                <button>
                  <Repeat size={18} /> Retweet
                </button>
                <button>
                  <Heart size={18} /> Like
                </button>
                <button>
                  <Share2 size={18} /> Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
