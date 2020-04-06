import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div id="menu-nav">
                <ul>
                    <li>
                        <a href="#1">home</a>
                    </li>
                    <li>
                        <a href="#2">aboutUs</a>
                    </li>
                    <li>
                        <a href="#3">portfolio</a>
                    </li>
                    <li>
                        <a href="#4">contactUs</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Nav;