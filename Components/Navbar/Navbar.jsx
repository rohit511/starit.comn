import  { useState } from "react";
import "./Navbar.css";
import{FaBars} from "react-icons/fa"
import { MdPersonPin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState(false);
 const navigate = useNavigate();
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <img src="./disney.png" />
      <div className="menu-icon" onClick={handleClick}>
        <FaBars className={active ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        <li
          className="nav-links"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </li>
        <li
          className="nav-links"
          onClick={() => {
            navigate("/prime");
          }}
        >
          Subscribe
        </li>
        <li
          className="nav-links"
          onClick={() => {
            navigate("/register");
          }}
        >
          Login
        </li>

        <li
          className="nav-links sera"
          onClick={() => {
            navigate("/search");
          }}
        >
          Search
        </li>

        <li className="nav-links">
          <MdPersonPin className="nav-te" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
