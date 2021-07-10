import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Person() {
  var bodyss = {
    name: localStorage.getItem("email"),
  };
  console.log(bodyss.name);
  const [value, setValues] = useState("");

  return (
    <div>
      {useEffect(() => {
        axios.post("http://localhost:8081/profile", bodyss).then((response) => {
          setValues(response.data);
          console.log(response.data);
        });
      }, [])}
      <table border="1" align="center">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No</th>
        </tr>
        <tr>
          <td>{value.name}</td>
          <td>{value.email}</td>
          <td>{value.phone}</td>
        </tr>
      </table>
    </div>
  );
}
