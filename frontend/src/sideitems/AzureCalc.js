import React, { useState } from "react";
import axios from "axios";
import Base from "../Core/Base";
import Select from "react-select";
import { API } from "../backend";

const AzureCalc = () => {
  const [msg, setMsg] = useState("");
  const services = [
    { label: "Virtual Machines", value: 1, name: "serviceName" },
    { label: "Storage", value: 2, name: "serviceName" },
  ];
  const oss = [
    { label: "Linux", value: 1, name: "OS" },
    { label: "Windows", value: 2, name: "OS" },
  ];
  const Linux = [
    { label: "CentOS", value: 1, name: "OStype" },
    { label: "Redhat Enterprise Linux", value: 2, name: "OStype" },
    { label: "Ubuntu", value: 2, name: "OStype" },
  ];
  const Windows = [
    { label: "windows 2013", value: 1, name: "OStype" },
    { label: "windows 2016", value: 2, name: "OStype" },
  ];
  const locations = [
    { label: "East US", value: 1, name: "location" },
    { label: "West US", value: 1, name: "location" },
    { label: "Central US", value: 1, name: "location" },
    { label: "UK South", value: 1, name: "location" },
    { label: "UK West", value: 1, name: "location" },
    { label: "East asia", value: 1, name: "location" },
    { label: "UAE central", value: 1, name: "location" },
    { label: "UAE North", value: 1, name: "location" },
    { label: "southeastasia", value: 2, name: "location" },
  ];
  const currencies = [
    { label: "USD", value: 1, name: "BillingCurrency" },
    { label: "INR", value: 2, name: "BillingCurrency" },
  ];

  const rams = [
    { label: "2vcpu 8GB RAM", value: 1, name: "Ram" },
    { label: "4vcpu 8GB RAM", value: 2, name: "Ram" },
    { label: "4vcpu 16GB RAM", value: 2, name: "Ram" },
    { label: "4vcpu 32GB RAM", value: 2, name: "Ram" },
    { label: "8vcpu 64GB RAM", value: 2, name: "Ram" },
  ];

  const [values, setValues] = useState({
    serviceName: "",
    productName: "",
    retailPrice: "",
    location: "",
    BillingCurrency: "",
    hrs: "",
    Days: "",
    OS: "",
    OStype: "",
    total: 0,
    Ram: "",
  });
  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("/api/find/", values)
      .then((response) => setMsg(response.data.total));
  };

  const onInputSelect = (e) => {
    setValues({ ...values, [e.name]: e.label });
  };

  return (
    <Base title="Azure Calculator">
      <div style={{ padding: "20px 100px 5px 150px" }} className="container">
        <div class="row">
          <div className="col-md-10 mx-auto shadow p-3">
            <div className="form-group mb-3">
              <Select
                name="serviceName"
                placeholder="Service Name"
                options={services}
                onChange={onInputSelect}
              />
              <p>{values.serviceName}</p>
              <hr></hr>
            </div>
            <div className="form-group mb-3">
              <Select
                name="OS"
                placeholder="OS"
                options={oss}
                onChange={onInputSelect}
              />
              <p>{values.OS}</p>
              <hr></hr>
            </div>

            <div className="form-group mb-3">
              <Select
                name="OStype"
                placeholder="OStype"
                options={values.OS === "Windows" ? Windows : Linux}
                onChange={onInputSelect}
              />
              <p>{values.OStype}</p>
              <hr></hr>
            </div>
            <div className="form-group mb-3">
              <Select
                name="location"
                placeholder="Locations"
                options={locations}
                onChange={onInputSelect}
              />
              <p>{values.location}</p>
              <hr></hr>
            </div>

            <div className="form-group mb-3">
              <Select
                name="BillingCurrency"
                placeholder="Currency"
                options={currencies}
                onChange={onInputSelect}
              />
              <p>{values.BillingCurrency}</p>
              <hr></hr>
            </div>
            <div className="form-group mb-3">
              <Select
                name="Ram"
                placeholder="RAM"
                options={rams}
                onChange={onInputSelect}
              />
              <p>{values.Ram}</p>
              <hr></hr>
            </div>
            <div className="form-group mb-3">
              <input
                style={{ height: "10", fontSize: "1rem" }}
                type="text"
                className="form-control form-control-lg"
                placeholder="Hours used in a day"
                name="hrs"
                onChange={onInputChange}
                value={values.hrs}
              />
              <hr></hr>
            </div>
            <div className="form-group mb-3">
              <input
                style={{ height: "10", fontSize: "1rem" }}
                type="text"
                className="form-control form-control-lg"
                placeholder="No. of days"
                name="Days"
                onChange={onInputChange}
                value={values.Days}
              />
              <hr></hr>
            </div>

            <div col-md-10 mx-auto shadow p-3>
              <div>
                <p style={{ padding: "9px" }}>Approximate Cost : {msg}</p>
              </div>
            </div>

            <button
              onClick={onSubmit}
              className="btn btn-primary btn-block "
              style={{ backgroundColor: "#2c6ed5" }}
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default AzureCalc;
