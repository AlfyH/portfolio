import React, { Component } from 'react';
import Slide from './Slide';
import landingData from '../../data/Landing';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import './main.css';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            length: landingData.length
        };
    }

    goToPrevSlide() {
        let index = this.state.activeIndex;
        let length = this.state.length;
        if (index < 1) {
            index = length - 1;
        }
        else {
            index--;
        }
        this.setState({
            activeIndex: index
        });
    }
    goToNextSlide() {
        let index = this.state.activeIndex;
        let length = this.state.length;
        if (index === length - 1) {
            index = 0
        }
        else {
            index++;
        }
        this.setState({
            activeIndex: index
        });
    }

    render() {
        return (
            <div className='carousel slider'>
                <div className='carousel slider-items'>
                    <LeftArrow
                        goToPrevSlide={() => this.goToPrevSlide()}
                    />
                    <div className='carousel slider-text'>
                        <Slide
                            activeIndex={this.state.activeIndex}
                        />
                    </div>
                    <RightArrow
                        goToNextSlide={() => this.goToNextSlide()}
                    />
                </div>
            </div>
        );
    }
}