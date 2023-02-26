import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI_oLJkmpAnFnbIIK43BwZ_2jxfmyVU2c",
  authDomain: "evoting-fee1e.firebaseapp.com",
  databaseURL: "https://evoting-fee1e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "evoting-fee1e",
  storageBucket: "evoting-fee1e.appspot.com",
  messagingSenderId: "62575358156",
  appId: "1:62575358156:web:0a6720dc4d31b429659269"
};

// Initialize Firebase
export default const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);