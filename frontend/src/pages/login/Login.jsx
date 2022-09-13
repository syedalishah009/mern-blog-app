import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";
import "./login.css";

export default function Login() {
   const [username, setUsername] = useState();
   const [password, setPassword] = useState();
  const dispatch = useDispatch();


   const handleClick = async (e)=>{
      e.preventDefault();
      dispatch(loginStart());
      try{
         const res = await axios.post("/auth/login", {username, password})
         dispatch(loginSuccess(res.data));
      } catch(err){
         dispatch(loginFailure());
      }
   }
  return (
    <div className="container">
    <div class="wrapper">
         <div class="title-text">
            <div class="title login">
               Login
            </div>
            
         </div>
         <div class="form-container">
            
            <div class="form-inner">
               <form action="#" class="login">
                  <div class="field">
                    <label for="email">Username</label>
                     <input onChange={(e)=> setUsername(e.target.value)} type="text" placeholder="Enter your Email" required/>
                  </div>
                  <div class="field">
                    <label for="pass">password</label>
                     <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter your Password" required/>
                  </div>
                  
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input onClick={handleClick} id="btn1" type="submit" value="Login"/>
                  </div>
                  <div class="pass-link">
                    <a href="#">Forgot password?</a>
                 </div>
                  <div class="signup-link">
                     Don't have an account? <a href="">Signupnow</a>
                  </div>
               </form>
               
            </div>
         </div>
     </div>
     </div>
  );
}
