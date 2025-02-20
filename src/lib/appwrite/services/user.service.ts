import { ID, databases } from "../client";
import { APPWRITE_CONFIG } from "../config";

export  const userService = {
    async createUser(event: any) {
        event.preventDefault();
        try {
            await databases.createDocument(
                APPWRITE_CONFIG.databaseId,
                APPWRITE_CONFIG.usersCollectionId, 
                ID.unique(), 
                {
                    name: event.target.name.value,
                    userName: event.target.username.value,
                    email: event.target.email.value,
                },
            );
        } catch (error) {
            console.log(error);
        }
    }, 
    async listUsers() {
        try {
            return await databases.listDocuments(
                APPWRITE_CONFIG.databaseId,
                APPWRITE_CONFIG.usersCollectionId, 
                [] // queries (optional)
            );
        } catch (error) {
            console.log(error);
        }
    },
    
    async getUser() {
        try {
            await databases.getDocument(
                APPWRITE_CONFIG.databaseId, 
                APPWRITE_CONFIG.usersCollectionId,
                ID.unique(), // Todo  Replace (ID.unique) with user/document ID.
            );
        } catch (error) {
            console.log(error);
        }
    },
    async updateUser() {
        try {
            await databases.updateDocument(
                APPWRITE_CONFIG.databaseId, 
                APPWRITE_CONFIG.usersCollectionId, 
                ID.unique(), // Todo  Replace (ID.unique) with user/document ID.
                {}, 
            );
        } catch (error) {
            console.log(error);
        }
    },
    async deleteUser() {
        try {
            await databases.deleteDocument(
                APPWRITE_CONFIG.databaseId,
                APPWRITE_CONFIG.usersCollectionId,
                ID.unique(), // Todo  Replace (ID.unique) with user/document ID.
            );
        } catch (error) {
            console.log(error);
        }
    }
}