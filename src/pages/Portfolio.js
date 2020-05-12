import React, { Component } from 'react';
import tools from '../functions/tools'
import develop from '../assets/develop.png'
import prototype from '../assets/prototype.png'
import design from '../assets/design.png'
import quad from '../assets/quad.gif'
import five from '../assets/5.png'
import six from '../assets/6.png'
import seven from '../assets/7.png'
import eight from '../assets/8.png'
import nine from '../assets/9.png'
import ten from '../assets/10.png'
import eleven from '../assets/11.png'
import twelve from '../assets/12.png'
import allfour from '../assets/All4.png'
import accedo from '../assets/accedo.png'
import alllogos from '../assets/alllogs.png'


export default class Portfolio extends Component {

    openModal(){
        var modalText = "Alfy";
        tools.openModal(modalText);
    }

    render() {
        return (
            <section id="3">
                <div onClick={this.props.tools.toggleSidebarMain}  id = "page-portfolio">
                        {/* <div>
                        <button id="myBtn" onClick={this.openModal}>press</button>
                        </div> */}
                    <div className = "accedo">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.accedo.tv">
                        <img src={accedo} className="accedo-image" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.channel4.com">
                        <img src ={allfour} className = "image"/>
                        </a>

                        <p>With Accedo, I have done extensive work on the All4 app by Channel 4 UK.
                            We develop for platforms such as Amazon Fire TV, Samsung TV, Youview, Freeview and Playstation.
                            The type of work around development of the app include UI, player and playback reliablity.</p>
                        <p>With Accedo I have also worked in smaller capacties for other big brands.</p>

                        <img src={alllogos} className="image"/>
                    </div>
                    <div className="grid-cont">
                        <div className ="grid-item">
                            <img className="port-img" src={design}></img>
                        </div>
                        <div className="grid-item">
                            <img className="port-img"src={prototype}></img>
                        </div>
                        {/* <div className="grid-item">
                            <img className="port-img" src={develop}></img>
                        </div> */}
                        <div className="grid-item">
                            <img className="port-img" src={five}></img>
                        </div>
                        <div className="grid-item">
                            <img className="port-img" src={quad}></img>
                        </div>
                        <div className="grid-item">
                            <img className="port-img" src={six}></img>
                        </div>
                        {/* <div className="grid-item">
                            <img className="port-img" src={seven}></img>
                        </div> */}
                        <div className="grid-item">
                            <img className="port-img" src={eight}></img>
                        </div>
                        <div className="grid-item">
                            <img className="port-img" src={nine}></img>
                        </div>
                        <div className="grid-item">
                            <img className="port-img" src={ten}></img>
                        </div>
                        <div className="grid-item">
                            <img className="port-img" src={eleven}></img>
                        </div>
                        <div className="grid-item">
                            <img className="port-img" src={twelve}></img>
                        </div>
                    </div>
                    <p style={{color:"white",marginTop:"10vh", fontWeight:"100", fontSize:"0.7em"}}>
                         This website was designed in Sketch and developed with React
                    </p>
                </div>
            </section>
        );
    }
}