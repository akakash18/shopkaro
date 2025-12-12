import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import AllRoutes from "./AllRoutes";

export default function Navbar() {
  let aStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
  };

  let navStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "80px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    backgroundColor: "#1A48A3",
  };
  return (
    <div style={navStyle}>
      <Link to="/">
        <img src={Logo} style={{ width: "120px", height: "100%" }} alt="" />
      </Link>
      <Link style={aStyle} to="/mens">
        Mens
      </Link>
      <Link style={aStyle} to="/womens">
        Womens{" "}
      </Link>
      <Link style={aStyle} to="/kids">
        Kids{" "}
      </Link>
      <Link style={aStyle} to="/electronics">
        Electronics
      </Link>
      <Link style={aStyle} to="/jewelery">
        Jewelery{" "}
      </Link>
      <Link style={aStyle} to="/footwear">
        Footwear
      </Link>
      <Link style={aStyle} to="/homeandkitchens">
        Home And Kitchen
      </Link>
    </div>
  );
}
