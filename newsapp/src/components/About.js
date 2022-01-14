import React from "react";

function About() {
  document.title = "About-NewsFlash";
  return (
    <div className="container">
      <h1 className="text-center my-5">About Us !!</h1>
      <p style={{ textAlign: "center" }}>
        Hey I am using News API from NewsApi.com. This API enables us to display
        updated news each minute
        <br />
        Covering all the major categories and country wise news as well as Top
        Headlines of that category. <br />I am just making this project to learn
        React and to implement in a live project.
        <br /> This is a major step to master Full Stack Web Development.
      </p>
    </div>
  );
}

export default About;
