import React, { Component } from 'react'
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Menu from '../components/Menu';
import Contact from '../components/Contact';


export default class Main extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div id="view-main">
                <div id="main-content">
                    <Home></Home>
                    <Menu tools={this.props.tools}></Menu>
                    <div id="main-content-after-menu">
                        <About></About>
                        <Portfolio></Portfolio>
                        <Contact></Contact>
                    </div>
                </div>
            </div>
        )
    }
}