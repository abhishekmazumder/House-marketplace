import { useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { useNavigate, Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import OAuth from '../components/OAuth';

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Wrong Credentials!");
    }
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">
            Welcome Back!
          </p>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <input type="email" className="emailInput" placeholder='Email' id="email" value={email} onChange={handleChange} />
            <div className="passwordInputDiv">
              <input type={showPassword ? "text" : "password"} className="passwordInput" placeholder='Password'
                id="password" onChange={handleChange} />
              <img src={visibilityIcon} alt="show password" className="showPassword" onClick={() => setShowPassword(!showPassword)} value={password} />
            </div>
            <Link to="/forgot-password" className='forgotPasswordLink'>Forgot Password</Link>
            <div className="signInBar">
              <p className='signInText'>Sign In</p>
              <button className="signInButton">
                <ArrowIcon fill="#fff" width="34px" height="34px" />
              </button>
            </div>
          </form>
          {/* Google OAuth */}
          <OAuth />

          <Link to="/sign-up" className='registerLink'>Register With Us</Link>
        </main>
      </div>
    </>
  );
}

export default SignIn;