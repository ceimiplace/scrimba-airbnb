import logo from "../images/airbnblogo.svg";
import "./Navbar.css";
export default function NavBar() {
  return (
    <nav className="navigation">
      <img src={logo} className="navigation--logo" />
    </nav>
  );
}
