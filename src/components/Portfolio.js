import React, { Component } from "react";
import Tag from "./Tag";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  ["images/mellowdy1.png", "images/mellowdy2.png", "images/mellowdy3.png"],
  ["images/portfolio-design1.png", "images/portfolio-design2.png", "images/portfolio-design3.png", "images/portfolio-design4.png"],
  ["images/thissite1.png", "images/thissite2.png", "images/thissite3.png", "images/thissite4.png"],
];

export class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      projectIndex: null
    };
  }

  openLightBox = id => {
    this.setState({
      isOpen: true,
      projectIndex: id
    });
  };

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div className="portfolio d-flex flex-column content">
        <div className="portfolio-content">
          <h3 className="my-4">What I Do</h3>
          <p>
            To me websites are a form of art. It may not be a sculpture, a song or a painting but 
            this is how I manifest my imagination into a visual form. 
          </p>
        </div>

        <div className="portfolio-content right-align">
          <h3 className="my-4">Mellowdy | Web App for Spotify</h3>
          <div className="tag-container">
            <Tag name="ReactJS" />
            <Tag name="Redux" />
            <Tag name="Desktop Only" />
            <Tag name="Spotify API" />
            <Tag name="Ongoing Project" />
          </div>

          <img
          src={process.env.PUBLIC_URL +"/images/mellowdy1.png"}
            alt=""
            className="project-img"
            onClick={() => this.openLightBox(0)}
          />

          <div className="img-description">Mellowdy for Spotify</div>
            <p className="mt-2">
              Mellowdy is a front end application designed to explore new music efficiently in
              a short time span by taking advantage of the Spotify API. Each track 
              is a short clip of roughly 30 seconds which you can add to your 
              playlist or library directly from the website!
            </p>
        </div>

        <div className="projects">
          <div className="portfolio-content">
            <h3 className="my-4">Portfolio Design</h3>
            <div className="img-container">
              <img
                src={process.env.PUBLIC_URL +"/images/portfoliodesign1.png"}
                alt=""
                className="project-img"
                onClick={() => this.openLightBox(1)}
              />
              <div className="img-description">Some Project</div>
            </div>
            <div className="tag-container">
              <Tag name="ReactJS" />
              <Tag name="CSS Effects" />
              <Tag name="GitPages Hosting" />
            </div>
            <p>
              This personal project is a design concept for a portfolio.
            </p>
          </div>

          <div className="portfolio-content">
            <h3 className="my-4">This Website</h3>
            <div className="img-container">
              <img
                src={process.env.PUBLIC_URL +"/images/thissite1.png"}
                alt=""
                className="project-img"
                onClick={() => this.openLightBox(2)}
              />
              <div className="img-description">Some Project</div>
            </div>
            <div className="tag-container">
              <Tag name="Responsive Design" />
              <Tag name="Mobile First Approach" />
              <Tag name="Aesthetics" />
            </div>
            <p>
              Yes, this is the page you are looking at right now. How do you like it?
            </p>
          </div>

        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[this.state.projectIndex][photoIndex]}
            nextSrc={
              images[this.state.projectIndex][
                (photoIndex + 1) % images[this.state.projectIndex].length
              ]
            }
            prevSrc={
              images[this.state.projectIndex][
                (photoIndex + images[this.state.projectIndex].length - 1) %
                  images[this.state.projectIndex].length
              ]
            }
            onCloseRequest={() =>
              this.setState({ isOpen: false, photoIndex: 0 })
            }
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + images[this.state.projectIndex].length - 1) %
                  images[this.state.projectIndex].length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + 1) % images[this.state.projectIndex].length
              })
            }
          />
        )}
      </div>
    );
  }
}
export default Portfolio;
