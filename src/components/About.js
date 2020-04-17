import React, { Component } from "react";
import Tag from "./Tag";

export class About extends Component {
  render() {
    return (
      <div>
        {/* <header className="about-img"></header> */}
        <div className="content">
          <div className="about-content">
            <div>
              <h3 className="my-4">About Me</h3>
              <div className="about-text">
                <div className="tag-container">
                  <Tag name="Frontend Developer" />
                  <Tag name="Website Designer" />
                  <Tag name="Doritos Eater" />
                </div>
                Hello there. I am Derrick, a Year 2 Computer Science Major student from {" "}
                <a href="https://www.monash.edu/" className="text-link">
                  Monash
                </a>{" "}
                <br/>
                <br/>
                I am currently seeking formal experience as a Front End Developer.  
                <br/>
                <br/>
                Always looking for aesthetic color combinations
              </div>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/images/portrait.png'} className="about-portrait" />
            </div>
          </div>
          <div className="about-secondary">
            <div className="work-content">
              <h3 className="my-4">Work Experience</h3>
              <ul>
                <li>
                  <h4>Aug 2019 – Nov 2019</h4>
                </li>
                <li>
                  <h5>Frontend Developer at ConceptX Myanmar</h5>
                </li>
                <li>
                  <a href="https://www.conceptxmm.com/">
                    Visit ConceptX Myanmar Page
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <h4>Oct 2016 – Mar 2017</h4>
                </li>
                <li>
                  <h5>Freelance Tutor</h5>
                </li>
                <li>
                  <h6>+ Professional tutor for 3 highschool students</h6>
                </li>
                <li>
                  <h6>+ Taught IT, Mathematics & Science</h6>
                </li>
              </ul>
            </div>
            <div className="education-content">
              <h3 className="my-4">Education</h3>
              <ul>
                <li>
                  <h4>2018 - Present</h4>
                </li>
                <li>
                  <h5>Monash University, Clayton</h5>
                </li>
                <li>
                  <h6>
                    + Bachelor of Computer Science
                  </h6>
                </li>
                <li>
                  <h6>+ 83.33 Weighted Average Mark</h6>
                </li>
                <li>
                  <h6>+ Higher Achiever Award</h6>
                </li>
              </ul>
              <ul>
                <li>
                  <h4>2017 - 2018</h4>
                </li>
                <li>
                  <h5>
                    Monash Uni Foundation Year, Sunway Uni
                  </h5>
                </li>
                <li>
                  <h6>+ Jeffery Cheah Entrance Scholarship</h6>
                </li>
                <li>
                  <h6>+ Graduated with 90.38 Weighted Average Mark</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
