import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import app from '@/firebase.config.js';

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    return { user };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Authentication Error", { errorCode, errorMessage });
    return { error: errorMessage };
  }
};

export const signOut = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        console.error("Sign out error", error);
    }
}

export const signUpWithEmail = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Create a user document in Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name: name,
      email: user.email,
    });

    return { user };
  } catch (error) {
    return { error: error.message };
  }
};

export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return { user };
  } catch (error) {
    return { error: error.message };
  }
};

export default auth;
