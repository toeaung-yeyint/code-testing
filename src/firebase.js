import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAIP1OWXpOP6Qgo6dn0pCdJD86J1VOJHRw",
	authDomain: "testing-73cb9.firebaseapp.com",
	projectId: "testing-73cb9",
	storageBucket: "testing-73cb9.appspot.com",
	messagingSenderId: "158565699872",
	appId: "1:158565699872:web:35ffdb6e4e6b2af89e8745",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
