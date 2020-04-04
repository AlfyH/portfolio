import React, { Component } from 'react';

class RightArrow extends Component {
    render() {
        return (
            <div className='caoursel backArrow' onClick={this.props.goToNextSlide}>
                <h1>RIGHT</h1>
            </div>
        )
    }
}

export default RightArrow;