import React, { Component } from 'react';

class PortfolioContainer extends Component {
    render() {
        return (
            <div id="portfolio-container">
                <div>
                    <img src={this.props.image} alt ="opts.img"></img>
                    <div className="inner-div">
                        {this.props.text}
                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioContainer;