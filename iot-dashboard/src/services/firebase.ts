import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; 



const firebaseConfig = {
  apiKey: "AIzaSyAynNJI2S2kBo-_BexsL-Ace09p5Pprdk8",
  authDomain: "tp-iot-1ad36.firebaseapp.com",
  databaseURL: "https://tp-iot-1ad36-default-rtdb.firebaseio.com",
  projectId: "tp-iot-1ad36",
  storageBucket: "tp-iot-1ad36.firebasestorage.app",
  messagingSenderId: "406460419442",
  appId: "1:406460419442:web:6876fc05e1600d1e3561eb",
  measurementId: "G-MS54LSB6D0"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Inicialize o Realtime Database
export const db = getDatabase(app);