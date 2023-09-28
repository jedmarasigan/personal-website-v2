import React from "react";

const Disclaimer = ({ darkTheme }) => {
  return (
    <div
      id="disclaimer"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div
          className={
            "modal-content " + (darkTheme ? "bg-dark-2 text-light" : "")
          }
        >
          <div className="modal-header">
            <h5 className={"modal-title " + (darkTheme ? "text-white" : "")}>
              Copyright &amp; Disclaimer
            </h5>
            <button
              type="button"
              className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <p>
              I built this website for three purposes:
            </p>
            <ul className="lh-lg">
              <li>
                The first reason is to have my own personal website where I can show people something I created instead of a resume.
              </li>
              <li>
                The second reason is I wanted to have a personal project where I can keep adding new features by testing out different technologies, and I can add it onto my resume
              </li>
              <li>
                The final reason was to test out what I learned about Docker and how to host my Containers on AWS. This project is mostly about myself learning DevOps stuff, instead of the usual full stack development that I do.
              </li>
            </ul>
            <p>
              I decided to use a template for the frontend protion of the website. I didn't want to spend too much time on building from scratch. I wanted to focus more on Docker and AWS. Not to say that I am not learning new stuff about frontend development, I really am learning a ton going through the template. I just wanted to host a website that was nice to look at quickly and efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
