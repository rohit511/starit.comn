
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const Login = (event) => {
    event.preventDefault();

    const LoggedUser = JSON.parse(localStorage.getItem("user"));

    if (
      input.email === LoggedUser?.email &&
      input.password === LoggedUser?.password
    ) {
      localStorage.setItem("Loggedin", true);

      navigate("/");
    } else {
    alert(" ❌ please enter correct details ");
      
    }
  };
  return (
    <div className="Register">
      <form onSubmit={Login} >
        <h1 >SignIn To Account</h1>

        <div className="ctn">
          <input
            type="email"
            id="email"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            placeholder="email"
          />
        </div>
        <div className="ctn">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={input.password}
            onChange={handleInputChange}
          />
        </div>
                <div className="sign-button">

        <NavLink to="/" className="regbtn" onClick={Login}>
          Login
        </NavLink>
        <div className="t">
          <NavLink to="/register" className="regbtn"> Register</NavLink>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
