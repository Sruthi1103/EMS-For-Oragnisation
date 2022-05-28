import React from "react";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import "../assets/boxicons-2.0.7/css/boxicons.min.css";
import "./sidebar.css";

const Base = ({ title = "EMS", className = "", children }) => {
  return (
    <div>
      <Menu />
      <Sidebar />
      <div className="continer-fluid">
        <div
          style={{ padding: "30px 5px 5px 100px", color: "#969996" }}
          className="text-center"
        >
          <h2 className="display-10">{title}</h2>
        </div>
        <div className={className}>{children}</div>
      </div>
    </div>
  );
};

export default Base;
