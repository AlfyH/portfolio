import React from 'react';
import Nav from '../components/Nav';
import rabbithero from '../assets/rabbit-hero.png';
// import Modal from "../components/Modal";


const Home = tools => {
        return (
          <section id="1">
            <div onClick={tools.toggleSidebarMain} id="page-home">
              <div id="menu-top">
                <Nav></Nav>
              </div>
              <div id="rabbit-hero-cont">
                <img
                  id="rabbit-hero"
                  src={rabbithero}
                  alt="rabbit-hero.png"
                ></img>
                <video
                  id="rabbit-hero"
                  src="https://res.cloudinary.com/alfy/video/upload/v1589122995/yellowRabbit_aibfsh.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              </div>
              <div id="text-hero-cont">
                <h1 id="text-hero-name">alfy hushairi</h1>
                <p id="text-hero-sub">design.prototype.develop</p>
              </div>
            </div>
          </section>
        );
}

export default Home;