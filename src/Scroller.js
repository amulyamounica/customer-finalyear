import React, { useState } from "react";
import Home from "D:/mounicaProject/src/home";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Login from "./forms/login";
import { useHistory } from "react-router-dom";

export default function Scroller() {
  return (
    <div>
      <marquee
        direction="right"
        style={{ color: "red", align: "center", width: "700px" }}
      >
        {" "}
        *If you want to add your into this website contact to admin cellNumber:
        7995677505 or contact via Gmail: grocartdelivery@gmail.com
      </marquee>
    </div>
  );
}
