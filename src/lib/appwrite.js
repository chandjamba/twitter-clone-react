import { Client, Account, Databases } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_APPWRITE_TWITTER_CLONE_PROJECT_ID); // Replaced with project ID

    export const databases = new Databases(client);
    export const account = new Account(client);


console.log(client);
export { ID } from 'appwrite';
