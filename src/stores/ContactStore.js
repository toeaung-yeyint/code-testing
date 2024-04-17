import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { db, auth } from "../firebase";
import {
	onAuthStateChanged,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import {
	collection,
	doc,
	getDocs,
	addDoc,
	deleteDoc,
	query,
	orderBy,
	onSnapshot,
} from "firebase/firestore";

export const useContactStore = defineStore("ContactStore", () => {
	const loginUser = ref(null);
	const isSignInForm = ref(true);
	const contactList = ref([]);
	const name = ref("");
	const phNumber = ref("");
	const search = ref("");
	const email = ref("");
	const password = ref("");
	const regEmail = ref("");
	const regPassword = ref("");

	const handleSignUp = async (e) => {
		e.preventDefault();
		try {
			await createUserWithEmailAndPassword(
				auth,
				regEmail.value,
				regPassword.value
			);
			regEmail.value = "";
			regPassword.value = "";
		} catch (error) {
			console.log(error.message);
			regEmail.value = "";
			regPassword.value = "";
		}
	};

	const handleSignIn = async (e) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email.value, password.value);
			email.value = "";
			password.value = "";
		} catch (error) {
			console.log(error.message);
			email.value = "";
			password.value = "";
		}
	};

	onAuthStateChanged(auth, (currentUser) => {
		loginUser.value = currentUser;
	});

	const fetchContactList = async () => {
		const querySnapshot = await getDocs(
			query(collection(db, "contacts"), orderBy("name"))
		);
		contactList.value = [...querySnapshot.docs];
	};

	onSnapshot(query(collection(db, "contacts"), orderBy("name")), (doc) => {
		contactList.value = [...doc.docs];
	});

	const addContacts = async (e) => {
		e.preventDefault();
		try {
			await addDoc(collection(db, "contacts"), {
				name: name.value,
				phNumber: phNumber.value,
			});
			name.value = "";
			phNumber.value = "";
		} catch (error) {
			console.error("Error fetching contacts:", error);
		}
	};

	const deleteContacts = async (id) => {
		try {
			await deleteDoc(doc(db, "contacts", id));
		} catch (error) {
			console.error("Error fetching contacts:", error);
		}
	};

	const filteredContacts = computed(() => {
		return contactList.value.filter((contact) =>
			contact
				.data()
				.name.toLowerCase()
				.includes(search.value.trim().toLowerCase())
		);
	});

	return {
		loginUser,
		isSignInForm,
		email,
		password,
		regEmail,
		regPassword,
		handleSignUp,
		handleSignIn,
		filteredContacts,
		search,
		name,
		phNumber,
		fetchContactList,
		addContacts,
		deleteContacts,
	};
});
