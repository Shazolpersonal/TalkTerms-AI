import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import app from '@/firebase.config.js';

const auth = getAuth(app);
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

export default auth;
