import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Software Development",
      desc: "Experience with Docker, AWS, MySQL, React, NodeJs, and Javascript.",
      icon: "fas fa-code",
    },
    {
      name: "Team Player",
      desc: "I love working with both small and large teams. Each one is different and I try to contribute as much as I can.",
      icon: "fas fa-people-group",
    },
    {
      name: "Open-minded",
      desc: "Part of learning is always knowing when and where you can improve, I belive constructive critisism is important for one's growth.",
      icon: "fas fa-eye",
    },
    {
      name: "Driven",
      desc: "Enthusiastic and ready to become a better programmer, team member, and person.",
      icon: "fas fa-fire",
    },
    {
      name: "Curious",
      desc: "When I encounter something new, I find the need to learn everything I can about it.",
      icon: "fas fa-magnifying-glass",
    },
    {
      name: "Flexible",
      desc: "I thrive in stressful and fast paced environments. I like to keep busy both inside and outside of my career.",
      icon: "fas fa-bullhorn",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Skills
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Can Do
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
