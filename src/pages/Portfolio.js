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


export default class Portfolio extends Component {

    openModal(){
        var modalText = "Alfy";
        tools.openModal(modalText);
    }

    render() {
        return (
            <section id="3">
                <div id = "page-portfolio">
                        {/* <div>
                        <button id="myBtn" onClick={this.openModal}>press</button>
                        </div> */}
                    <div className="grid-cont">
                        <div className ="grid-item">
                            <img className="port-img" src={design}></img>
                            {/* <h1 style={{fontFamily:"Titillium-Bold", fontSize:"1rem", color:"white"}}>Design</h1> */}
                        </div>
                        <div className="grid-item">
                            <img className="port-img"src={prototype}></img>
                            {/* <h1 style={{ fontFamily: "Titillium-Bold", fontSize: "1rem", color: "white" }}>Prototype</h1> */}
                        </div>
                        <div className="grid-item">
                            <img className="port-img" src={develop}></img>
                            {/* <h1 style={{ fontFamily: "Titillium-Bold", fontSize: "1rem", color: "white" }}>Develop</h1> */}
                        </div>
                        <div className="grid-item">
                            <img className="port-img" src={five}></img>
                            {/* <h1 style={{ fontFamily: "Titillium-Bold", fontSize: "1rem", color: "white" }}>Develop</h1> */}
                        </div>
                        <div className="grid-item">
                            <img className="port-img" src={quad}></img>
                            {/* <h1 style={{ fontFamily: "Titillium-Bold", fontSize: "1rem", color: "white" }}>Develop</h1> */}
                        </div>
                        <div className="grid-item">
                            <img className="port-img" src={six}></img>
                            {/* <h1 style={{ fontFamily: "Titillium-Bold", fontSize: "1rem", color: "white" }}>Develop</h1> */}
                        </div>
                        <div className="grid-item">
                            <img className="port-img" src={seven}></img>
                            {/* <h1 style={{ fontFamily: "Titillium-Bold", fontSize: "1rem", color: "white" }}>Develop</h1> */}
                        </div>
                        <div className="grid-item">
                            <img className="port-img" src={eight}></img>
                            {/* <h1 style={{ fontFamily: "Titillium-Bold", fontSize: "1rem", color: "white" }}>Develop</h1> */}
                        </div>
                        <div className="grid-item">
                            <img className="port-img" src={nine}></img>
                            {/* <h1 style={{ fontFamily: "Titillium-Bold", fontSize: "1rem", color: "white" }}>Develop</h1> */}
                        </div>
                        <div className="grid-item">
                            <img className="port-img" src={ten}></img>
                            {/* <h1 style={{ fontFamily: "Titillium-Bold", fontSize: "1rem", color: "white" }}>Develop</h1> */}
                        </div>
                        <div className="grid-item">
                            <img className="port-img" src={eleven}></img>
                            {/* <h1 style={{ fontFamily: "Titillium-Bold", fontSize: "1rem", color: "white" }}>Develop</h1> */}
                        </div>
                        <div className="grid-item">
                            <img className="port-img" src={twelve}></img>
                            {/* <h1 style={{ fontFamily: "Titillium-Bold", fontSize: "1rem", color: "white" }}>Develop</h1> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}