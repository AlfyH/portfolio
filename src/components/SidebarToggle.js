import React, { Component } from 'react'
import hamburger from "../assets/hamburger.png"

export default class SideBarToggle extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div id="menu-hamburger">
                <img id="image-hamburger" src={hamburger} onClick={this.props.tools.toggleSidebar} alt="hamburger"></img>
            </div>
        )
    }
}