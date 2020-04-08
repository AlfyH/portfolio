import React, { Component } from 'react';
import webdev from '../assets/webdev.png'
import PortfolioContainer from './PortfolioContainer';

export default class Portfolio extends Component {

    render() {
        return (
            <div id = "page-portfolio">
                <section id="3">
                        <div>
                            <PortfolioContainer 
                            image ={webdev} 
                            text="sdfasdfs">
                            </PortfolioContainer>
                        <PortfolioContainer
                            image={webdev}
                            text="sdfasdfs">
                        </PortfolioContainer>
                        </div>
                </section>
            </div>
        );
    }
}