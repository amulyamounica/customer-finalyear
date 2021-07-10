import React from "react";
import Home from "./home";
import { useState } from "react";
import Location from "./Location";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import {
  AlignBottom,
  Basket2,
  Cart2,
  Cart3,
  CartCheckFill,
  CartDashFill,
  CartXFill,
  House,
  HouseFill,
  PersonCheckFill,
  PersonCircle,
  PhoneFill,
  Question,
} from "react-bootstrap-icons";
import Cart from "./Cart";
import Catelogue from "./Catelog/Catelogue";
import { useHistory } from "react-router-dom";
import "./Items/item.css";
export default function Header(props) {
  const [count, setCount] = useState(0);
  const [login, setLogin] = useState(props.login);
  function updateCount() {
    setCount(count + 1);
    props.updateCount(count + 1);
  }
  var p = localStorage.getItem("session1");
  var history = useHistory();
  const add = (city) => {
    if (localStorage.getItem("location") != null) {
      var d = window.confirm(
        "cart data will be removed in " + localStorage.getItem("location")
      );
      if (d) {
        localStorage.setItem("location", city);
        localStorage.setItem("CartItems", "[]");
        localStorage.setItem("orders", "[]");
      }
    } else {
      localStorage.setItem("location", city);
    }
  };
  const handleLocation = () => {
    const d = document.getElementById("select");
    console.log(d.value);
    if (d.value == "--Select--") {
      return <Home />;
    } else return <Catelogue />;
  };
  return (
    <>
      <div className="App-h1 divH">
        <Navbar className="navH" bg="#9575CD" expand="lg">
          <Navbar.Brand href="/Home" true>
            <img src="/logo.png" className="App-h1"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="a" id="basic-navbar-nav">
            <Nav className="mr-auto a">
              <Nav.Link
                style={{
                  display: props.login ? "block" : "none",
                }}
                href="/Catelogue"
              >
                Catelogue
              </Nav.Link>
              <Nav.Link
                style={{ display: props.login ? "block" : "none" }}
                href="/Cart"
              >
                {" "}
                <Cart3 size={25} />
                <span className="badge">{props.count}</span>
              </Nav.Link>
              <Nav.Link
                href="/Orders"
                style={{ display: props.login ? "block" : "none" }}
              >
                Orders
              </Nav.Link>
              <NavDropdown
                title="More"
                style={{ display: props.login ? "block" : "none" }}
                className="drop"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/About">
                  <AlignBottom />
                  About
                </NavDropdown.Item>
                <NavDropdown.Item href="/Contact">
                  <PhoneFill />
                  Contact
                </NavDropdown.Item>
                <NavDropdown.Item href="/Faqs">
                  <Question />
                  FAQ's
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <NavDropdown
                title="Location"
                className="drop"
                id="basic-nav-dropdown"
                style={{ display: props.login ? "block" : "none" }}
              >
                <NavDropdown.Item
                  href="/Catelogue"
                  onClick={() => add("Kandukur")}
                >
                  Kandukur
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/Catelogue"
                  onClick={() => add("Ongole")}
                >
                  Ongole
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/Catelogue"
                  onClick={() => add("Palukur")}
                >
                  Palukur
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/Catelogue"
                  onClick={() => add("Bhimavaram")}
                >
                  Bhimavaram
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Other">Other</NavDropdown.Item>
              </NavDropdown>
              <div
                style={{ display: props.login ? "block" : "none" }}
                className="b"
              >
                <Location />
              </div>
              <div
                className="b"
                style={{ display: props.login ? "none" : "block" }}
              >
                <NavDropdown
                  title="Login"
                  className="drop"
                  style={{
                    marginTop: "-40px",
                    marginLeft: "450px",
                  }}
                  class="btn btn-primary"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.ItemText className="font">
                    <span>New Customer? </span>
                    <a href="/Signup">Signup</a>
                  </NavDropdown.ItemText>
                  <NavDropdown.Item href="/Login ">Login</NavDropdown.Item>
                </NavDropdown>
              </div>
              <div></div>
              <div></div>
              <div
                className="b"
                style={{ display: props.login ? "block" : "none" }}
              >
                <NavDropdown
                  title={<PersonCircle size={35}></PersonCircle>}
                  className="drop"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.ItemText className="font"></NavDropdown.ItemText>
                  <p>
                    <center>{p}</center>
                  </p>
                  <NavDropdown.Item href="/Person ">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="./Logout">Logout</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="./Person"></Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}
