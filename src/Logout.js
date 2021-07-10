import React, { useState } from "react";
import Home from "D:/mounicaProject/src/home";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Login from "./forms/login";
import { useHistory } from "react-router-dom";

export default function Logout() {
  const history = useHistory();
  if (localStorage.getItem("session1") != "user") {
    localStorage.setItem("session", "user");
    localStorage.setItem("session1", "user");
    window.location.reload();
    return (
      <div>
        <h3>Logged out Successfully</h3>
        <a href="/Home">click here for home page</a>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Please login</h3>
        <a href="/Login">click here for login page</a>
      </div>
    );
  }
}
