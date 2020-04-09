import React, { Component } from 'react';

class PortfolioContainer extends Component {
    render() {
        return (
            <div id="portfolio-container">
                    <img src={this.props.image} alt ="opts.img"></img>
                    <div className="overlay">
                    <div className="text">{this.props.text}</div>
                    </div>
            </div>
        );
    }
}

export default PortfolioContainer;