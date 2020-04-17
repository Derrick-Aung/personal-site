import React, { Component } from "react";

export class Skills extends Component {
  render() {
    return (
      <div className="skills-content">
        <div className="programming-section">
          <h3>Programming</h3>
          <div className="d-flex justify-content-around">
            <span>
              <img src="images/javascript.png" alt="" />
              Javascript
            </span>
            <span>
              <img src="images/html.png" alt="" />
              HTML
            </span>
            <span>
              <img src="images/css.png" alt="" />
              CSS
            </span>
            <span>
              <img src="images/python.png" alt="" />
              Python
            </span>
            <span>
              <img src="images/java.png" alt="" />
              Java
            </span>
            
          </div>
        </div>
        <div className="framework-section">
          <h3>Frameworks</h3>
          <div className="d-flex justify-content-around">
            <span>
              <img src="images/reactjs.png" alt="" />
              ReactJS
            </span>
            <span>
              <img src="images/redux.png" alt="" />
              Redux
            </span>
            <span>
              <img src="images/bootstrap.png" alt="" />
              Bootstrap
            </span>
            <span>
              <img src="images/django.png" alt="" />
              Django
            </span>
          </div>
        </div>
        <div className="technology-section">
          <h3>Technologies</h3>
          <div className="d-flex justify-content-around">
            <span>
              <img src="images/git.png" alt="" />
              Git
            </span>
            <span>
              <img src="images/photoshop.png" alt="" />
              Adobe Photoshop
            </span>
            <span>
              <img src="images/ec2.png" alt="" />
              AWS EC2
            </span>
            <span>
              <img src="images/s3.png" alt="" />
              AWS S3
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
