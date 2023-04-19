import React from "react";
import "./users.scss";
import Navbar from "../navbar/Navbar";
const Users = () => {
  return (
    <div>
      <hr />
      <h3>All users</h3>
      <div className="allusers">
        <table>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
            <th>Phone No</th>
          </tr>

          <tr>
            <td>Magazzini </td>
            <td>Giovanni </td>
            <td>Italy</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Users;
