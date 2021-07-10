import React, { useEffect, useState } from "react";
import axios from "axios";

export default function forgot() {
  function clickMe1() {
    var q = document.getElementById("password1").value;
    var p = document.getElementById("phone").value;
    var d = document.getElementById("password2").value;
    var bodyss = {
      phone: p,
      pass1: q,
    };
    if (q == d) {
      axios
        .post("http://localhost:8081/updatePassword", bodyss)
        .then(function (response) {
          if (response.data != "failed") {
            console.log("in");
            document.getElementById("result").innerHTML =
              "Success you can login now";
            console.log(response.data);
          } else {
            document.getElementById("result").innerHTML =
              "Unsuccess please check the entered mobile number";
            console.log("out of");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      document.getElementById("result").innerHTML =
        "Please make sure the passwords entered same";
    }
  }

  function toggleClicked() {
    var p = document.getElementById("password1");
    var q = document.getElementById("password2");
    var pass = document.getElementById("exampleCheck1").checked;
    if (pass) {
      p.type = "text";
      q.type = "text";
    } else {
      p.type = "password";
      q.type = "password";
    }
  }
  return (
    <div className="Login forms">
      <h3>Update Password</h3>
      <br></br>
      <div class="form-group">
        <input
          type="text"
          aria-autocomplete="off"
          name="exampleInputEmail1"
          class="form-control"
          id="phone"
          placeholder="Enter Registered Phone Number"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          aria-autocomplete="off"
          name="exampleInputEmail1"
          class="form-control"
          id="password1"
          placeholder="Enter New Password"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          aria-autocomplete="off"
          name="exampleInputEmail1"
          class="form-control"
          id="password2"
          placeholder="ReEnter New Password"
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
      <p id="result"></p>
    </div>
  );
}
