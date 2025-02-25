import { MessageCircle, Repeat, Heart, Share2 } from "lucide-react";
import "./feed.scss";
import { tweetService } from "../lib/appwrite/services/tweet.service";
import { useEffect, useState } from "react";

export default function Feed() {
  const [tweetList, setTweetList] = useState();

  const tweetSubmitHandler = async (event) => {
    event.preventDefault();
    if (
      !event.target.textarea.value ||
      event.target.textarea.value.trim().length < 1
    ) {
      return;
    }
    const formData = new FormData(event.target);
    const formDataEntries = formData.entries();
    const formDataObject = Object.fromEntries(formDataEntries);
    const createTweetText = await tweetService.createTweet({
      tweetText: formDataObject.textarea,
    });
    console.log(createTweetText);
  };
  useEffect(() => {
    async function listOfTweets() {
      const resp = await tweetService.listTweets();
      const listData = resp?.documents;
      setTweetList(listData);
      console.log(listData);
    }
    listOfTweets();
  }, []);

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
        <form onSubmit={tweetSubmitHandler} className="feed-form">
          <div className="feed-tweet-input">
            <textarea
              className="feed-textarea"
              name="textarea"
              placeholder="What's happening?"
            />
            <button className="feed-tweet-btn">Tweet</button>
          </div>
        </form>
      </div>
      <div className="feed-tweets">
        {tweetList?.map((tweet) => (
          <div key={tweet?.$id} className="feed-tweet">
            <img
              src={"https://i.pravatar.cc/48?img=4"}
              alt="avatar"
              className="feed-avatar"
            />
            <div className="feed-tweet-content">
              <div className="feed-tweet-header">
                {/* will replace hard coded value with real value from user data */}
                <span className="feed-username">{"tweet?.username"}</span>
                <span className="feed-handle">{"tweet?.handle"}</span>
              </div>
              <p>{tweet?.tweetText}</p>
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
