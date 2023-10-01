// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpJn6Xx5IawI85qCPzqLPk3yE8Y5WHeu4",
  authDomain: "wedding-9ad1c.firebaseapp.com",
  projectId: "wedding-9ad1c",
  storageBucket: "wedding-9ad1c.appspot.com",
  messagingSenderId: "916539478928",
  appId: "1:916539478928:web:da0f3dc3d5ed4a0eebd915",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// function to add a note to the db, takes name and text as arguments
export async function addGuest(name, text) {
  return new Promise(async (resolve, reject) => {
    // get a reference to the notes collection
    const guestbookRef = collection(db, "guestbook");
    // add a new document to the notes collection
    await addDoc(guestbookRef, {
      name,
      text,
    });

    resolve();
  });
}
