import React, { useState } from "react";
import { request } from "../axios_helper";
import Buttons from "./Buttons";
import AuthContent from "./AuthContent";
import LoginForm from "./LoginForm";
import WelcomeContent from "./WelcomeContent";

const AppContent = () => {
  const [componentToShow, setComponentToShow] = useState("welcome");

  const login = () => {
    setComponentToShow("login");
  };

  const logout = () => {
    setComponentToShow("welcome");
  };

  return (
    <>
      <Buttons login={login} logout={logout} />

      {componentToShow === "welcome" && <WelcomeContent />}
      {componentToShow === "login" && <LoginForm onComponentChange={setComponentToShow} />}
      {componentToShow === "messages" && <AuthContent />}
    </>
  );
};

export default AppContent;
