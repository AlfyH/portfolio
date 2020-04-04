import React, { Component } from 'react';

class Flikity extends Component {
    render() {
        return (
            <div class="gallery js-flickity"
                data-flickity-options='{ "freeScroll": true }'>
                <div class="gallery-cell"></div>
                <div class="gallery-cell"></div>
                <div class="gallery-cell"></div>
                <div class="gallery-cell"></div>
                <div class="gallery-cell"></div>
            </div>
        );
    }
}

export default Flikity;