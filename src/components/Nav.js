import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div id="menu-nav">
                <ul>
                    <li>
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
            </div>
        );
    }
}

export default Nav;