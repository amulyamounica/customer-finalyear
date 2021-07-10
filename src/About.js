import React from "react";

export default function About() {
  return (
    <div>
      <h2>
        {" "}
        <centre>
          <b>Our Website</b>
        </centre>{" "}
      </h2>
      <br></br>

      <h5>
        <div
          style={{
            width: "50rem",
            height: "450px",
            borderRadius: "10px",
            textAlign: "left",
            marginLeft: "270px",
            boxShadow: "rgb(0 0 0 / 35%) 0px 5px 15px",
          }}
        >
          <i>
            <br></br>
            <ul>
              <li>
                This website shows about the availability of the products that
                are available in the nearby shops.
              </li>
              <br></br>
              <li>
                Vendors and customers should be register or login to access the
                website.
              </li>
              <br></br>
              <li>
                Vendors and customers who wants to register should go to signup
                page. Already registered vendor or customer can go to login page
                to view the products.
              </li>
              <br></br>
              <li>
                Vendors can update about the products to the admin. so that
                admin can update in the website.
              </li>
              <br></br>
              <li>
                Customers can see the product according to the search at their
                selected shops.
              </li>
              <br></br>
              <li>
                Customers can search, buy the products through online by using
                this website.
              </li>
              <br></br>
            </ul>
          </i>
        </div>
      </h5>
    </div>
  );
}
