import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./Navbar.css";

const Navbar = () => {
  const handlenavbar = () => {
    alert("  Dont Click It's Dummy Navbar");
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-#e3f2fd d-flex justify-content-end">
        <div class="container-fluid ml-5 ">
          <a class="navbar-brand" href="/Booking">
            <span style={{ color: " rgb(86,110,181)" }}>M</span>Booking
          </a>
          <button
            class="navbar-toggler mx-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/BookingnavbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handlenavbar}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/Booking">
                  Home
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/Booking"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mentors
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/Booking">
                      Higher Education
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/Booking">
                      Job
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/Booking">
                      Engineering UG
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link ">CLARITY COINS</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <button class="btn btn-outline-success" type="submit">
                BookNow
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
