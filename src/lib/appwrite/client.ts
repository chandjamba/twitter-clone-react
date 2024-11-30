import { Client, Account, Databases } from "appwrite";
import { APPWRITE_CONFIG } from "./config";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(APPWRITE_CONFIG.databaseId); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export { ID } from "appwrite";
