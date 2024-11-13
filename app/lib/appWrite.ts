import { Client, Account, ID, Avatars, Databases, Query, Storage } from 'appwrite';
export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'viva-app',
    projectId: '670a5bd000149f04aeb9',
    databaseId: '670a5d00000a3113a471',
    userCollectionId: '670a5dad0021e5a8d271',
    storageId: '670a60230034001989d1'
}
const {
    endpoint,
    platform,
    projectId,
    databaseId,
    userCollectionId,
    storageId
} = config;

const client = new Client();
const avatars = new Avatars(client)
const databases = new Databases(client)
const storage = new Storage(client)

client
    .setEndpoint(endpoint) // Your Appwrite Endpoint
    .setProject(projectId) // Your project ID
    // .setPlatform(platform) // Your application ID or bundle ID.
;

const account = new Account(client);

// Register User
export const createUser = async (email: string, password: string, username: string) =>{
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if (!newAccount) throw Error;
        const avatarUrl = avatars.getInitials(username)

        // await signIn(email, password)

        const newUser = await databases.createDocument(
            databaseId,
            userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                password,
                avatar: avatarUrl
            }
        )
        return newUser
    } catch (error: any){
        console.log(error)
        throw new Error(error)
    }
}

// Sign in user
export const signIn = async(email: string, password: string) =>{
    try {
        // await account.deleteSession('current')
        const session = await account.createEmailPasswordSession(email, password)
        return session
    } catch (error: any) {
        throw new Error(error)
    }
}

// Get current user
export const getCurrentUser = async() =>{
    try {
        const currentAccount = await account.get()

        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            databaseId,
            userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )
        if (!currentUser) throw Error;
        return currentUser.documents[0]
        // return currentAccount;
    } catch (error: any) {
        throw new Error(error);  
    }
}