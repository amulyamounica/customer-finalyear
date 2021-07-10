import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Card, Button } from "react-bootstrap";
import { AlignCenter, FileX, Shop } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import "./Catelog.css";
import axios from "axios";

export default function Catelogue(props) {
  const history = useHistory();
  const Shop1 = (p) => {
    localStorage.setItem("shopName", p);
    history.push("/items");
  };
  const [item, setItems] = useState([]);
  useEffect(() => {
    var p = {
      loc: localStorage.getItem("location"),
    };
    axios.post("http://localhost:8081/shops", p).then((response) => {
      setItems(response.data);
      console.log(item);
    });
  }, []);
  return (
    <div>
      <div className="row">
        {item.map((i) => {
          return (
            <div className="col-md-4">
              <div>
                {console.log(i)}
                <Card
                  style={{
                    width: "20rem",
                    height: "450px",
                    borderRadius: "10px",
                    margin: "25px",
                    boxShadow: "rgb(0 0 0 / 35%) 0px 5px 15px",
                  }}
                >
                  <Card.Img variant="top" src={i.img} height="200px" />
                  <Card.Body>
                    <Card.Title>{i.name}</Card.Title>
                    <Card.Text>{i.desc}</Card.Text>
                    <Button variant="primary" onClick={() => Shop1(i.api)}>
                      Visit the shop
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
