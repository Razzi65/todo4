// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCy6Q66zXcpvpWo8BVlDy-kgMBggAiD-M",
  authDomain: "todoredux-e06f7.firebaseapp.com",
  projectId: "todoredux-e06f7",
  storageBucket: "todoredux-e06f7.appspot.com",
  messagingSenderId: "557138708428",
  appId: "1:557138708428:web:655bdf392af35e98843f69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db