import React from "react";
import PropTypes, { func } from "prop-types";

export default function Navbar(props) {

  function handleToggle(){
    if(props.mode==="dark"){
      props.toggleMode("dark");
    }
    else if(props.mode==="danger"){
      props.toggleMode("red")
    }
    else if(props.mode==="primary"){
      props.toggleMode("blue")
    }
    else if(props.mode==="success"){
      props.toggleMode("green")
    }
  }
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">{props.about}</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
              {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
              <div class={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
                <input
                  onClick={handleToggle}
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label class="form-check-label" for="flexSwitchCheckDefault">
                  Enable Dark Mode
                </label>
              </div>
              <div class={`form-check form-switch text-${props.mode==="light"?"danger":"light"}`}>
                <input
                  onClick={handleToggle}
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label class="form-check-label" for="flexSwitchCheckDefault">
                  Enable Red Mode
                </label>
              </div>
              <div class={`form-check form-switch text-${props.mode==="light"?"primary":"light"}`}>
                <input
                  onClick={handleToggle}
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label class="form-check-label" for="flexSwitchCheckDefault">
                  Enable Blue Mode
                </label>
              </div>
              <div class={`form-check form-switch text-${props.mode==="light"?"success":"light"}`}>
                <input
                  onClick={handleToggle}
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label class="form-check-label" for="flexSwitchCheckDefault">
                  Enable Green Mode
                </label>
              </div>
            {/* </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

// isrequired matlab bhejne hi hia
// default hone pe eror nahi ayega
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

// yeh ek obj hone wala hai {PropTypes.string}

Navbar.defaultProps = {
  title: "Stranger",
};
