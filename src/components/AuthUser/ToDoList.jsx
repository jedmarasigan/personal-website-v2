import React from "react";
import { useEffect, useState } from "react";
import AuthHeader from "./AuthHeader";
import { commonConfig } from "../../config/commonConfig";
import ClassicAuthHeader from "./ClassicAuthHeader";
import PreLoader from "../Preloader";
import { useNavigate } from "react-router-dom";
import { Amplify, API, Auth } from "aws-amplify";
import awsconfig from '../../aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

const ToDoList = () => {
    const darkTheme = commonConfig.darkTheme;
    const classicHeader = commonConfig.classicHeader;
    const [isLoading, setisLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      AssessLoggedInState()
    }, [])

    useEffect(() => {
      const loadingTimeout = setTimeout(() => {
        setisLoading(false);
      }, 1000);
      return () => {
        clearTimeout(loadingTimeout);
      };
    }, []);

    const AssessLoggedInState = () => {
      Auth.currentAuthenticatedUser()
      .then(() => {
        console.log("User Authenticated in TodoList");
        setLoggedIn(true)
      })
      .catch(() => {
        setLoggedIn(false)
        navigate("/login")
      })
    }
  
    return (
        <div
        style={{ position: "absolute", height: "100%", width: "100%" }}
        className={classicHeader ? "" : "side-header"}
      >
        {isLoading && <PreLoader></PreLoader>}
        <div id="main-wrapper" style={{ height: "100%" }}>
          {classicHeader ? (
            <ClassicAuthHeader setLoggedIn={setLoggedIn}></ClassicAuthHeader>
          ) : (
            <AuthHeader activeClass="active" setLoggedIn={setLoggedIn}></AuthHeader>
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
                  What's Next?
                </h2>
                <p
                  className={
                    "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                    (darkTheme ? "text-white" : "text-dark")
                  }
                >
                  To Do List
                  <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
                </p>
              </div>
              {/* Heading end*/}
            </div>
          </div>
        </div>
      </div>
    )
  };
  
  export default withAuthenticator(ToDoList);