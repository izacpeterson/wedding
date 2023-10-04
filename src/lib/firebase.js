// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
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
export const storage = getStorage(app);

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

    notify(name + " has signed the guestbook!" + "\n" + text);

    resolve();
  });
}

function notify(msg) {
  var data = {
    content: "New Wedding Note\n" + msg,
  };
  var options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch("https://discordapp.com/api/webhooks/770724245214986261/qQTsNZsFXoiRopoc6EB3p0Ixt7427RkLd-BB_Cf4xKcWoOhFmvV1__2wJu590gkEAwmz", options);
}

export async function uploadImage(file) {
  return new Promise(async (resolve, reject) => {
    const storageRef = ref(storage, "images/" + file.name);
    await uploadBytes(storageRef, file);
    resolve();
  });
}

export async function getNotes() {
  return new Promise(async (resolve, reject) => {
    const notesCol = collection(db, "guestbook");
    const notesSnapshot = await getDocs(notesCol);
    const notesList = notesSnapshot.docs.map((doc) => doc.data());
    resolve(notesList);
  });
}

export async function logVisitor() {
  return new Promise(async (resolve, reject) => {
    let raw = await fetch("https://ipapi.co/json/");
    let data = await raw.json();

    const visitorCol = collection(db, "visitors");
    await addDoc(visitorCol, {
      time: Date.now(),
      timestring: new Date().toLocaleString(),
      ip: data.ip,
      city: data.city,
      region: data.region,
      country: data.country,
    });
    resolve();
  });
}

export async function getVisitors() {
  return new Promise(async (resolve, reject) => {
    const visitorCol = collection(db, "visitors");
    const visitorSnapshot = await getDocs(visitorCol);
    const visitorList = visitorSnapshot.docs.map((doc) => doc.data());
    resolve(visitorList);
  });
}
