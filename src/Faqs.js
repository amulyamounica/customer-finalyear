import React from "react";
import "./Items/item.css";
export default function Faqs() {
  return (
    <div
      style={{
        width: "50rem",
        height: "650px",
        borderRadius: "10px",
        textAlign: "left",
        marginLeft: "270px",
        boxShadow: "rgb(0 0 0 / 35%) 0px 5px 15px",
      }}
    >
      <ol>
        <br></br>
        <h3>Frequently Asked Questions</h3>
        <br></br>
        <li>
          <p>What payment methods do you accept?</p>
          <span>We accept Visa and MasterCard on our website.</span>
          <span>
            Our sales staff can also process other payment types manually,
            including checks and internet banking. To pay using one of these
            methods, please contact us to place your order.
          </span>
        </li>
        <br></br>
        <li>
          <p>How much will shipping cost?</p>
          Shipping costs are calculated at the checkout, based on the dimensions
          and weight of your shipment, and the shipping address. To find out how
          much shipping will cost, please add the desired products to your cart
          and complete the checkout process.
        </li>
        <br></br>
        <li>
          <p> ​Do you sell quality products?</p>
          Before adding a vendor, we will check the background of the shop and
          quality of products they sell, The vendors in the wwebsite are
          thrustworthy. You can use this website to buy the Groceries, Also the
          vendors in the website is from your local areas only.
        </li>
      </ol>
    </div>
  );
}
