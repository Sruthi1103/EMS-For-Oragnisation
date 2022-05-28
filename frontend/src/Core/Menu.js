import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
// const currentTab = (history, path) => {
//   if (history.location.pathname === path) {
//     return { color: "#FFFFFF" };
//   } else {
//     return { color: "#d1d1d1" };
//   }
// };

const Menu = () => {
  return (
    <div
      style={{
        background: "",
        boxShadow: "inset 4px 3px 8px 1px #CAD5E2",
        WebkitBoxShadow: "inset 4px 3px 8px 1px #CAD5E2",
        display: "flex",
        justifyContent: "end",
        width: "100%",
        height: "60px",
        padding: "20px 50px 5px 10px",
      }}
    >
      <ul className="nav">
        <li className="nav-item">
          <Link
            style={{ padding: "5px 15px 5px 5px", color: "#969996" }}
            className="nav-link"
            to="/signin"
          >
            Signin
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{ padding: "5px 15px 5px 5px", color: "#969996" }}
            className="nav-link"
            to="/signup"
          >
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{ padding: "5px 15px 5px 5px", color: "#969996" }}
            className="nav-link"
            to="/signout"
          >
            Signout
          </Link>
        </li>
        <li className="nav-item">
          {/* <img style={{ height: "30px" }} src={logo} alt="company logo" /> */}
          <i style={{ fontSize: "2rem" }} class="bx bx-user-circle"></i>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
