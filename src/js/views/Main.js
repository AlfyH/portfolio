import React, { Component } from 'react'
import Home from '../../pages/Home';
import About from '../../pages/About';
import Portfolio from '../../pages/Portfolio';
import FullImage from '../../pages/FullImage';
import Contact from '../../pages/Contact';
// import MenuSide from '../components/MenuSide';


export default class Main extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div id="view-main">
                <div id="main-content">
                    <Home tools={this.props.tools}></Home>
                    {/* <MenuSide tools={this.props.tools}></MenuSide> */}
                    <div id="main-content-after-menu">
                        <About tools ={this.props.tools}></About>
                        <Portfolio></Portfolio>
                        <FullImage></FullImage>
                        <Contact></Contact>
                    </div>
                </div>
            </div>
        )
    }
}