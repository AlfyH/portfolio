import React, { Component } from 'react';
import Menu from '../components/Menu';
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
                </div>
                <Menu tools={this.props.tools}></Menu>
            </section>
        );
    }
}

export default Home;