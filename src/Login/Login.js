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
    <div>
      <form>
        <h1>Rapptr Labs</h1>
        <label className="input-wrapper">
          Email
          <FontAwesomeIcon className="icon" icon={faUser} beat />
          <input type="email" name="email" placeholder="user@rapptrlabs.com" />
        </label>
        <label className="input-wrapper">
          Password
          <FontAwesomeIcon className="icon" icon={faLock} beat />
          <input
            type="password"
            name="password"
            placeholder="Must be at least 4 characters"
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
export default Login;
