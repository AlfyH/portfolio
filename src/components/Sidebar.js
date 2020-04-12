import React, { Component } from 'react'
import rabbit from "../assets/rabbit.png"
import SideBarToggle from '../components/SidebarToggle';

export default class Sidebar extends Component {
    render() {
        return (
            <nav id="sidebar">
                <SideBarToggle tools={this.props.tools}></SideBarToggle>
                <ul id="sidebar-nav">
                    <li>
                        <a href="#1" onClick={this.props.tools.toggleSidebar}>home</a>
                    </li>
                    <li>
                        <a href="#2" onClick={this.props.tools.toggleSidebar}>aboutMe</a>
                    </li>
                    <li>
                        <a href="#3" onClick={this.props.tools.toggleSidebar}>portfolio</a>
                    </li>
                    <li>
                        <a href="#4" onClick={this.props.tools.toggleSidebar}>contactMe</a>
                    </li>
                </ul>
                <div id="sidebar-header">
                    <img id="image-rabbit" src={rabbit} alt="rabbit.png"></img>
                    <p>Alfy Hushairi</p>
                </div>
            </nav>
        )
    }
}