import { setupPageFunctionality } from './domUtils.js'
import { getDatabase, ref, set } from "firebase/database";

setupPageFunctionality()

function writeUserData(email) {
  const db = getDatabase();
  set(ref(db, 'users/'), {
    email: email,
  });
}


