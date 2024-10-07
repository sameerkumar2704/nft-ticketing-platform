import { Client , Account , Avatars , ID , Databases } from "appwrite";
// Define constants for project and database settings
const project_id = "6701111c000e9a695274";
const data_base_id = "6701118e00138f195c8f";
const user_collection_id = "6701119c00330934ad50";

// Initialize Appwrite client
const appWriteClient = new Client();
appWriteClient
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(project_id); // Replace with your project ID

// Initialize Appwrite services
const account = new Account(appWriteClient);
const DB = new Databases(appWriteClient);
const avatar = new Avatars(appWriteClient);

// Function to add new user data in the database
async function addNewUserDataInDB(username, email, avatarUrl, accountId) {
    const res = await DB.createDocument(data_base_id, user_collection_id, ID.unique(), {
        username,
        email,
        avatar: avatarUrl,
        account:accountId // Changed to use accountId instead of account
    });
    return res;
}

// Function to register a new user
export async function registerUser(username, email, password) {
    try {
        const user_data = await account.create(ID.unique(), email, password, username);
        await login(email, password);
        const profile_image = avatar.getInitials(username)
        await addNewUserDataInDB(username, email, profile_image, user_data.$id);
        console.log("login completed")
    } catch (error) {
        console.error('Registration error:', error);
        throw error; // Rethrow error for further handling if needed
    }
}

// Function to log in the user
async function login(email, password) {
    try {
        const loggedIn = await account.createEmailPasswordSession(email, password);
        return loggedIn;
    } catch (error) {
        console.error('Login error:', error);
        throw error; // Rethrow error for further handling if needed
    }
}

// Function to check if a user is already logged in
export async function isUserLoggedIn() {
    try {
        return await account.get();
    } catch (error) {
        console.error('Error checking user login:', error);
        return null; // Return null if the user is not logged in or error occurs
    }
}

// Utility function to show messages
export function showMessage(message) {
    alert(message); // Accept a message parameter for flexibility
}
