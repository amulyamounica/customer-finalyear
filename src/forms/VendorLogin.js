import React, { useState } from "react";
import Home from "D:/mounicaProject/src/home";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Vendor() {
  const history = useHistory();

  var d = JSON.parse(localStorage.getItem("vendors"));
  var c = [];
  for (var i in d) {
    c.push(d[i]);
  }
  function clickMe1() {
    var q = document.getElementById("exampleInputEmail1").value;
    var p = document.getElementById("exampleInputPassword1").value;
    var bodyss = {
      name: q,
      pass1: p,
    };
    localStorage.setItem("email", q);

    axios
      .post("http://localhost:8081/vendorLogin", bodyss)
      .then(function (response) {
        if (response.data != "failed") {
          console.log("in");
          document.getElementById("para").innerHTML = "Success";
          history.push("/UpdateItems");
          window.location.reload();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    document.getElementById("para").innerHTML = "Unsuccess";
    console.log("out of");
  }

  function pressMe() {
    document.getElementById("para").innerHTML = "";
    var a = document.getElementById("exampleInputEmail1").value;
    var b = document.getElementById("exampleInputPassword1").value;
    console.log(c);
    for (var i in c) {
      console.log(i);
      if (a == c[i].name && b == c[i].pass) {
        history.push("/UpdateItems");
      }
    }
    document.getElementById("para").innerHTML = "invalid credentials";
    return false;
  }
  function toggleClicked() {
    var p = document.getElementById("exampleInputPassword1");
    var pass = document.getElementById("exampleCheck1").checked;
    if (pass) {
      p.type = "text";
    } else {
      p.type = "password";
    }
  }

  return (
    <div className="Login forms">
      <form>
        <h3>Login</h3>
        <br></br>
        <div class="form-group">
          <input
            type="text"
            aria-autocomplete="off"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Username"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            autocomplete="off"
            class="form-control "
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="form-group form-check">
          <input
            type="checkbox"
            class="form-check-input"
            onClick={toggleClicked}
            id="exampleCheck1"
          />
          <label
            class="form-check-label"
            onChange={toggleClicked}
            for="exampleCheck1"
          >
            show password
          </label>
        </div>
        <button type="submit" onClick={clickMe1} class="btn btn-primary">
          Submit
        </button>
        <p className="para" id="para"></p>
      </form>
    </div>
  );
}
