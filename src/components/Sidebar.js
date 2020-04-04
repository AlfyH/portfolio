import React, { Component } from 'react'
import rabbit from "../assets/rabbit.png"
import SideBarToggle from '../components/SidebarToggle';

export default class Sidebar extends Component {
    render() {
        return (
            <nav id="sidebar">
                <SideBarToggle tools={this.props.tools}></SideBarToggle>
                <div class="sidebar-header">
                    <img id="image-rabbit" src= {rabbit} alt="rabbit.png"></img>
                </div>
                <ul class="list-unstyled components">
                    <p>Alfy Hushairi</p>
                    <li class="active">
                        <a href="#1" onClick={this.props.tools.toggleSidebar}>Home</a>
                    </li>
                    <li>
                        <a href="#2" onClick={this.props.tools.toggleSidebar}>About</a>
                    </li>
                    <li>
                        <a href="#3" onClick={this.props.tools.toggleSidebar}>Portfolio</a>
                    </li>
                    <li>
                        <a href="#4" onClick={this.props.tools.toggleSidebar}>Contact</a>
                    </li>
                </ul>
            </nav>
        )
    }
}