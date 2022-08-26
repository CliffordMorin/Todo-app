import { useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [emailError, setEmailError] = useState({ color: "", message: "" });
  const [passwordError, setPasswordError] = useState({
    color: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const submitEmail = (e) => {
    if (!isValidEmail(e)) {
      setEmailError({
        color: "red",
        message: "Please enter a valid email address",
      });
    } else {
      setEmailError({ color: "green", message: "" });
    }
  };

  const submitPassword = (e) => {
    console.log(e);
    if (e.length > 4 || e.length < 16) {
      setPasswordError({
        color: "red",
        message: "Please enter a valid email address",
      });
    } else {
      setPasswordError({ color: "green", message: "" });
    }
  };

  return (
    <div className="container">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h1>Rapptr Labs</h1>
        <label>Email</label>
        <FontAwesomeIcon className="icon" icon={faUser} beat />
        <input
          type="email"
          name="email"
          placeholder="user@rapptrlabs.com"
          maxLength="50"
          style={{ border: `1px solid ${emailError.color}` }}
          onChange={(e) => submitEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <FontAwesomeIcon className="icon" icon={faLock} beat />
        <input
          type="password"
          name="password"
          placeholder="Must be at least 4 characters"
          minLength="4"
          maxLength="16"
          style={{ border: `1px solid ${passwordError.color}` }}
          onChange={(e) => submitPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
