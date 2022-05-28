import React, { useState } from "react";
import Base from "../Core/Base";
import axios from "axios";
const BulkMailer = () => {
  const [msg, setMsg] = useState("");
  const [values, setValues] = useState({
    to: "",
    subject: "",
    description: "",
  });

  const { to, subject, description } = values;
  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/sendmail/", values)
      .then((response) => setMsg(response.data.respMesg));
  };
  return (
    <Base title="Bulk Mailer">
      <div style={{ padding: "20px 100px 5px 150px" }} className="container">
        <div class="row">
          <div className="col-md-10 mx-auto shadow p-3">
            <p class="mb-3 mt-2" style={{ color: "green", marginLeft: "57px" }}>
              <b>{msg}</b>
            </p>
            <div className="form-group mb-3">
              <input
                style={{ height: "10", fontSize: "1rem" }}
                type="text"
                className="form-control form-control-lg"
                placeholder="Event Name"
                name="to"
                onChange={onInputChange}
                value={to}
              />
              <hr></hr>
            </div>
            <div className="form-group  mb-4 ">
              <input
                placeholder="Subject"
                style={{ height: "10", fontSize: "1rem" }}
                type="text"
                className="form-control form-control-lg"
                name="subject"
                onChange={onInputChange}
                value={subject}
              />
              <hr></hr>
            </div>
            <div className="form-group  mb-4">
              <textarea
                style={{ height: "40vh", fontSize: "1rem" }}
                type="text"
                className="form-control form-control-lg"
                placeholder="Description"
                name="description"
                onChange={onInputChange}
                value={description}
              />
            </div>

            <button
              onClick={onSubmit}
              className="btn btn-primary btn-block "
              style={{ backgroundColor: "#e32636" }}
            >
              Send Mail
            </button>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default BulkMailer;
