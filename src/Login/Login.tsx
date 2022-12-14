import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "./login.css";

const Login = ({ authenticated, setAuthenticated, animate, setAnimate }) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [serverError, setServerError] = useState(false);
  const [emailError, setEmailError] = useState({ color: "", message: "" });
  const [passwordError, setPasswordError] = useState({
    color: "",
    message: "",
  });

  //left out http or https due to errors with the request after deployment
  const API = "//dev.rapptrlabs.com/Tests/scripts/user-login.php";

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const submitEmail = (e) => {
    if (!isValidEmail(e)) {
      setEmailError({
        color: "red",
        message: "Not a valid email",
      });
    } else {
      setEmailError({ color: "green", message: "" });
      setFormValues({ ...formValues, email: e });
    }
  };

  const submitPassword = (e) => {
    if (e.length < 4 || e.length > 16) {
      setPasswordError({
        color: "red",
        message: "Please enter a valid email address",
      });
    } else {
      setPasswordError({ color: "green", message: "" });
      setFormValues({ ...formValues, password: e });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // store the states in the form data using a key value pair
    const loginFormData = new FormData();
    loginFormData.append("email", formValues.email);
    loginFormData.append("password", formValues.password);

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: `${API}/login`,
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        setAnimate(true);
        setTimeout(() => {
          setAuthenticated(true);
          localStorage.setItem("authenticated", true);
          setAnimate(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      setServerError(!serverError);
    }
  };

  return (
    <div className="container">
      <div className="background">
        <div
          className="shape circle1"
          style={{
            animation: animate
              ? "glideDown 2s ease-in-out infinite alternate"
              : "none",
          }}
        ></div>
        <div
          className="shape circle2"
          style={{
            animation: animate
              ? "glideUp 2s ease-in-out infinite alternate"
              : "none",
          }}
        ></div>
      </div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1 className="loginHeader">Rapptr Labs</h1>
        <label className="loginLabel">Email</label>
        <FontAwesomeIcon className="icon" icon={faUser} />
        <input
          type="email"
          name="email"
          className="loginInput"
          placeholder="user@rapptrlabs.com"
          maxLength="50"
          style={{ border: `1px solid ${emailError.color}` }}
          onChange={(e) => submitEmail(e.target.value)}
          required
        />
        {emailError.message && (
          <p style={{ color: emailError.color }}>{emailError.message}</p>
        )}

        <label className="loginLabel">Password</label>
        <FontAwesomeIcon className="icon" icon={faLock} />
        <input
          type="password"
          name="password"
          className="loginInput"
          placeholder="Must be at least 4 characters"
          minLength="4"
          maxLength="16"
          style={{ border: `1px solid ${passwordError.color}` }}
          onChange={(e) => submitPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className={
            "loginButton " +
            (emailError.color === "green" && passwordError.color === "green"
              ? ""
              : "deactivated")
          }
        >
          Login
        </button>
        {serverError && (
          <p className="loginError">
            There was an error with your login. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};
export default Login;
