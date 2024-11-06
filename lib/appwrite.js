import { Alert } from "react-native";
import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.gokila",
  projectId: "6728b11d003608b24411",
  databaseId: "6728b324000b04f0c97a",
  userCollectionId: "6728b37d0037e27458c4",
  videoCollectionId: "6728b3a3002b01c2f051",
  storageId: "6728b63500089e4e8e9e",
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatar = new Avatars(client);
const dataBase = new Databases(client);
export const createUser = async (email, userName, password) => {
  console.log(email, "appwritemail", userName, password);
  try {
    const createUser = await account.create(
      ID.unique(),
      email,
      password,
      userName
    );
    console.log(createUser, "createUser", account);
    if (!createUser) throw Error;
    const createAvatar = avatar.getInitials(userName);
    console.log(createAvatar, "avatar");

    const newUser = dataBase.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: createUser.$id,
        email,
        userName,
        avatar: createAvatar,
      }
    );
    await signIn(email, password);

    return newUser;
  } catch (error) {
    throw new Error(error, "error,");
  }
  // account.create(ID.unique(), "me2@example.com", "password", "Janes Doe").then(
  //   function (response) {
  //     console.log(response);
  //   },
  //   function (error) {
  //     console.log(error);
  //   }
  // );
};

export async function signIn(email, password) {
  try {
    const currentUser = account.get();
    if (currentUser) {
      Alert.alert("ERROR", "User already sign in");
      return currentUser;
    }
    console.log(currentUser, "Session");

    const signIn = await account.createEmailPasswordSession(email, password);
    return signIn;
  } catch (error) {
    console.log(error, "Active");
  }
}
