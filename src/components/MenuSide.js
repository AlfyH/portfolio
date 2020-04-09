import React, { Component } from 'react';
import SideBarToggle from './SidebarToggle';

class MenuSide extends Component {
    render() {
        return (
            <div>
                <div id="menu-side">
                    <div id="menu-hamburger-cont">
                        <SideBarToggle tools={this.props.tools}></SideBarToggle>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuSide;