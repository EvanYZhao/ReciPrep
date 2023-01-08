import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
// Might need a sticky header and footer for this

const SignInPage = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <div className="constraint">
      <img
        className="iPhone"
        src={require("../assets/images/iphone14.png")}
        alt="iPhone Frame"
      />
      <div className="signin-wrapper">
        <img
          className="logo"
          src={require("../assets/images/logo.png")}
          alt="logo"
        />
        <GoogleButton
          onClick={handleGoogleSignIn}
          className="google-signin-button"
        />
      </div>
    </div>
  );
};

export default SignInPage;
