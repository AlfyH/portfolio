import React, { Component } from 'react';
import background from '../assets/background-circle.png'
import Sketch from './Sketch';
import ash from "../assets/ash.gif"
import Slider from './carousel/Slider'
import Flikity from './flikity/Flikity'

class Home extends Component {
    render() {
        return (
            <section id="1">
                <div id = "page-home">
                    <div id="page-home-text">
                        </div>
                        {/* <h1 className="text-intro">Hello I am Alfy <br></br>I am a web developer.</h1> */}
                </div>
            </section>
        );
    }
}

export default Home;