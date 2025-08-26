import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import app from './firebase.config.js';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    // The signed-in user info.
    const user = result.user;
    return { user };
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData ? error.customData.email : 'N/A';
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.error("Authentication Error", { errorCode, errorMessage, email, credential });
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

export default auth;
