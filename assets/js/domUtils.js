//Firebase Code

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRE1IqEmbBYEKm1viuilF1cTmaQYmt198",
  authDomain: "passion8-app.firebaseapp.com",
  databaseURL: "https://passion8-app-default-rtdb.firebaseio.com",
  projectId: "passion8-app",
  storageBucket: "passion8-app.appspot.com",
  messagingSenderId: "727922558608",
  appId: "1:727922558608:web:1cd131d0bd1da784b03a15",
  measurementId: "G-CQYZJG76BN"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Page Functionality

export function setupPageFunctionality() {
  document.getElementById('hamburger-close').onclick = overlayHandler.bind(this)
  document.getElementById('hamburger-open').onclick = overlayHandler.bind(this)

  document.getElementById('home').onclick = overlayHandler.bind(this)
  document.getElementById('privacy').onclick = overlayHandler.bind(this)
  document.getElementById('download').onclick = overlayHandler.bind(this)
  document.getElementById('submit').onclick = collectUserEmail.bind(this)
}

//Navbar

let toggleStatus = true

function overlayHandler() {
  const overlayElement = document.getElementById('menu-overlay')

  if (toggleStatus) {
    overlayElement.classList.remove('passion__navbar-mobileScreen-overlayClose')
    overlayElement.classList.add('passion__navbar-mobileScreen-overlayOpen')
    toggleStatus = false
  } else {
    overlayElement.classList.remove('passion__navbar-mobileScreen-overlayOpen')
    overlayElement.classList.add('passion__navbar-mobileScreen-overlayClose')
    toggleStatus = true
  }
}


//Email Input

function collectUserEmail() {
  const database = getDatabase()
  const reference = ref(database, 'users/')
  var email = document.getElementById("email").value 
  set(reference, {
    email: email,
  })
}
