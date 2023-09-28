import React from "react";
import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Jed Marasigan,</span> a Software
              Developer
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
              I've been a Developer for around 3 years now. I am hard-working, driven and flexible. Challenging problems and the excitment of finally cracking the code are one of the main reasons I love being a developer.
              I have worked on both small and large teams, and in whatever project I am in I strive to do a good job in all the roles I have, be it a developer or a colleague. But no matter how hard I try to make everything perfect, not everything goes as planned.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              Getting laid off hit me hard. It was tough not to get despirited even with the assurance from my manager that it was not due to anything I did. 
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              As I started looking for new positions, I asked myself what kind of Developer I wanted to be in my next role. Did I want to stay the same and go from there, or did I want to be a stronger more reliable team member?
              That's the reason I decided to create this personal website, to create something from what I have learned over the past months and to show myself that I can and will continue to grow.
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Jed Marasigan
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:jmarasigan0530@gmail.com">jmarasigan0530@gmail.com</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span>26
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Los Angeles,
                  California
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
