import "./Register.css";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  // code for local storage
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <div className="Register">
      <form onSubmit={handleSubmit} className="box">
        <h1>Create An Account</h1>
        <div className="ctn ">
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
            id="name"
            placeholder="name"
          />
        </div>
        <div className="ctn">
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            id="email"
            placeholder="email"
          />
        </div>
        <div className="ctn">
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleInputChange}
            className="pass"
            id="password"
            placeholder="password"
          />
        </div>
        <div className="sign-button">
          <NavLink className="regbtn" onClick={handleSubmit}>
            {" "}
            Register
          </NavLink>
          <div className="t">
            <NavLink
              className="regbtn"
              to="/login"
              style={{ textDecoration: "none" }}
            >
              {" "}
              Signin
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
