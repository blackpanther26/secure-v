import React from "react";
//import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom';
function Navbar(props) {
  const { user,loginWithRedirect,isAuthenticated ,logout} = useAuth0();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand fw-bolder" href="/">
            <Link to="/" className='navbar-logo'>
                TRVL <i className='fa-solid fa-v'/>
            </Link>
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {
                isAuthenticated&&<p className="mx-3 my-2">{user.name}</p>

            }
            {
                isAuthenticated?(
                    <button
                type="button"
                className="btn btn-dark"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
                ):(
                    <button
                type="button"
                className="btn btn-dark"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
                )
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
