import { useEffect, useState } from "react";
import Header from "./Header";
import { commonConfig } from "../config/commonConfig";
import ClassicHeader from "./ClassicHeader";
import PreLoader from "./Preloader";
import {
  MDBContainer,
  MDBInput
}
from 'mdb-react-ui-kit';

import { Amplify, Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
const personalWebAPI = "personalWebsiteApis";
const path = "/test";

const Login = () => {
  const darkTheme = commonConfig.darkTheme;
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const classicHeader = commonConfig.classicHeader;
  const [isLoading, setisLoading] = useState(true);
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setisLoading(false);
    }, 1000);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  // function testAPICall(username, password){
  //   API.get(
  //     personalWebAPI,
  //     path + "/" + username
  //   ).then(
  //     response => {
  //       console.log(response);
  //     }
  //   ).catch(
  //     error => {
  //       console.log(error);
  //     }
  //   )
  // };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // testAPICall(username, password);
    try {
      await Auth.signIn(username, password);
      navigate("/todolist");
    } catch (error) {
      console.log('there was an error logging in', error);
    }
  }

  return (
    <div
      style={{ position: "absolute", height: "100%", width: "100%" }}
      className={classicHeader ? "" : "side-header"}
    >
      {isLoading && <PreLoader></PreLoader>}
      <div id="main-wrapper" style={{ height: "100%" }}>
        {classicHeader ? (
          <ClassicHeader handleNavClick={handleNavClick}></ClassicHeader>
        ) : (
          <Header handleNavClick={handleNavClick} activeClass="active"></Header>
        )}
        <div id="content" role="main" className={(darkTheme ? "bg-dark-1" : "")} style={{ height: "100%" }}>
          <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
            {/* Heading */}
            <div className="position-relative d-flex text-center mb-5">
              <h2
                className={
                  "text-24  text-uppercase fw-600 w-100 mb-0 " +
                  (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
                }
              >
                Welcome Back
              </h2>
              <p
                className={
                  "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                  (darkTheme ? "text-white" : "text-dark")
                }
              >
                Login
                <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
              </p>
            </div>
            {/* Heading end*/}
          </div>
          <form onSubmit={handleOnSubmit}>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value={username} onChange={(e) => setusername(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e) => setpassword(e.target.value)}/>
              <button type='submit' className="btn btn-primary rounded-pill">Sign in</button>
            </MDBContainer>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Login;