import { ID, databases } from "../client";
import { APPWRITE_CONFIG } from "../config";

export const userService = {
  async createUser({
    name,
    userName,
    email,
  }: {
    name: string;
    userName: string;
    email: string;
  }) {
    try {
      return await databases.createDocument(
        APPWRITE_CONFIG.databaseId,
        APPWRITE_CONFIG.usersCollectionId,
        ID.unique(),
        {
          name,
          userName,
          email,
        }
      );
    } catch (error) {
      console.log(error);
    }
  },
  async listUsers() {
    try {
      return await databases.listDocuments(
        APPWRITE_CONFIG.databaseId,
        APPWRITE_CONFIG.usersCollectionId
      );
    } catch (error) {
      console.log(error);
    }
  },

  async getUser({ userId }: { userId: string }) {
    try {
      await databases.getDocument(
        APPWRITE_CONFIG.databaseId,
        APPWRITE_CONFIG.usersCollectionId,
        userId // Access from useParams at UI. //
      );
    } catch (error) {
      console.log(error);
    }
  },
  async updateUser({ userId }: { userId: string }) {
    try {
      await databases.updateDocument(
        APPWRITE_CONFIG.databaseId,
        APPWRITE_CONFIG.usersCollectionId,
        userId, // Access from useParams at UI.  //
        {}
      );
    } catch (error) {
      console.log(error);
    }
  },
  async deleteUser({ userId }: { userId: string }) {
    try {
      await databases.deleteDocument(
        APPWRITE_CONFIG.databaseId,
        APPWRITE_CONFIG.usersCollectionId,
        userId // Access from useParams at UI.  //
      );
    } catch (error) {
      console.log(error);
    }
  },
};
