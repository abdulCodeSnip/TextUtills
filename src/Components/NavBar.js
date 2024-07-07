import React from "react";
import {Link} from 'react-router-dom';

export default function NavBar(props) {
  return (
    <>
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand text-${props.mode === 'dark' || props.mode === 'success' ? 'light' : 'dark'}`} to="/">
          {props.title}
        </Link>
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
              <Link className={`nav-link active text-${props.mode === 'dark' || props.mode === 'success' ? 'light' : 'dark'}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === 'dark' || props.mode === 'success' ? 'light' : 'dark'}`} to="/about">
                {props.aboutText}
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link to="/services" className={`nav-link text-${props.mode === 'dark' || props.mode === 'success' ? 'light' : 'dark'}`}>
                {props.services}
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className={`btn btn-primary text-${props.mode === 'dark' || props.mode === 'success' ? 'light' : 'dark'}`} type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="form-check mx-2">
          <input
            className="form-check-input"type="checkbox"value="" id="flexCheckDefault"
            onClick={props.toggleMode}
          />
          <label className={`form-check-label text-{color:props.mode === 'light' ? 'black' : 'white'`} htmlFor="flexCheckDefault">
            Switch Dark Mode
          </label>
        </div>

        <div className="form-check mx-2">
          <input
            className="form-check-input"type="checkbox"value="" id="flexCheckDefault"
            onClick={props.changeColor}
          />
          <label className={`form-check-label text-{color:props.mode === 'success' ? 'white' : 'black'}`} htmlFor="flexCheckDefault">
            Green Dark Mode
          </label>
        </div>
      </div>
    </nav>
    </>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   aboutText: PropTypes.string.isRequired,
// };
// Navbar.defaultProps = {
//   title: "HELLO TITLE",
//   aboutText: "TEXT IS HERE",
//   services: "Our Services"
// };
