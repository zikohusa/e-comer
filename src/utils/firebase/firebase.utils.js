import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAgz4ukBac3CFGlr3TRG_w5P7W2eRBxBl0",
    authDomain: "crwn-project-z.firebaseapp.com",
    projectId: "crwn-project-z",
    storageBucket: "crwn-project-z.appspot.com",
    messagingSenderId: "677929761953",
    appId: "1:677929761953:web:b807bb506e76aada23c4e0"
};
const FirebaseApp = initializeApp(firebaseConfig);

const Provider = new GoogleAuthProvider();

Provider.setCustomParameters({
    prompt: "select_account"
});

export const Auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(Auth, Provider);

export const Db = getFirestore();

export const CreateUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(Db, 'users', userAuth.uid);
    console.log(userDocRef);
    const UserSnapshot = await getDoc(userDocRef);
    console.log(UserSnapshot);
    console.log(UserSnapshot.exists());

    if(!UserSnapshot.exists()) {
        const{ displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            });
        } catch(error) {
            console.log('error creating the user', error.message);
        }

        return userDocRef;
    }
}