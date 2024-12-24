"use client";
import { GoogleLogin } from "@react-oauth/google";
import React from "react";

const LoginGoogleButton = () => {
  return (
    <main>
      <GoogleLogin
        text="Lanjutkan Dengan Google"
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </main>
  );
};

export default LoginGoogleButton;
