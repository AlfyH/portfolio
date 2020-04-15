import React, { Component } from 'react'
import Home from '../../pages/Home';
import About from '../../pages/About';
import Portfolio from '../../pages/Portfolio';
import FullImage from '../../pages/FullImage';
import Contact from '../../pages/Contact';
import Modal from '../views/Modal';


// import MenuSide from '../components/MenuSide';


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalText: "oldText"
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            modalText: "newText"
        });
    }

    component
    render() {
        return (
            <div id="view-main">
                <Modal></Modal>
                <div id="main-content">
                    <Home tools={this.props.tools}></Home>
                    {/* <MenuSide tools={this.props.tools}></MenuSide> */}
                    <div id="main-content-after-menu">
                        <About tools ={this.props.tools}></About>
                        <Portfolio tools={this.props.tools}
                        modalText = {this.state.modalText}
                        />
                        <FullImage></FullImage>
                        <Contact tools={this.props.tools}></Contact>

                    </div>
                </div>
            </div>
        )
    }
}