import { databases, ID } from "../client";
import { APPWRITE_CONFIG } from "../config";

export const tweetService = {
  async createTweet({
    tweetText,
    userId,
  }: {
    tweetText: string;
    userId: string;
  }) {
    try {
      return await databases.createDocument(
        APPWRITE_CONFIG.databaseId,
        APPWRITE_CONFIG.tweetsCollectionId,
        ID.unique(),
        {
          tweetText,
          users: userId,
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
