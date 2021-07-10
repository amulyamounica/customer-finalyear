import React, { useEffect, useState } from "react";
import Home from "D:/mounicaProject/src/home";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";
import validator from "validator";

import "./Login.css";
import MapsLocalTaxi from "material-ui/svg-icons/maps/local-taxi";

export default function Signup(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [ans, setAns] = useState("");
  const [address, setAddress] = useState("");
  const [confirmpassword, comparePassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  var d1 = JSON.parse(localStorage.getItem("users"));
  var user = [];
  for (var i in d1) {
    user.push(d1[i]);
  }
  function toggleClicked() {
    var p = document.getElementById("exampleInputPassword1");
    var q = document.getElementById("exampleInputPassword2");
    var pass = document.getElementById("exampleCheck1").checked;
    if (pass) {
      p.type = "text";
      q.type = "text";
    } else {
      p.type = "password";
      q.type = "password";
    }
  }

  var users = [];
  useEffect(() => {
    axios
      .post("http://localhost:8081/userDetails")
      .then(function (response) {
        users = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  function clickMe1() {
    var a = document.getElementById("exampleInputName1").value;
    var b = document.getElementById("exampleInputEmail1").value;
    var c = document.getElementById("exampleInputPassword1").value;
    var c1 = document.getElementById("exampleInputPassword2").value;
    var f = document.getElementById("exampleInputPhone").value;
    console.log(a);
    document.getElementById("nameFlag").innerHTML = "";
    document.getElementById("emailFlag").innerHTML = "";
    document.getElementById("passwordFlag").innerHTML = "";
    document.getElementById("password1Flag").innerHTML = "";
    document.getElementById("phoneFlag").innerHTML = "";
    if (a == "") {
      document.getElementById("nameFlag").innerHTML = "*Mandatory field";
    }
    if (b == "") {
      document.getElementById("emailFlag").innerHTML = "*Mandatory field";
    }
    if (c == "") {
      document.getElementById("passwordFlag").innerHTML = "*Mandatory field";
    }
    if (c1 == "") {
      document.getElementById("password1Flag").innerHTML = "*Mandatory field";
    }
    if (f == "") {
      document.getElementById("phoneFlag").innerHTML = "*Mandatory field";
    }
    if (c != c1) {
      document.getElementById("para").innerHTML = "*Passwords must be same";
    } else {
      var flag = 0;
      users.map((i) => {
        if (i.email == b || i.phone == f) {
          if (i.email == b)
            document.getElementById("emailFlag").innerHTML =
              "*Email is already registered, please try with different Email";
          else
            document.getElementById("phoneFlag").innerHTML =
              "*Phone Number is already registered, please try with different number";
          flag = 1;
        }
      });
      if (flag == 0) {
        document.getElementById("para").innerHTML = "";
        var ob = {
          name1: a,
          email1: b,
          pass1: c1,
          phone: f,
        };
        localStorage.setItem("email", b);
        axios
          .post("http://localhost:8081/add-user", ob)
          .then(function (response) {
            setAns(response.data);
            props.updateLogin(true);
            localStorage.setItem("session", a);
            localStorage.setItem("session1", a);
            console.log(response);
          }, [])
          .catch(function (error) {
            console.log(error);
          });
        history.push("/Home");
        localStorage.setItem("session", a);
        localStorage.setItem("session1", a);
      }
    }
  }

  console.log(user);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const validatePhone = (e) => {
    var phone = e.target.value;
    if (phone.length == 10) {
      setPhoneError("");
    } else {
      setPhoneError("Enter Valid Phone Number!");
    }
  };
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Enter valid Email!");
    }
  };
  return (
    <div className="Login forms">
      <h3>Signup</h3>
      <br></br>
      <div class="form-group">
        <input
          type="text"
          maxlength="10"
          class="form-control"
          id="exampleInputName1"
          placeholder="Enter Name"
        />
      </div>
      <p className="para" id="nameFlag"></p>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Enter email"
          onChange={(e) => validateEmail(e)}
        />
        <span
          style={{
            color: "red",
          }}
        >
          {emailError}
        </span>
      </div>
      <p className="para" id="emailFlag"></p>
      <div class="form-group">
        <input
          type="password"
          class="form-control "
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <p className="para" id="passwordFlag"></p>

      <div class="form-group">
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword2"
          placeholder="ConfirmPassword"
        />
      </div>
      <p className="para" id="password1Flag"></p>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="exampleInputPhone"
          placeholder="Phone Number"
          onChange={(e) => validatePhone(e)}
          maxLength="10"
        />
        <span
          style={{
            color: "red",
          }}
        >
          {phoneError}
        </span>
      </div>
      <p className="para" id="phoneFlag"></p>
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
      <span className="para" id="para"></span>
    </div>
  );
}
