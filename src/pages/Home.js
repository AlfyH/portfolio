import React, { Component } from 'react';
import Nav from '../components/Nav';
import rabbithero from '../assets/rabbit-hero.png';
import rabbitmov from '../assets/yellowRabbit.mov';

class Home extends Component {
    render() {
        return (
            <section id="1">
                <div onClick={this.props.tools.toggleSidebarMain} id = "page-home">
                    <div id ="menu-top">
                        <Nav></Nav>
                    </div>
                    <div id="rabbit-hero-cont">
                        {/* <img id="rabbit-hero" src={rabbithero} alt ="rabbit-hero.png"></img> */}
                        <video id="rabbit-hero" src={rabbitmov} autoPlay loop muted playsInline></video>
                    </div>
                    <div id="text-hero-cont">
                        <h1 id="text-hero-name">alfy hushairi</h1>
                        <p id="text-hero-sub">design.prototype.develop</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;