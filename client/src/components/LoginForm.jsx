import React, { useState } from "react";

const LoginForm = ({ onComponentChange }) => {
  const [active, setActive] = useState("login");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    login: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await request("POST", "/login", {
        login: formData.login,
        password: formData.password,
      });
      onComponentChange("messages");
    } catch (error) {
      onComponentChange("welcome");
    }
  };

  const onSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await request("POST", "/register", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        login: formData.login,
        password: formData.password,
      });
      onComponentChange("messages");
    } catch (error) {
      onComponentChange("welcome");
    }
  };

  // Bootstrap CSS classses
  const classNames = {
    container: "row justify-content-center",
    column: "col-4",
    navPills: "nav nav-pills nav-justified mb-3",
    navItem: "nav-item",
    navLink: (isActive) => `nav-link ${isActive ? "active" : ""}`,
    tabContent: "tab-content",
    tabPane: (isActive) => `tab-pane fade ${isActive ? "show active" : ""}`,
    formOutline: "form-outline mb-4",
    formControl: "form-control",
    formLabel: "form-label",
    btnPrimary: "btn btn-primary btn-block mb-4",
    btnSignup: "btn btn-primary btn-block mb-3",
  };

  // CSS Styling
  const styles = {
    input: { marginBottom: "4px" },
  };

  return (
    <div className={classNames.container}>
      <div className={classNames.column}>
        <ul className={classNames.navPills} id="ex1" role="tablist">
          <li className={classNames.navItem} role="presentation">
            <button className={classNames.navLink(active === "login")} id="tab-login" onClick={() => setActive("login")}>
              Login
            </button>
          </li>
          <li className={classNames.navItem} role="presentation">
            <button className={classNames.navLink(active === "register")} id="tab-register" onClick={() => setActive("register")}>
              Register
            </button>
          </li>
        </ul>

        <div className={classNames.tabContent}>
          <div className={classNames.tabPane(active === "login")} id="pills-login">
            <form onSubmit={onSubmitLogin}>
              <div className={classNames.formOutline}>
                <input type="text" id="loginName" name="login" className={classNames.formControl} onChange={onChangeHandler} />
                <label className={classNames.formLabel} htmlFor="loginName">
                  Username
                </label>
              </div>

              <div className={classNames.formOutline}>
                <input type="password" id="loginPassword" name="password" className={classNames.formControl} onChange={onChangeHandler} />
                <label className={classNames.formLabel} htmlFor="loginPassword">
                  Password
                </label>
              </div>

              <button type="submit" className={classNames.btnPrimary}>
                Sign in
              </button>
            </form>
          </div>
          <div className={classNames.tabPane(active === "register")} id="pills-register">
            <form onSubmit={onSubmitRegister}>
              <div className={classNames.formOutline}>
                <input type="text" id="firstName" name="firstName" className={classNames.formControl} onChange={onChangeHandler} />
                <label className={classNames.formLabel} htmlFor="firstName">
                  First name
                </label>
              </div>

              <div className={classNames.formOutline}>
                <input type="text" id="lastName" name="lastName" className={classNames.formControl} onChange={onChangeHandler} />
                <label className={classNames.formLabel} htmlFor="lastName">
                  Last name
                </label>
              </div>

              <div className={classNames.formOutline}>
                <input type="text" id="login" name="login" className={classNames.formControl} onChange={onChangeHandler} />
                <label className={classNames.formLabel} htmlFor="login">
                  Username
                </label>
              </div>

              <div className={classNames.formOutline}>
                <input type="password" id="registerPassword" name="password" className={classNames.formControl} onChange={onChangeHandler} />
                <label className={classNames.formLabel} htmlFor="registerPassword">
                  Password
                </label>
              </div>

              <button type="submit" className={classNames.btnSignup}>
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
