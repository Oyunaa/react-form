import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="row">
      <div className="col-md-3">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app1">App1</Link>
          </li>
          <li>
            <Link to="/contact">admin</Link>
          </li>
        </ul>
      </div>
      <div className="col-md-9">
        <Outlet />
      </div>
    </div>
  );
}
