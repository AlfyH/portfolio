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
                        <a href="#1">Home</a>
                    </li>
                    <li>
                        <a href="#2">About</a>
                    </li>
                    <li>
                        <a href="#3">Portfolio</a>
                    </li>
                    <li>
                        <a href="#4">Contact</a>
                    </li>
                </ul>
            </nav>
        )
    }
}