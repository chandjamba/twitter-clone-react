import { databases, ID } from "../client";
import { APPWRITE_CONFIG } from "../config";

export const tweetService = {
  async createTweet({ tweetText }: { tweetText: string }) {
    try {
      return await databases.createDocument(
        APPWRITE_CONFIG.databaseId,
        APPWRITE_CONFIG.tweetsCollectionId,
        ID.unique(),
        {
          tweetText,
        }
      );
    } catch (error) {
      console.log(error);
    }
  },
  async listTweets() {
    try {
      return await databases.listDocuments(
        APPWRITE_CONFIG.databaseId,
        APPWRITE_CONFIG.tweetsCollectionId
      );
    } catch (error) {
      console.log(error);
    }
  },
};
