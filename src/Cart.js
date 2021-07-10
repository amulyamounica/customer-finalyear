import CommunicationStayCurrentLandscape from "material-ui/svg-icons/communication/stay-current-landscape";
import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Payment from "./Payment";
export default function Cart() {
  const history = useHistory();
  var loc = localStorage.getItem("location");
  console.log(loc);
  var cart = JSON.parse(localStorage.getItem("CartItems"));
  var child = [];
  for (var item in cart) {
    child.push(cart[item]);
  }
  var sum = 0;
  child.map((k) => {
    sum = sum + k.price * k.quantity;
  });
  localStorage.setItem("total", JSON.stringify(sum));
  const Delete = (id) => {
    var item_1 = [];
    var p = 1;
    for (var i in child) {
      if (child[i].ItemName != id.ItemName || p == 0) {
        item_1.push(child[i]);
      } else {
        p = 0;
      }
    }
    console.log(item);
    localStorage.setItem("CartItems", JSON.stringify(item_1));
    window.location.reload();
  };
  const updateQuantity = (k) => {
    var p = k;
    p.quantity = document.getElementById(k.ItemName).value;
    console.log(p.quantity);
    var child = JSON.parse(localStorage.getItem("CartItems"));
    var child = [];
    for (var item in cart) {
      if (cart[item].ItemName != k.ItemName) child.push(cart[item]);
      else {
        child.push(p);
        console.log(p);
      }
      console.log(cart[item]);
    }
    localStorage.setItem("CartItems", JSON.stringify(child));
    window.location.reload();
  };
  const getPay = () => {
    if (
      localStorage.getItem("session1") != null &&
      localStorage.getItem("session1") != "user"
    )
      history.push("./Payment");
    else {
      document.getElementById("para").innerHTML =
        "*Please login to place the order";
    }
  };
  return (
    <div>
      <div>
        <h3> Cart</h3>
        <p className="col">*Please check the cart before proceed</p>
      </div>
      <div className="item_style1">
        {child.map((k) => {
          return (
            <div>
              <Card style={{ width: "15rem", height: "400px" }}>
                <Card.Img variant="top" src={k.img} height="150px" />
                <Card.Body>
                  <Card.Title>{k.ItemName}</Card.Title>
                  <Card.Text>
                    {k.desc}
                    <br></br>
                    Price:{k.price}
                  </Card.Text>
                  Quantity:{" "}
                  <input
                    type="text"
                    defaultValue={k.quantity}
                    style={{ width: "25px", border: "none" }}
                    readOnly
                  />{" "}
                  <pan> </pan>
                  <select id={k.ItemName} onChange={() => updateQuantity(k)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9"> 9</option>
                    <option value="10">10</option>
                  </select>
                  <br></br>
                  <br></br>
                  <Button variant="primary" onClick={() => Delete(k)}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Payment Details</h2>
        <table border="1" width="50%" align="center">
          <tr>
            <td>
              <h5>Product</h5>
            </td>
            <td>
              <h5>Price</h5>
            </td>
            <td>
              <h5>Quantity</h5>
            </td>
          </tr>
          {child.map((k) => {
            return (
              <tr>
                <td>{k.ItemName}</td>
                <td>{k.price}</td>
                <td>{k.quantity}</td>
              </tr>
            );
          })}
          <tr>
            <td>Total Amount: </td>
            <td>
              <h6>{sum}</h6>
            </td>
          </tr>
        </table>
        <p className="col">please make sure the items selected are correct*</p>
        <Button variant="primary" onClick={() => getPay()}>
          Proceed to pay
        </Button>
        <p id="para" className="para"></p>
        <br></br>
      </div>
    </div>
  );
}
