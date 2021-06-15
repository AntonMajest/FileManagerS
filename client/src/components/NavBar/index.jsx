import React from 'react';
import { NavLink } from 'react-router-dom';
import image from "./assets/myApp.png";

export default function index() {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-light navbar-expand-md bg-dark justify-content-center  bg-info text-white my-2">
          <div className="p-2 w-90">
            <NavLink className="nav-item" to="/app">
              <button type="button" className="btn btn-link text-light"></button>
            </NavLink>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </header>
  )
}
