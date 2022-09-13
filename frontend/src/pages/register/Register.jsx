import "./register.css";
import {useDispatch} from 'react-redux'
import { useState } from "react";
import {signupFailure, signupStart, signupSuccess } from "../../redux/userSlice";
import axios from "axios";


export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = async (e)=>{
   e.preventDefault();  // to prevent refreshing page after clicking login button
   dispatch(signupStart());
  try {
    const res = await axios.post("/auth/register", {username,email,password});
    dispatch(signupSuccess(res.data));
    window.location.replace("/login");
  } catch (err) {
    dispatch(signupFailure());
  }
  }
  
 

    return (
      <div className="container">
      <div class="wrapper">
      <div class="title-text">
         <div class="title login">
            Sign Up
         </div>
         
      </div>
      <div class="form-container">
         
         <div class="form-inner">
            <form action="#" class="login">
               <div class="field">
                 <label for="name">Name</label>
                  <input onChange={(e)=> setUsername(e.target.value)} type="text" placeholder="Enter your Name" required/>
               </div>
               <div class="field">
                 <label  for="email">Email</label>
                  <input onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Enter your Email" required/>
               </div>
               <div class="field">
                 <label for="pass">password</label>
                  <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter your Password" required/>
               </div>
               
               <div class="field btn">
                  <div class="btn-layer"></div>
                  <input onClick={handleClick} id="btn1" type="submit" value="Sign Up"/>
               </div>
               <div class="signup-link" id="lab1">
                  Don't have an account? <a href="">Signupnow</a>
               </div>
            </form>
            
         </div>
      </div>
   </div>
   </div>
    )
}
