import { convertColorToString } from "material-ui/utils/colorManipulator";
import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import "./item.css";

export default function Grocery(props) {
  var Shop1 = (id) => {
    console.log("dsafdas", id);
    id.shopName = localStorage.getItem("shopName");
    id.quantity = 1;
    cart.push(id);
    //alert("adding to cart", id.name);
    localStorage.setItem("Cart", JSON.stringify(cart));
    console.log(JSON.parse(localStorage.getItem("Cart")));
    localStorage.setItem("CartItems", JSON.stringify(cart));
    //console.log("asdfdas count",count )
    props.updateCount();
  };
  const [item, setItems] = useState([]);
  const [items_values, setItemsValues] = useState([]);
  const cart = JSON.parse(localStorage.getItem("Cart"));
  var child = [];
  var items = JSON.parse(localStorage.getItem("CartItems"));
  for (var i in items) {
    cart.push(items[i]);
  }
  const getItems = (filter) => {
    var p = {
      loc: localStorage.getItem("location"),
    };
    var d = localStorage.getItem("shopName");
    axios.post("http://localhost:8081/" + d, p).then((response) => {
      var l = [];
      for (var i in response.data) {
        if (response.data[i].pantryType == filter) {
          l.push(response.data[i]);
        }
      }
      setItems(l);
    });
  };
  useEffect(() => {
    var p = {
      loc: localStorage.getItem("location"),
    };
    var d = localStorage.getItem("shopName");
    axios.post("http://localhost:8081/" + d, p).then((response) => {
      setItems(response.data);
      setItemsValues(response.data);
      console.log(response.data);
    });
  }, []);
  const searchItem = (e) => {
    var p = e.target.value;
    p = p.replace(/ /g, "");
    p = p.toLowerCase();
    console.log(p);
    var d = [];
    for (var i in items_values) {
      var r = items_values[i].ItemName;
      r = r.replace(/ /g, "");
      r = r.toLowerCase();
      if (r.includes(p)) {
        d.push(items_values[i]);
      }
    }
    setItems(d);
  };
  return (
    <div>
      <div class="split2 left">
        {" "}
        <h3 style={{ marginLeft: "50px" }}>
          Items in {localStorage.getItem("shopName")} shop
          <input
            type="text"
            id="search"
            placeholder="Search"
            style={{
              backgroundColor: "#ce99ff",
              borderRadius: "3px",
              marginLeft: "10px",
              fontSize: "20px",
            }}
            onChange={searchItem}
          />
        </h3>
        <div className="row">
          {item.map((k) => {
            return (
              <div className="col-md-4">
                <Card
                  style={{
                    width: "16rem",
                    height: "400px",
                    borderRadius: "10px",
                    margin: "25px",
                    boxShadow: "rgb(0 0 0 / 35%) 0px 5px 15px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    style={{
                      height: "150px",
                      width: "150px",
                      alignSelf: "center",
                    }}
                    src={k.img}
                    height="200px"
                  />
                  <Card.Body>
                    <Card.Title>{k.ItemName}</Card.Title>
                    <Card.Text>
                      {k.desc}
                      <br></br>
                      <h6> Price:{k.price}</h6>
                    </Card.Text>
                    <Button variant="primary" onClick={() => Shop1(k)}>
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <div class="split1 right">
        <div class="centered">
          <table
            style={{
              backgroundColor: "#b366ff",
              borderRadius: "10px",
              width: "270px",
              height: "400px",
            }}
          >
            <th>
              <center style={{ paddingTop: "10px" }}>All Categories</center>
            </th>
            <tr>
              <td
                style={{
                  backgroundColor: "#ce99ff",
                }}
              >
                <button
                  class="astext"
                  onClick={() => getItems("Cooking Essentials")}
                >
                  Cooking Essentials
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  class="astext"
                  onClick={() => getItems("Packaged Foods")}
                >
                  Packaged Foods
                </button>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "#ce99ff",
                }}
              >
                <button class="astext" onClick={() => getItems("Dryfruits")}>
                  Dryfruits
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  class="astext"
                  onClick={() => getItems("Cleaning and Household")}
                >
                  Cleaning and Household
                </button>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "#ce99ff",
                }}
              >
                <button
                  class="astext"
                  onClick={() => getItems("Personal Care")}
                >
                  Personal Care
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button class="astext" onClick={() => getItems("Beverages")}>
                  Beverages
                </button>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "#ce99ff",
                }}
              >
                <button class="astext" onClick={() => getItems("PetProducts")}>
                  PetProducts
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
