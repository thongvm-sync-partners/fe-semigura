import { Link } from "@mui/material";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import * as STRINGS from "../../constants/string";
import * as ROUTES from "../../constants/routes";
import "./Login.css";
import GeneralForm from "../../components/GeneralForm/GeneralForm";

import * as COLORS from "../../constants/colors";
function Login() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  const handleLogin = (data) => {
    setLogin(true);
  };
  const fields = [
    {
      register: "username",
      label: "Username",
      type: "text",
    },
    {
      register: "password",
      label: "Password",
      type: "password",
    },
    {
      register: "rememberMe",
      label: "Remember me",
      type: "checkbox",
    },
  ];
  useEffect(() => {
    if (login) {
      setLogin(false);
      navigate(ROUTES.dashBoard.path);
    }
  }, [navigate, login]);
  return (
    <>
      {/* {status === LOADING && (
        <>
          <LoadingBar background="blue" ref={ref} />
        </>
      )} */}
      <div className="container-wrap">
        <div style={{ width: "40%" }}>
          <div className="container-title">
            <span style={{ color: COLORS.primaryMain }} className="title">
              {STRINGS.login.title}
            </span>
          </div>
          <GeneralForm
            fields={fields}
            handleProcess={handleLogin}
            submitBtn={STRINGS.login.loginBtn}
          />
          <div className="forgot-signup">
            <Link className="forgot-singup-link">
              {STRINGS.login.forgotPassword}
            </Link>
            <Link className="forgot-singup-link">{STRINGS.login.signUp}</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
