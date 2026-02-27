import {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase"; 
import {Link} from "react-router-dom";
function Register(){
    const [email,setEmail] = useState("");
    const[pass,setPass] = useState("");
    const[conPass,setConPass] = useState("");

    function verifyEmail(e){
  setEmail(e.target.value);
    }

    function verifyPass(e){
        setPass(e.target.value)
    }
function verifyConPass(e){
    setConPass(e.target.value)
}
async function verifyForm(){
    if(!email || !pass || !conPass){
        alert("all feilds are required");
        return;
    }
    if(pass!==conPass){
        alert("Passwords do not match");
    return;
    }
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
    console.log("Registered user:", userCredential.user);
    alert("Registration successful!");
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}


    return(
        <>
<lable>Email :</lable>
<input type="email"
placeholder = "Enter your mail id"
name = "email"
value={email}
onChange={verifyEmail}/>
<br>
</br>
<input type="password"
placeholder="Enter password"
name ="password"
value={pass}
onChange={verifyPass}/>
<input type="password"
placeholder="confirm password"
name ="confirm_password"
value={conPass}
onChange={verifyConPass}/>
<br>
</br>
<button onClick={verifyForm}>
    Register
</button>
<Link to="/LoginPage"><button>Sign in</button></Link> 
        </>
    )
}
export default Register;