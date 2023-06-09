import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { setDoc, getDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase.config';
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleLogin = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check for user in Firestore "users" collection
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      // if the user does not exist, create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could Not authorize with Google!");
    }
  };

  return (
    <div className='socialLogin'>
      <p>Sign {location.pathname === "/sign-up" ? "Up" : "In"} With</p>
      <button className='socialIconDiv' onClick={onGoogleLogin}>
        <img src={googleIcon} alt="google" className='socialIconImg' />
      </button>
    </div>
  );
}

export default OAuth;