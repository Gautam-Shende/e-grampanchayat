import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDelrJue-pdxMV1lceKaaK9V-AKCuzXRgI",
  authDomain: "e-grampanchayat-1de48.firebaseapp.com",
  databaseURL: "https://e-grampanchayat-1de48-default-rtdb.firebaseio.com",
  projectId: "e-grampanchayat-1de48",
  storageBucket: "e-grampanchayat-1de48.firebasestorage.app",
  messagingSenderId: "769173559720",
  appId: "1:769173559720:web:a7bc4765d47220fb4da59d",
  databaseURL: "https://e-grampanchayat-1de48-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
