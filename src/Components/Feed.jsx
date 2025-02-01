import "./feed.scss";

export default function Feed() {
  const tweets = [
    {
      id: 1,
      username: "User1",
      handle: "@user1",
      content: "This is a sample tweet. #ReactTwitterClone",
    },
    {
      id: 2,
      username: "User2",
      handle: "@user2",
      content: "Building a Twitter clone with React! 🚀 #WebDev",
    },
    {
      id: 3,
      username: "User3",
      handle: "@user3",
      content:
        "Learning React is fun and challenging. What's your favorite part? #ReactJS",
    },
    {
      id: 4,
      username: "User4",
      handle: "@user4",
      content: "Just deployed my first React app! So excited! 😃 #FrontEndDev",
    },
    {
      id: 5,
      username: "User5",
      handle: "@user5",
      content:
        "Any good resources for mastering CSS Grid and Flexbox? #CSSHelp",
    },
    {
      id: 5,
      username: "User5",
      handle: "@user5",
      content:
        "Any good resources for mastering CSS Grid and Flexbox? #CSSHelp",
    },
    {
      id: 5,
      username: "User5",
      handle: "@user5",
      content:
        "Any good resources for mastering CSS Grid and Flexbox? #CSSHelp",
    },
    {
      id: 5,
      username: "User5",
      handle: "@user5",
      content:
        "Any good resources for mastering CSS Grid and Flexbox? #CSSHelp",
    },
    {
      id: 5,
      username: "User5",
      handle: "@user5",
      content:
        "Any good resources for mastering CSS Grid and Flexbox? #CSSHelp",
    },
    {
      id: 5,
      username: "User5",
      handle: "@user5",
      content:
        "Any good resources for mastering CSS Grid and Flexbox? #CSSHelp",
    },
    {
      id: 5,
      username: "User5",
      handle: "@user5",
      content:
        "Any good resources for mastering CSS Grid and Flexbox? #CSSHelp",
    },
  ];

  return (
    <div className="feed">
      <div className="feed-home-heading">Home</div>
      <div className="tweet-box">
        <textarea className="tweet-textarea" placeholder="What's happening?" />
        <button className="tweet-btn">Tweet</button>
      </div>
      <div className="tweets">
        {tweets.map((tweet) => (
          <div key={tweet.id} className="tweet">
            <div className="tweet-inner-wrapper">
            <img
              src={`https://cdn-icons-png.flaticon.com/128/924/924915.png`}
              alt="avatar"
              className="avatar"
            />
            <div className="tweet-content">
              <div className="tweet-header">
                <span className="username">{tweet.username}</span>
                <span className="handle">{tweet.handle}</span>
              </div>
              <p>{tweet.content}</p>
              <div className="tweet-actions">
                <button>Comment</button>
                <button>Retweet</button>
                <button>Like</button>
                <button>Share</button>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
