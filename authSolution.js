```javascript
// authSolution.js
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const handleSignIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Successful sign-in
    console.log(userCredential);
  } catch (error) {
    // Handle errors
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      console.error('Wrong Password!');
      // Inform the user about the incorrect password
    } else if (errorCode === 'auth/user-not-found') {
      console.error('User Not Found!');
      // Inform the user that the account doesn't exist
    } else {
      console.error(`Firebase Authentication Error: ${errorMessage}`);
      // Handle other errors appropriately
    }
  }
};
```