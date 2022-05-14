import { setupPageFunctionality } from './domUtils.js'
import { getDatabase, ref, set } from "firebase/database";

setupPageFunctionality()

function writeUserData() {
    const db = getDatabase();
    var email=document.getElementById("fname").value
  set(ref(db, 'users/'), {
    email: email,
  });
}


