import { useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [blank, setblank] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);

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
        <input type="email" name="email" placeholder="user@rapptrlabs.com" />

        <label>Password</label>
        <FontAwesomeIcon className="icon" icon={faLock} beat />
        <input
          type="password"
          name="password"
          placeholder="Must be at least 4 characters"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
