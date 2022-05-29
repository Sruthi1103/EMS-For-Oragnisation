import React, { useEffect, useState } from "react";
import Base from "../Core/Base";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import axios from "axios";

const DisplayAZ = () => {
  const [msg, setMsg] = useState({
    values: [],
  });

  const getRequests = () => {
    axios.get("http://localhost:8000/getRequests/").then((response) => {
      setMsg({ ...msg, values: response.data });
      console.log(response.data);
    });
    console.log(msg);
  };
  useEffect(() => {
    getRequests();
  });
  return (
    <Base title="Azure VM Pending Requests">
      <div style={{ padding: "50px 100px 90px 390px" }} className=" row">
        <div className="row">
          {msg.values.map((val, index) => {
            console.log(val);
            return (
              <div
                style={{ padding: "0px 20px 10px 50px" }}
                className="col-5 mb-4 "
              >
                <Card style={{ width: "20rem" }}>
                  <Card.Body>
                    <Card.Title>
                      <i>
                        <center>POC NAME</center>
                      </i>
                    </Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Service Name :&emsp; {val.serviceName}
                    </ListGroupItem>
                    <ListGroupItem>OS :&emsp; {val.OS}</ListGroupItem>
                    <ListGroupItem>OStype :&emsp; {val.OStype}</ListGroupItem>
                    <ListGroupItem>
                      Location :&emsp; {val.location}
                    </ListGroupItem>
                    <ListGroupItem>
                      Currency :&emsp; {val.BillingCurrency}
                    </ListGroupItem>
                    <ListGroupItem>RAM :&emsp; {val.Ram}</ListGroupItem>
                    <ListGroupItem>Hours :&emsp; {val.hrs}</ListGroupItem>
                    <ListGroupItem>Days : &emsp; {val.Days}</ListGroupItem>
                    <ListGroupItem>
                      Total Cost : &emsp; {val.total}
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">Approve</Card.Link>
                    <Card.Link href="#">Reject</Card.Link>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default DisplayAZ;
