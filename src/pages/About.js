import React, { Component } from 'react';
import MenuSide from '../components/MenuSide';
import arrowdown from '../assets/arrow-down.png'

class About extends Component {
    render() {
        return (
            <div id = "page-about">
                <section id="2">
                    <MenuSide tools={this.props.tools}></MenuSide>
                    <div onClick={this.props.tools.toggleSidebarMain} className="pagePadding">

                        <h1 className="header">get in touch</h1>
                        <p style={{ marginTop: "4.4vh" }}>
                            I am a user experience enthusiast formerly trained in Mechatronics.
                            I enjoy the process of designing, prototyping and developing physical installations
                            and digital platforms - and I am ready to collaborate.
                        </p>
                        <p style={{ marginTop: "2.2vh" }}>

                        </p>

                        {/* <h1 className="header">functional appealing modular</h1>
                        <p style ={{marginTop: "4.4vh"}}>
                            Three words to sum up my approach to tackling challenges.
                            Functional - taking the optimised route to (20 words summary)
                        </p>
                        <p style={{ marginTop: "2.2vh"}}> 
                            Manchmal muss man Dinge einfach anders machen als die anderen.
                            Doch gerade in dem sehr traditionellen Tapeziergewerbe
                            war das eine ziemliche Herausforderung. Mein Ziel ist es,
                            dieses alte Handwerk wiederzubeleben und ihm neues Leben einzuhauchen,
                            genauso wie ich es bei jedem meiner Möbelstücke mache – mit viel Detailverliebtheit,
                            Leidenschaft und dem Anspruch, immer das Beste rauszuholen.
                            Ich bin vielleicht nicht die klassischen Wege gegangen,
                            doch das war schon gut so, denn sonst wäre ich nicht da,
                            wo ich jetzt bin. Und meine Möbel würden nicht so aussehen,
                            wie sie jetzt aussehen. Ewig schön, (80 words Bio) 
                        </p> */}

                        <a href="#4" style={{ textDecoration: "none" }}>
                                <div id="contact-me">
                                    <p>Contact me for more info</p>
                            <img  style ={{width:"20px"}} src={arrowdown}/>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;