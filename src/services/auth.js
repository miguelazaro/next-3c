import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./"
const auth = getAuth();

function login(email, password) {
  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, email, password)

  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.code, errorMessage)
  }); 
}

export { login } 



