import React, { useState } from "react";
import Base from "../Core/Base";
import { upload } from "../Auth";
import axios from "axios";
import { API } from "../backend";
// import Table from "../table/Table";
import { Card, Button, Alert, Table } from "react-bootstrap";

const MailerList = () => {
  var n = 0;
  const [alert, setalert] = useState(false);

  const [msg, setMsg] = useState([]);
  const [values, setValues] = useState({
    csvfile: "",
    createdProduct: "",
  });
  const [name, setName] = useState({
    eventName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("csvfile", values.csvfile);
    console.log(formData);
    upload(formData).then((data) => {
      setValues({
        ...values,
        csvFile: "",
      });
    });

    //window.location.reload();
    setalert(true);
  };

  const handlePhoto = (e) => {
    setValues({
      ...values,
      csvfile: e.target.files[0],
      createdProduct: e.target.files[0].name,
    });
  };
  const handleEmail = (e) => {
    setName({
      ...name,
      [e.target.name]: e.target.value,
    });
    console.log(name.eventName);
  };
  const successMessage = () => (
    <div
      className="alert"
      style={{
        display: values.createdProduct ? "" : "none",
      }}
    >
      <h6>{values.createdProduct}</h6>
    </div>
  );
  const displayAlert = () => (
    <Alert variant="success" style={{ display: alert === true ? "" : "none" }}>
      <p>Uploaded Successfully !!</p>
      <div className="d-flex justify-content-end">
        <Button
          onClick={() => {
            setalert(false);
            window.location.reload();
          }}
          variant="outline-success"
        >
          Close
        </Button>
      </div>
    </Alert>
  );
  const whileSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${API}/findEmail/`, name).then((response) => {
      setMsg(response.data.respMesg);
      msg.forEach((val) => {
        let tmp = {
          eventname: name.eventName,
          emailid: val,
        };
        topCustomers.body.push(tmp);
      });
    });
  };
  const topCustomers = {
    head: ["Event Name", "Email ID"],
    body: [],
  };

  const createList = () => (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      {/* <span>Upload CSV File Here</span> */}

      <div style={{ backgroundColor: "#e32636" }} className="form-group">
        <label style={{ color: "#dcdcdc" }} className="btn btn-block ">
          <span>Upload CSV File here</span>
          <input
            style={{ display: "none" }}
            onChange={handlePhoto}
            type="file"
            name="csvfile"
            accept=".csv"
            placeholder="Upload button"
          />
          {successMessage()}
        </label>
      </div>
      <input className="btn btn-outline-success col-md-12" type="submit" />
    </form>
  );

  const emailList = () => (
    <div style={{ padding: "0% 0% 5px 80px" }}>
      <div className="card">
        {/* <div className="card__header">
          <h4>{name.eventName} Event List</h4>
        </div> */}
        <Card>
          <Card.Header>
            <h5>
              <b>{name.eventName.toUpperCase()} EVENT LIST</b>
            </h5>
          </Card.Header>
        </Card>

        <div className="card__body">
          <Card>
            <Table size="sm" striped bordered hover style={{ marginBottom: 0 }}>
              <thead>
                <tr>
                  <td>Id</td>
                  <td>EventName</td>
                  <td>Email ID</td>
                </tr>
              </thead>
              <tbody>
                {msg.map((id) => {
                  let tmp = {
                    eventname: name.eventName,
                    emailid: id,
                  };
                  topCustomers.body.push(tmp);

                  n = n + 1;
                  return (
                    <tr key={n}>
                      <td style={{ width: "10%" }}>{n}</td>
                      <td style={{ width: "20%" }}>
                        <i>{tmp.eventname}</i>
                      </td>
                      <td style={{ width: "40%", alignItems: "normal" }}>
                        {tmp.emailid}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card>
        </div>
      </div>
    </div>
  );

  const listevents = () => (
    <div className="container">
      <div class="row">
        <div className="col-md-12 mx-auto p-5">
          <div className="form-group mb-12">
            <input
              style={{ height: "10", fontSize: "1rem" }}
              type="text"
              className="form-control form-control-lg"
              placeholder="Event Name"
              name="eventName"
              onChange={handleEmail}
              value={name.eventName}
            />
          </div>

          <button
            onClick={whileSubmit}
            className="btn btn-outline-success col-md-12 "
            //style={{ backgroundColor: "#002366" }}
          >
            List
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <Base title="Mailer List">
      <div style={{ padding: "0px 10px 0px 1200px", float: "center" }}>
        {displayAlert()}
      </div>
      <div
        style={{ padding: "50px 5px 5px 30px" }}
        className="row text-dark rounded"
      >
        <div
          style={{ padding: "50px 0px 100px 300px", float: "left" }}
          className="col-md-6"
        >
          {createList()}
        </div>
        <div>{alert === "true" ? displayAlert() : ""}</div>

        <div
          style={{ padding: "0px 0px 100px 90px", float: "right" }}
          className="col-md-6 "
        >
          {listevents()}
        </div>
      </div>

      <div
        style={{ padding: "0px 0px 100px 10px", textAlign: "center" }}
        className="col-md-7 mx-auto p-9"
      >
        {emailList()}
      </div>
    </Base>
  );
};

export default MailerList;
