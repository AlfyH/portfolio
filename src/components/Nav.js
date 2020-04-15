import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div id="menu-nav">
                <ul>
                    {/* <li>
                        <a href="#1" style={{fontWeight:"500"}}>home</a>
                    </li> */}
                    <li>
                        <a href="#2">aboutMe</a>
                    </li>
                    <li>
                        <a href="#3">portfolio</a>
                    </li>
                    <li>
                        <a href="#4">contactMe</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Nav;