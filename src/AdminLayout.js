import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="row">
      <div className="col-md-12">
        <ul>
          <li>
            <Link to="/admin">Admin Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="col-md-12">
        <Outlet />
      </div>
    </div>
  );
}
