import { useState } from 'react';
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from "react-toastify";
import { ReactComponent as RightArrowIcon } from "../assets/svg/keyboardArrowRightIcon.svg";


function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Password Reset Link Has been Sent");
    } catch (error) {
      console.log(error);
      toast.error("Could not send reset Email!");
    }
  };

  return (
    <div className='pageContainer'>
      <header>
        <p className="pageHeader">Forgot Password?</p>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <input type="email" className="emailInput" placeholder='email' id="email"
            value={email} onChange={handleChange} />
          <div className="signInBar">
            <div className="signInText">Send Reset LInk</div>
            <button className="signInButton">
              <RightArrowIcon fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
          <Link className='forgotPasswordLink' to="/sign-in">SignIn</Link>
        </form>
        
      </main>
    </div>
  );
}

export default ForgotPassword;