import MapsStoreMallDirectory from "material-ui/svg-icons/maps/store-mall-directory";
import React from "react";
import { GeoAltFill, Map } from "react-bootstrap-icons";
import "./Items/item.css";
export default function Location() {
  var d = localStorage.getItem("location");
  if (d != null) {
    return (
      <div>
        <span>Deliver to</span>
        <h5>
          <span> </span>
          {localStorage.getItem("location")}
        </h5>
        <br></br>
      </div>
    );
  } else {
    return (
      <div>
        <span>Deliver to</span>
        <h5>
          <GeoAltFill />
          <span> </span>location
        </h5>
        <br></br>
      </div>
    );
  }
}
