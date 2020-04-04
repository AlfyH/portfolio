import React, { Component } from 'react';

class LeftArrow extends Component {
    render() {
        return (
            <div className='carousel backArrow' onClick={this.props.goToPrevSlide}>
                <h1>LEFT</h1>
            </div>
        )
    }
}

export default LeftArrow;