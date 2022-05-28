import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Core/Dashboard";
import Signup from "./Core/Signup";
import Signin from "./Core/Signin";
import MailerList from "./sideitems/MailerList";
import BulkMailer from "./sideitems/BulkMailer";
import AzureCalc from "./sideitems/AzureCalc";
import AzureRequests from "./sideitems/DisplayAZ";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Dashboard} />
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route path="/mailerlist" component={MailerList} />
      <Route path="/bulkmailer" component={BulkMailer} />
      <Route path="/azurecalc" component={AzureCalc} />
      <Route path="/azureRequests" component={AzureRequests} />
    </BrowserRouter>
  );
};

export default Routes;
