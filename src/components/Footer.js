import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="footer-content">
                <div className="motto-bar">
                    
                </div>
                <div className="icon-bar d-flex justify-content-around">
                    {/* <a href="#">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a> */}
                    <a href="mailto:derrick.aungkhant@gmail.com">
                        <i className="fas fa-envelope fa-2x"></i>
                    </a>
                    <a href="https://github.com/Derrick-Aung/">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a href="tel:0405438577">
                        <i className="fas fa-phone fa-2x"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer
