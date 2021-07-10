import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Payment from "./Payment";
import axios from "axios";
import "./Items/item.css";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
export default function Orders() {
  const [item, setItems] = useState([]);
  const [Completed, setCompleted] = useState([]);
  const cart = JSON.parse(localStorage.getItem("Cart"));
  var child = [];
  var items = JSON.parse(localStorage.getItem("CartItems"));
  for (var i in items) {
    cart.push(items[i]);
  }
  let newDate = new Date();
  let date_raw = newDate.getDate();
  let month_raw = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  var dateToday =
    date_raw.toString() + "-" + month_raw.toString() + "-" + year.toString();
  console.log(dateToday);
  useEffect(() => {
    var p = {
      name: localStorage.getItem("session1"),
    };
    axios.post("http://localhost:8081/sendOrders", p).then((response) => {
      var k = [];
      var l = [];
      for (var i in response.data) {
        if (response.data[i].progress == "In progress") {
          k.push(response.data[i]);
        } else {
          l.push(response.data[i]);
        }
      }
      setItems(k);
      setCompleted(l);
      console.log(item);
    });
  }, []);
  console.log(item);

  const [value, setValue] = React.useState(0);
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div className="orders">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          style={{ backgroundColor: "#b793f7" }}
        >
          <Tab label="Orders" {...a11yProps(0)} />
          <Tab label="Delivered Items" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h2>Order Details</h2>
        <br></br>
        <table border="1" width="75%" align="center">
          <tr>
            <td>
              <h5>Items</h5>
            </td>
            <td>
              <h5>Name</h5>
            </td>
            <td>
              <h5>Price</h5>
            </td>
            <td>
              <h5>Quantity</h5>
            </td>
            <td>
              <h5>Shop</h5>
            </td>
          </tr>
          {item.map((k) => {
            return (
              <tr>
                <td>
                  <img src={k.img} height="100px" width="100px"></img>
                </td>
                <td>{k.ItemName}</td>
                <td>{k.price}</td>
                <td>{k.quantity}</td>
                <td>{k.shop}</td>
              </tr>
            );
          })}
        </table>
        <br></br>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h3>Delivered Items</h3>
        <br></br>
        <table border="1" width="75%" align="center">
          <tr>
            <td>
              <h5>Items</h5>
            </td>
            <td>
              <h5>Name</h5>
            </td>
            <td>
              <h5>Price</h5>
            </td>
            <td>
              <h5>Quantity</h5>
            </td>
            <td>
              <h5>Shop</h5>
            </td>
          </tr>
          {Completed.map((k) => {
            return (
              <tr>
                <td>
                  <img src={k.img} height="100px" width="100px"></img>
                </td>
                <td>{k.ItemName}</td>
                <td>{k.price}</td>
                <td>{k.quantity}</td>
                <td>{k.shop}</td>
              </tr>
            );
          })}
        </table>
        <br></br>
      </TabPanel>
    </div>
  );
}
