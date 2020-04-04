import React, { Component } from 'react';
import SideBarToggle from '../components/SidebarToggle';
import Nav from '../components/Nav';

class Menu extends Component {
    render() {
        return (
            <div>
                <div id="menu">
                    <div id="menu-hamburger-cont">
                        <SideBarToggle tools={this.props.tools}></SideBarToggle>
                    </div>
                    <Nav></Nav>
                </div>
            </div>
        );
    }
}

export default Menu;