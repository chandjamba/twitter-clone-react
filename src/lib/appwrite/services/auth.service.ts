import { account, ID } from "../client";
import { APPWRITE_CONFIG } from "../config";

export const authService = {
  async createAccount({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) {
    try {
      return await account.create(ID.unique(), email, password, name);
    } catch (error) {
      console.log(error);
    }
  },
  async createSession({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      return await account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log(error);
    }
  },
  async createUserVerification() {
    try {
      return await account.createVerification(APPWRITE_CONFIG.url);
    } catch (error) {
      console.log(error);
    }
  },
  async createUpdateVerification({
    userId,
    secret,
  }: {
    userId: string;
    secret: string;
  }) {
    try {
      return await account.updateVerification(userId, secret);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteSession() {
    try {
      return await account.deleteSessions();
    } catch (error) {
      console.log(error);
    }
  },
  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error) {
      console.log(error);
    }
  },
};
