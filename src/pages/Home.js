import React, { Component } from 'react';
import Nav from '../components/Nav';

class Home extends Component {
    render() {
        return (
            <section id="1">
                <div id = "page-home">
                    <div id ="menu-top">
                        <Nav></Nav>
                    </div>
                    <div id="page-home-text">
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;