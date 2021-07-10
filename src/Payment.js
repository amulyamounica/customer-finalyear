import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import GooglePayButton from "@google-pay/button-react";
import axios from "axios";
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider";
//payment activity to be added to db
export default function Payment() {
  const history = useHistory();
  const total = JSON.parse(localStorage.getItem("total"));
  console.log(total);
  const [flag, setFlag] = useState(false);
  function toggleClicked() {
    var pass = document.getElementById("exampleCheck1").checked;
    document.getElementById("cardNo").required = !pass;
    document.getElementById("cvv").required = !pass;
    document.getElementById("date").required = !pass;
    if (pass) {
      setFlag(pass);
    } else {
      setFlag(pass);
    }
  }
  function clickMe(values, addr) {
    document.getElementById("cardFlag").innerHTML = "";
    document.getElementById("cvvFlag").innerHTML = "";
    document.getElementById("dateFlag").innerHTML = "";
    document.getElementById("nameFlag").innerHTML = "";

    if (values == "0" && !flag) {
      var a = document.getElementById("address").value;
      var b = document.getElementById("cardNo").value;
      var c = document.getElementById("cvv").value;
      var d = document.getElementById("date").value;
      if (b == "") {
        document.getElementById("cardFlag").innerHTML = "*Mandatory field";
      } else {
        document.getElementById("cardFlag").innerHTML = "";
        if (c == "") {
          document.getElementById("cvvFlag").innerHTML = "*Mandatory field";
        } else {
          document.getElementById("cvvFlag").innerHTML = "";

          if (d == "") {
            document.getElementById("dateFlag").innerHTML = "*Mandatory field";
          } else {
            document.getElementById("dateFlag").innerHTML = "";

            if (a == "") {
              document.getElementById("nameFlag").innerHTML =
                "*Mandatory field";
            } else {
              document.getElementById("nameFlag").innerHTML = "";
              localStorage.setItem("orders", localStorage.getItem("CartItems"));
              localStorage.setItem("CartItems", "[]");
              var bodyss = {
                name: localStorage.getItem("session1"),
                items: JSON.parse(localStorage.getItem("orders")),
                address: a,
                progress: "In progress",
              };
              console.log(bodyss);
              axios
                .post("http://localhost:8081/orders", bodyss)
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
              history.push("/Success");
              window.location.reload();
            }
          }
        }
      }
    } else if (flag) {
      var a = document.getElementById("address").value;
      if (a == "") {
        document.getElementById("nameFlag").innerHTML = "*Mandatory field";
      } else {
        document.getElementById("nameFlag").innerHTML = "";
        localStorage.setItem("orders", localStorage.getItem("CartItems"));
        localStorage.setItem("CartItems", "[]");
        var bodyss = {
          name: localStorage.getItem("session1"),
          items: JSON.parse(localStorage.getItem("orders")),
          address: a,
          phone: localStorage.getItem("phone"),
          progress: "In progress",
        };
        console.log(bodyss);
        axios
          .post("http://localhost:8081/orders", bodyss)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        history.push("/Success");
        window.location.reload();
      }
    } else {
      localStorage.setItem("orders", localStorage.getItem("CartItems"));
      localStorage.setItem("CartItems", "[]");
      var bodyss = {
        name: localStorage.getItem("session1"),
        items: JSON.parse(localStorage.getItem("orders")),
        address: addr,
        phone: localStorage.getItem("phone"),
        progress: "In progress",
      };
      console.log(bodyss);
      axios
        .post("http://localhost:8081/orders", bodyss)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      history.push("/Success");
      window.location.reload();
    }
  }
  return (
    <div className="Login forms">
      <form>
        <h3>Payment</h3>
        <br></br>
        <div class="form-group">
          <input
            type="text"
            aria-autocomplete="off"
            class="form-control"
            id="cardNo"
            placeholder="Enter CardNo"
            required="true"
          />
          <span id="cardFlag" style={{ color: "red" }}></span>
        </div>
        <div class="form-group">
          <input
            type="text"
            autocomplete="off"
            class="form-control"
            id="cvv"
            placeholder="Enter Expiry Date"
            required="true"
          />

          <span id="cvvFlag" style={{ color: "red" }}></span>
        </div>
        <div class="form-group">
          <input
            type="text"
            autocomplete="off"
            class="form-control"
            id="date"
            placeholder="cvv"
            required="true"
          />
          <span id="dateFlag" style={{ color: "red" }}></span>
        </div>
        <div class="form-group">
          <input
            type="text"
            autocomplete="off"
            class="form-control"
            id="address"
            placeholder="Delivery Address"
            required="true"
          />
          <span id="nameFlag" style={{ color: "red" }}></span>
        </div>
        <input type="checkbox" id="exampleCheck1" onClick={toggleClicked} />
        Cash on Delivery
        <br></br>
        <button
          type="submit"
          onClick={() => clickMe("0", "add")}
          class="btn btn-primary"
        >
          Pay
        </button>
      </form>
      <br></br>
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "GroCart Delivery",
          },
          transactionInfo: {
            totalPriceStatus: "ESTIMATED",
            totalPriceLabel: "Total",
            totalPrice: JSON.stringify(total),
            currencyCode: "INR",
            countryCode: "IN",
          },
          shippingAddressRequired: true,
          callbackIntents: ["SHIPPING_ADDRESS", "PAYMENT_AUTHORIZATION"],
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log("load payment data", paymentRequest);
        }}
        onPaymentAuthorized={(paymentRequest) => {
          var d =
            paymentRequest.shippingAddress.address1 +
            "," +
            paymentRequest.shippingAddress.locality +
            "," +
            paymentRequest.shippingAddress.postalCode;
          clickMe("1", d);
        }}
        onPaymentDataChanged={(paymentRequest) => {
          console.log("done changing", paymentRequest);
          return {};
        }}
        existingPaymentMethodRequired="false"
        buttonColor="black"
        buttonType="plain"
      />
    </div>
  );
}
