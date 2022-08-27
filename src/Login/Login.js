import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  // const [authenticated, setAuthenticated] = useState(
  //   localStorage.getItem(localStorage.getItem("authenticated") || false)
  // );
  const [emailError, setEmailError] = useState({ color: "", message: "" });
  const [passwordError, setPasswordError] = useState({
    color: "",
    message: "",
  });

  const API = "http://dev.rapptrlabs.com/Tests/scripts/user-login.php";

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
    console.log(e);
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
    console.log("submitting");
    // store the states in the form data
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
      console.log(response);
      if (response.status === 200) {
        // setAuthenticated(true);
        // localStorage.setItem("authenticated", true);
        setLoading(false);
        navigate("/mylist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
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
        {emailError.message && (
          <p style={{ color: emailError.color }}>{emailError.message}</p>
        )}

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
