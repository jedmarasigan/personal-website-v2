import React, { useState } from "react";
import { Tooltip } from "../Tooltip";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

import { Amplify, Auth } from "aws-amplify";
import awsconfig from '../../aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

const AuthHeader = ({ classicHeader, darkTheme, homeRef, handleNavClick, activeClass, setLoggedIn }) => {
  const [isNavModalClose, setIsNavModalClose] = useState(true);
  const navigate = useNavigate();
  const signOut = async() =>{
    try {
        await Auth.signOut();
        setLoggedIn(false);
        navigate("/");
    } catch (error) {
        console.log('there was an error signing out ', error);
    }
  }

  return (
    <header id="header" className="sticky-top">
      {/* Navbar */}
      <nav className="primary-menu navbar navbar-expand-lg navbar-dark bg-dark border-bottom-0">
        <div className="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2">
          {/* Logo */}
          <Link
            smooth
            duration={500}
            style={{ cursor: "pointer" }}
            to="home"
            className="mb-lg-auto mt-lg-4"
            onClick={(e) => {
              e.preventDefault();
              navigate("/")
            }}
          >
            <span className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block">
              <img
                className="img-fluid rounded-pill d-block"
                src="images/profile.jpg"
                title="Sorry for the blurry pic. I can put up a website, but I can't for the life of me find a better picture :)"
                alt="profile"
              />
            </span>
            <h1 className="text-5 text-white text-center mb-0 d-lg-block">
              Jed Marasigan
            </h1>
          </Link>
          {/* Logo End */}
          <div
            id="header-nav"
            className={
              isNavModalClose
                ? "collapse navbar-collapse w-100 my-lg-auto "
                : "show navbar-collapse w-100 my-lg-auto"
            }
          >
            <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
              <li className="nav-item">
                  <Link
                    className={"nav-link "}
                    style={{ cursor: "pointer" }}
                    spy
                    to="signout"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavModalClose(true);
                      signOut();
                    }}
                  >
                    Sign Out
                  </Link>
                </li>
            </ul>
          </div>
          <ul className="social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex">
            <li className="social-icons-linked-in">
              <Tooltip text="LinkedIn" placement="top">
                <a
                  href="https://www.linkedin.com/in/jed-marasigan-a97625120/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </Tooltip>
            </li>
            <li className="social-icons-github">
              <Tooltip text="GitHub" placement="top">
                <a
                  href="https://github.com/jedmarasigan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" />
                </a>
              </Tooltip>
            </li>
          </ul>
          <button
            onClick={(e) => {
              setIsNavModalClose(!isNavModalClose);
            }}
            className={
              isNavModalClose ? "navbar-toggler" : "navbar-toggler show"
            }
            id="navbar-toggler"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default withAuthenticator(AuthHeader);
