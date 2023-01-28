import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import Admin from "./Admin";
import HomeLayout from "./HomeLayout";
import AdminLayout from "./AdminLayout";
import Users from "./Users";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index path="/" element={<h1>Home</h1>} />
          <Route path="/app1" element={<App1 a={2} b={3} />} />
          <Route path="/contact" element={<h3>Contact</h3>} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route index path="/admin" element={<Admin />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </div>
  );
}

const App1 = ({ a, b }) => a + b;
export default App;
