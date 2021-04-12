import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <h1>Select to view</h1> */}
      <div className="links">
        {/* <h1>Select Your option to view</h1> */}
        <ul className="linkOptions">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="./catapp">Cat Api</Link>
          </li>

          <li>
            <Link to="/buttoncount">Button Counter</Link>
          </li>
          <li>
            <Link to="/backgroundcolor">Change color</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
