import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Login.css";
export default function Login(props) {
  const history = useHistory();
  function clickMe1() {
    var q = document.getElementById("exampleInputEmail1").value;
    var p = document.getElementById("exampleInputPassword1").value;
    var bodyss = {
      name: q,
      pass1: p,
    };
    axios
      .post("http://localhost:8081/login", bodyss)
      .then(function (response) {
        if (response.data != "failed") {
          console.log("in");
          document.getElementById("para").innerHTML = "Success";
          localStorage.setItem("session", response.data);
          localStorage.setItem("session1", response.data);
          localStorage.setItem("email", q);
          console.log(response.data);
          props.updateLogin(true);
          history.push("/Home");
        } else {
          document.getElementById("para").innerHTML =
            "Unsuccessful please try with different credentials";
          console.log("out of");
        }
      }, [])
      .catch(function (error) {
        console.log(error);
      });
    axios.post("http://localhost:8081/profile", bodyss).then((response) => {
      localStorage.setItem("phone", response.data.phone);
      console.log(response.data);
    });
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
      <h3>Login</h3>
      <br></br>
      <div class="form-group">
        <input
          type="email"
          aria-autocomplete="off"
          name="exampleInputEmail1"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          autocomplete="off"
          class="form-control  "
          name="exampleInputPassword1"
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
          htmlFor="exampleCheck1"
        >
          show password
        </label>
      </div>
      <button type="submit" onClick={clickMe1} class="btn btn-primary">
        Submit
      </button>
      <br></br>
      <a href="/forgot">forgot password</a>
      <p id="para" style={{ color: "red" }}>
        {}
      </p>
    </div>
  );
}
