import React from "react";
export default function welcomeVendor() {
  return (
    <>
      <div>
        <h3>Welcome to vendor portal</h3>
        <button onClick="/Home" class="btn btn-primary">
          UpdateItems
        </button>
        <span> </span>
        <button onClick="/checkItems" class="btn btn-primary">
          CheckItems
        </button>
      </div>
    </>
  );
}
