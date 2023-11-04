// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-vy9GFl2UQJG-8S9sbjXOn1BQLxZqeSE",
    authDomain: "hr-shop-982d1.firebaseapp.com",
    projectId: "hr-shop-982d1",
    storageBucket: "hr-shop-982d1.appspot.com",
    messagingSenderId: "217259640294",
    appId: "1:217259640294:web:af1394ff49cd992f1a0227",
    measurementId: "G-HBDF9C28ZC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);