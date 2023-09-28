import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2015 - 2019",
      title: "Bachelor Degree in Computer Engineering",
      place: "University of California, Irvine",
      desc: "While I studied Computer Engineering as my major, I found myself drawn more to the software side of things. Projects like creating and hosting websites really piqued my interest in Software Development.",
    },
    {
      yearRange: "2023",
      title: "Mastering the Coding Interview: Data Structures + Algorithms",
      place: "Taught by Andrei Neagoie/Zero to Mastery on Udemy",
      desc: "I took this course for a month to refresh myself on algorithms and data structures for the technical interviews questions.",
    },
    {
      yearRange: "2023",
      title: "Docker & Kubernetes: The Practical Guide [2023 Edition]",
      place: "Taught by Maximilian Schwarzmuller/Academind on Udemy",
      desc: "I wanted to learn more about Docker and DevOps to give myself more range as a Developer.",
    },
    {
      yearRange: "Ongoing",
      title: "The Ultimate MySQL Bootcamp",
      place: "Taught by Colt Steele",
      desc: "I wanted to solidify my knowledge on SQL to use in personal projects and future roles",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2021 - 2022",
      title: "Software Developer",
      place: "Grio",
      desc: "Worked as a full stack developer working on different projects like their custom timesheet website, Yahoo Rivals, and a social media app called Pyvott.",
    },
    {
      yearRange: "2020 - 2021",
      title: "Software Developer",
      place: "Vdart",
      desc: "I was working for Vdart and contracted to Toyota Motors North America, where I worked as a backend developer migrating their old API's in Microsoft Azure to AWS.",
    },
    {
      yearRange: "2017 - 2019",
      title: "Junior Software Developer",
      place: "Avalern",
      desc: "Worked as a full stack developer, using HTML and CSS to design frontend elements, with a Javascript backend, and MySQL database ",
    },
  ];

  // const skills = [
  //   {
  //     name: "Web Design",
  //     percent: 65,
  //   },
  //   {
  //     name: "HTML/CSS",
  //     percent: 95,
  //   },
  //   {
  //     name: "JavaScript",
  //     percent: 80,
  //   },
  //   {
  //     name: "React JS",
  //     percent: 70,
  //   },
  //   {
  //     name: "Angular Js",
  //     percent: 60,
  //   },
  //   {
  //     name: "Bootstrap",
  //     percent: 99,
  //   },
  // ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        {/* <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div> */}
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
