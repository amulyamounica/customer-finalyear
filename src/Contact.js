import React from "react";
import { AlignCenter, FileX, Shop } from "react-bootstrap-icons";
import { Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import "./Contact.css";

const Contact = () => {
  return (
    <div
      style={{
        paddingLeft: "250px",
        width: "60rem",
        height: "900px",
        borderRadius: "10px",
        textAlign: "left",
        marginLeft: "200px",
        boxShadow: "rgb(0 0 0 / 35%) 0px 5px 15px",
      }}
    >
      <div>
        <br></br>
        <h3>Send us your Feedback</h3>
        <br></br>
      </div>
      <div>
        <form>
          <div class="form-group row">
            <label for="firstname" class="col-sm-2 col-form-label">
              First Name
            </label>
            <div class="col-md-3">
              <input
                type="text"
                class="form-control"
                id="firstname"
                name="firstname"
                placeholder="First Name"
              />
              <br></br>
            </div>
          </div>
          <div class="form-group row">
            <label for="lastname" class="col-md-2 col-form-label">
              Last Name
            </label>
            <div class="col-md-3">
              <input
                type="text"
                class="form-control"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
              />
              <br></br>
            </div>
          </div>
          <div class="form-group row">
            <label for="telnum" class="col-12 col-md-2 col-form-label">
              Contact Tel.
            </label>
            <div class="col-1 col-md-1">
              <input
                type="tel"
                class="form-control"
                id="areacode"
                name="areacode"
                placeholder="Area Code"
              />
            </div>
            <div class="col-0 col-md-2">
              <input
                type="tel"
                class="form-control"
                id="telnum"
                name="telnum"
                placeholder="Tel. Number"
              />
              <br></br>
            </div>
          </div>
          <div class="form-group row">
            <label for="emailid" class="col-md-2 col-form-label">
              Email
            </label>
            <div class="col-md-3">
              <input
                type="email"
                class="form-control"
                id="emailid"
                name="emailid"
                placeholder="Email"
              />
              <br></br>
            </div>
          </div>

          <div class="form-group row">
            <label for="feedback" class="col-md-2 col-form-label">
              Your Feedback
            </label>
            <div class="col-md-3">
              <textarea
                class="form-control"
                id="feedback"
                name="feedback"
                rows="12"
              ></textarea>
              <br></br>
            </div>
          </div>
          <div class="form-group row">
            <div class="offset-md-2 col-md-3">
              <button type="submit" class="btn btn-primary">
                Send Feedback
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-3 col-md"></div>
    </div>
  );
};

export default Contact;
