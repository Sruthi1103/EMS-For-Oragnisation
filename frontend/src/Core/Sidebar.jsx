import React from "react";

import { Link } from "react-router-dom";

import "./sidebar.css";

//import logo from "./gmail.png";

const Sidebar = () => {
  return (
    <div style={{ backgroundColor: "#dcdcdc" }} className="sidebar">
      <div className="sidebar__logo">
        {/* <img src={logo} alt="company logo" /> */}
        <i class="bx bxs-envelope" style={{ fontSize: "5rem" }}></i>
      </div>
      <Link to="/">
        <div style={{ color: "#000000" }} className="sidebar__item ">
          <div className="sidebar__item-inner">
            <i class="bx bxs-dashboard" style={{ fontSize: "1.5rem" }}></i>
            <span>Dashboard</span>
          </div>
        </div>
      </Link>
      <Link to="/bulkmailer">
        <div style={{ color: "#000000" }} className="sidebar__item ">
          <div className="sidebar__item-inner">
            <i className={"bx bxs-envelope"} style={{ fontSize: "1.5rem" }}></i>
            <span>BulkMailer</span>
          </div>
        </div>
      </Link>
      <Link to="/mailerlist">
        <div style={{ color: "#000000" }} className="sidebar__item ">
          <div className="sidebar__item-inner">
            <i class="bx bx-spreadsheet" style={{ fontSize: "1.5rem" }}></i>
            <span>MailerList</span>
          </div>
        </div>
      </Link>
      <Link to="/azurecalc">
        <div style={{ color: "#000000" }} className="sidebar__item ">
          <div className="sidebar__item-inner">
            <i class="bx bxs-calculator" style={{ fontSize: "1.5rem" }}></i>
            <span>AzureCalculator</span>
          </div>
        </div>
      </Link>
      <Link to="/azureRequests">
        <div style={{ color: "#000000" }} className="sidebar__item ">
          <div className="sidebar__item-inner">
            <i class="bx bxs-calculator" style={{ fontSize: "1.5rem" }}></i>
            <span>AzureRequests</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
