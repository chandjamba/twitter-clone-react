import {
  ArrowLeft,
  MapPin,
  Link,
  Merge,
  Upload,
  Heart,
  Repeat2,
  MessageCircle,
} from "lucide-react";
import "./profilePage.scss";

export default function ProfilePage() {
  const tweets = [
    {
      id: 1,
      content:
        "Just launched my new React project! Check it out at https://example.com #ReactJS #WebDev",
      timestamp: "2h",
      replies: 5,
      retweets: 12,
      likes: 28,
    },
    {
      id: 2,
      content:
        "Excited to speak at the upcoming JavaScript conference! Who else is attending? #JSConf",
      timestamp: "5h",
      replies: 8,
      retweets: 15,
      likes: 45,
    },
    {
      id: 4,
      content:
        "What's your favorite CSS trick? Mine is using grid for responsive layouts! #CSS #WebDesign",
      timestamp: "1d",
      replies: 12,
      retweets: 7,
      likes: 36,
    },
    {
      id: 5,
      content:
        "Just launched my new React project! Check it out at https://example.com #ReactJS #WebDev",
      timestamp: "2h",
      replies: 5,
      retweets: 12,
      likes: 28,
    },
    {
      id: 6,
      content:
        "Excited to speak at the upcoming JavaScript conference! Who else is attending? #JSConf",
      timestamp: "5h",
      replies: 8,
      retweets: 15,
      likes: 45,
    },
    {
      id: 7,
      content:
        "What's your favorite CSS trick? Mine is using grid for responsive layouts! #CSS #WebDesign",
      timestamp: "1d",
      replies: 12,
      retweets: 7,
      likes: 36,
    },
    {
      id: 8,
      content:
        "Just launched my new React project! Check it out at https://example.com #ReactJS #WebDev",
      timestamp: "2h",
      replies: 5,
      retweets: 12,
      likes: 28,
    },
    {
      id: 9,
      content:
        "Excited to speak at the upcoming JavaScript conference! Who else is attending? #JSConf",
      timestamp: "5h",
      replies: 8,
      retweets: 15,
      likes: 45,
    },
    {
      id: 10,
      content:
        "What's your favorite CSS trick? Mine is using grid for responsive layouts! #CSS #WebDesign",
      timestamp: "1d",
      replies: 12,
      retweets: 7,
      likes: 36,
    },
  ];
  return (
    <div className="twitter-profile">
      <header className="header">
        <button className="back-button">
          <ArrowLeft className="back-icon" />
        </button>
        <div className="header-info">
          <h2>John Doe</h2>
          <span className="tweet-count">3,456 Tweets</span>
        </div>
      </header>

      <div className="profile-info">
        <div className="profile-banner">
          <img
            src="https://picsum.photos/800/200"
            alt="Profile banner"
            className="banner-image"
          />
        </div>
        <div className="profile-details">
          <img
            src="https://picsum.photos/200"
            alt="Profile picture"
            className="profile-picture"
          />
          <button className="edit-profile-button">Edit profile</button>
          <h2 className="profile-name">John Doe</h2>
          <span className="profile-handle">@johndoe</span>
          <p className="profile-bio">
            Web developer, coffee enthusiast, and part-time adventurer. Building
            awesome things with React and JavaScript.
          </p>
          <div className="profile-metadata">
            <span className="location">
              <MapPin className="metadata-icon" />
              San Francisco, CA
            </span>
            <span className="website">
              <Link className="metadata-icon" />
              <a
                href="https://johndoe.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                johndoe.com
              </a>
            </span>
            <span className="join-date">
              <Merge className="metadata-icon" />
              Joined September 2010
            </span>
          </div>
          <div className="profile-stats">
            <span className="following">
              <strong>789</strong> Following
            </span>
            <span className="followers">
              <strong>2,345</strong> Followers
            </span>
          </div>
        </div>
      </div>

      <nav className="tab-navigation">
        <a href="#tweets" className="tab-item active">
          Tweets
        </a>
        <a href="#replies" className="tab-item">
          Tweets & replies
        </a>
        <a href="#media" className="tab-item">
          Media
        </a>
        <a href="#likes" className="tab-item">
          Likes
        </a>
      </nav>

      <div className="tweet-list">
        {tweets.map((tweet) => (
          <div key={tweet.id} className="tweet">
            <img
              src="https://picsum.photos/48"
              alt="Profile"
              className="tweet-avatar"
            />
            <div className="tweet-content">
              <div className="tweet-header">
                <span className="tweet-name">John Doe</span>
                <span className="tweet-handle">@johndoe</span>
                <span className="tweet-timestamp">{tweet.timestamp}</span>
              </div>
              <p className="tweet-text">{tweet.content}</p>
              <div className="tweet-actions">
                <button className="tweet-action">
                  <MessageCircle className="tweet-action-icon" />
                  <span>{tweet.replies}</span>
                </button>
                <button className="tweet-action">
                  <Repeat2 className="tweet-action-icon" />
                  <span>{tweet.retweets}</span>
                </button>
                <button className="tweet-action">
                  <Heart className="tweet-action-icon" />
                  <span>{tweet.likes}</span>
                </button>
                <button className="tweet-action">
                  <Upload className="tweet-action-icon" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
