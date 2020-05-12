import React, { Component } from 'react';
import rabbithero from '../assets/rabbit-hero.png';
import github from '../assets/githublogo.png';
import linkedin from '../assets/linkedinlogo.png';

class Contact extends Component {
    render() {
        return (
            <section id="4">
                <div onClick={this.props.tools.toggleSidebarMain}  id="page-contact">
                    {/* <div id="rabbit-hero-cont">
                        <img id="rabbit-hero" src={rabbithero} alt="rabbit-hero.png"></img>
                    </div> */}
                    <img id="rabbit-hero-contact" src={rabbithero} alt="rabbit-hero.png"></img>
                    <div id="contact-content-cont">
                    <div id="contact-content">
                        <div className="grid-item">
                            <h1>Hi,</h1>
                        </div>
                        <div className="grid-item">
                            <p style={{fontWeight:"400", marginBottom:"0", marginTop:"50px"}}> I’m Alfy Hushairi.
                            <br></br>
                                A
                                web developer
                                currently working in
                                London, UK.
                            </p>
                                <p style={{ fontWeight: "200", marginBottom: "0", marginTop: "10px", fontSize:"1em" }}>
                                Contact me for any projects
                                or collaborations.
                            </p>
                            <p style={{ fontWeight: "300", marginBottom: "0", marginTop: "15px", color:"#FEB300" }}>
                                    <span style={{ fontWeight: "500", marginRight: "2px", color: "white" }}>e</span> me@alfyhushairi.com
                            </p>
                        </div>
                    </div>
                    </div>

                <div id="footer">
                    <div id="logo-cont">
                        <span className="helper"></span>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlfyH">
                            <img src={github}></img>
                        </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alfyhushairi">
                            <img src={linkedin}></img>
                        </a>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default Contact;