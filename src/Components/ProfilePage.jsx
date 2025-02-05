import "./profilePage.scss"

export default function ProfilePage() {
    const tweets = [
        {
          id: 1,
          content: "Just launched my new React project! Check it out at https://example.com #ReactJS #WebDev",
          timestamp: "2h",
          replies: 5,
          retweets: 12,
          likes: 28,
        },
        {
          id: 2,
          content: "Excited to speak at the upcoming JavaScript conference! Who else is attending? #JSConf",
          timestamp: "5h",
          replies: 8,
          retweets: 15,
          likes: 45,
        },
        {
          id: 3,
          content: "What's your favorite CSS trick? Mine is using grid for responsive layouts! #CSS #WebDesign",
          timestamp: "1d",
          replies: 12,
          retweets: 7,
          likes: 36,
        },
      ]
    return (
        <div className="twitter-profile">
      <header className="header">
        <button className="back-button">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="back-icon">
            <g>
              <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
            </g>
          </svg>
        </button>
        <div className="header-info">
          <h2>John Doe</h2>
          <span className="tweet-count">3,456 Tweets</span>
        </div>
      </header>

      <div className="profile-info">
        <div className="profile-banner">
          <img src="https://picsum.photos/800/200" alt="Profile banner" className="banner-image" />
        </div>
        <div className="profile-details">
          <img src="https://picsum.photos/200" alt="Profile picture" className="profile-picture" />
          <button className="edit-profile-button">Edit profile</button>
          <h2 className="profile-name">John Doe</h2>
          <span className="profile-handle">@johndoe</span>
          <p className="profile-bio">
            Web developer, coffee enthusiast, and part-time adventurer. Building awesome things with React and
            JavaScript.
          </p>
          <div className="profile-metadata">
            <span className="location">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="metadata-icon">
                <g>
                  <path d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z"></path>
                  <path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"></path>
                </g>
              </svg>
              San Francisco, CA
            </span>
            <span className="website">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="metadata-icon">
                <g>
                  <path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path>
                  <path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path>
                </g>
              </svg>
              <a href="https://johndoe.com" target="_blank" rel="noopener noreferrer">
                johndoe.com
              </a>
            </span>
            <span className="join-date">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="metadata-icon">
                <g>
                  <path d="M7.75 11.083c-.414 0-.75-.336-.75-.75C7 7.393 9.243 5 12 5c.414 0 .75.336.75.75s-.336.75-.75.75c-1.93 0-3.5 1.72-3.5 3.833 0 .414-.336.75-.75.75z"></path>
                  <path d="M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83c-.137.145-.173.357-.093.54.08.182.26.3.46.3h4.957c.198 0 .378-.118.457-.3.08-.183.044-.395-.092-.54l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997zM12 17.917c-3.998 0-7.25-3.402-7.25-7.584S8.002 2.75 12 2.75s7.25 3.4 7.25 7.583-3.252 7.584-7.25 7.584z"></path>
                </g>
              </svg>
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
            <img src="https://picsum.photos/48" alt="Profile" className="tweet-avatar" />
            <div className="tweet-content">
              <div className="tweet-header">
                <span className="tweet-name">John Doe</span>
                <span className="tweet-handle">@johndoe</span>
                <span className="tweet-timestamp">{tweet.timestamp}</span>
              </div>
              <p className="tweet-text">{tweet.content}</p>
              <div className="tweet-actions">
                <button className="tweet-action">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-action-icon">
                    <g>
                      <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                    </g>
                  </svg>
                  <span>{tweet.replies}</span>
                </button>
                <button className="tweet-action">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-action-icon">
                    <g>
                      <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                    </g>
                  </svg>
                  <span>{tweet.retweets}</span>
                </button>
                <button className="tweet-action">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-action-icon">
                    <g>
                      <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                    </g>
                  </svg>
                  <span>{tweet.likes}</span>
                </button>
                <button className="tweet-action">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="tweet-action-icon">
                    <g>
                      <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                      <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}