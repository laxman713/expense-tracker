import { useState,useCallback } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { Link } from "react-router-dom";
import Home from "./HomePage"
import { sendPasswordResetEmail } from "firebase/auth";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

function handleEmail(e){
  setEmail(e.target.value);

}
function handlePass(e){
  setPass(e.target.value);
}


const clickBtn = useCallback(async ()=>{
  if(!email || !pass){
    alert("All fields are required");
    return;
  }
  try{
        const userCredential = await signInWithEmailAndPassword(auth, email, pass);
       alert("Logged in Successfully")
       setLoggedIn(true);
    
  }
  catch(error){
    console.log(error);      // debug
    if(error.code === "auth/user-not-found"){
        alert("Email not registered");
    } else if(error.code === "auth/wrong-password"){
        alert("Invalid password");
    } else if(error.code === "auth/invalid-email"){
        alert("Invalid email format");
    } else {
        alert(error.message); // fallback
    }
}
},[email,pass])
function handleForgotPassword() {
  if (!email) {
    alert("Please enter your email first");
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password reset email sent! Check your inbox.");
    })
    .catch((error) => {
      console.error(error);
      alert(error.message); // handle invalid email, etc.
    });
}
if(loggedIn){
      return  <Home/>
      }


  return(
    <>
   <input type="email" 
   placeholder="Enter youe email"
   name="name"
   value={email}
   onChange={handleEmail}/><br></br>
   <input type="password"
   placeholder="Enter password"
   name="pass"
   value={pass}
   onChange={handlePass}/>
   <br></br>
  
<button onClick={clickBtn}>Sign in</button>
<Link to="/RegisterPage"><button>Register</button></Link>
  <p>
  <button onClick={handleForgotPassword}>Forgot Password?</button>
</p>
    </>
  )
}
export default LoginPage