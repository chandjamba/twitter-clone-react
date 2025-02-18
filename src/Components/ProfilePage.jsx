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
      <header className="twitter-profile-header">
        <button className="twitter-profile-back-button">
          <ArrowLeft className="twitter-profile-back-icon" />
        </button>
        <div className="twitter-profile-header-info">
          <h2>John Doe</h2>
          <span className="twitter-profile-tweet-count">3,456 Tweets</span>
        </div>
      </header>

      <div className="twitter-profile-info">
        <div className="twitter-profile-banner">
          <img
            src="https://picsum.photos/800/200"
            alt="Profile banner"
            className="twitter-profile-banner-image"
          />
        </div>
        <div className="twitter-profile-details">
          <img
            src="https://picsum.photos/200"
            alt="Profile picture"
            className="twitter-profile-picture"
          />
          <button className="twitter-profile-edit-profile-button">
            Edit profile
          </button>
          <h2 className="twitter-profile-name">John Doe</h2>
          <span className="twitter-profile-handle">@johndoe</span>
          <p className="twitter-profile-bio">
            Web developer, coffee enthusiast, and part-time adventurer. Building
            awesome things with React and JavaScript.
          </p>
          <div className="twitter-profile-metadata">
            <span className="twitter-profile-location">
              <MapPin className="twitter-profile-metadata-icon" />
              San Francisco, CA
            </span>
            <span className="twitter-profile-website">
              <Link className="twitter-profile-metadata-icon" />
              <a
                href="https://johndoe.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                johndoe.com
              </a>
            </span>
            <span className="twitter-profile-join-date">
              <Merge className="twitter-profile-metadata-icon" />
              Joined September 2010
            </span>
          </div>
          <div className="twitter-profile-stats">
            <span className="twitter-profile-following">
              <strong>789</strong> Following
            </span>
            <span className="twitter-profile-followers">
              <strong>2,345</strong> Followers
            </span>
          </div>
        </div>
      </div>

      <nav className="twitter-profile-tab-navigation">
        <a href="#tweets" className="twitter-profile-tab-item active">
          Tweets
        </a>
        <a href="#replies" className="twitter-profile-tab-item">
          Tweets & replies
        </a>
        <a href="#media" className="twitter-profile-tab-item">
          Media
        </a>
        <a href="#likes" className="twitter-profile-tab-item">
          Likes
        </a>
      </nav>

      <div className="twitter-profile-tweet-list">
        {tweets.map((tweet) => (
          <div key={tweet.id} className="twitter-profile-tweet">
            <img
              src="https://picsum.photos/48"
              alt="Profile"
              className="twitter-profile-tweet-avatar"
            />
            <div className="twitter-profile-tweet-content">
              <div className="twitter-profile-tweet-header">
                <span className="twitter-profile-tweet-name">John Doe</span>
                <span className="twitter-profile-tweet-handle">@johndoe</span>
                <span className="twitter-profile-tweet-timestamp">
                  {tweet.timestamp}
                </span>
              </div>
              <p className="twitter-profile-tweet-text">{tweet.content}</p>
              <div className="twitter-profile-tweet-actions">
                <button className="twitter-profile-tweet-action">
                  <MessageCircle className="twitter-profile-tweet-action-icon" />
                  <span>{tweet.replies}</span>
                </button>
                <button className="twitter-profile-tweet-action">
                  <Repeat2 className="twitter-profile-tweet-action-icon" />
                  <span>{tweet.retweets}</span>
                </button>
                <button className="twitter-profile-tweet-action">
                  <Heart className="twitter-profile-tweet-action-icon" />
                  <span>{tweet.likes}</span>
                </button>
                <button className="twitter-profile-tweet-action">
                  <Upload className="twitter-profile-tweet-action-icon" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
