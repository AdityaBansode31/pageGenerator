import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9JQ_Bhtwro0xeGeHEOz-m_4CTlq5m88k",
    authDomain: "pagegenerator-a7c6e.firebaseapp.com",
    projectId: "pagegenerator-a7c6e",
    storageBucket: "pagegenerator-a7c6e.appspot.com",
    messagingSenderId: "137931627409",
    appId: "1:137931627409:web:bfee56c8909c71d41a5830",
    measurementId: "G-0ES1WWCBVX",
    databaseURL: "https://pagegenerator-a7c6e-default-rtdb.firebaseio.com"

  };
  
 export const app = initializeApp(firebaseConfig);  