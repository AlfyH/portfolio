import React, { Component } from 'react';


var text = "WHAT";
class Modal extends Component {
    constructor(props) {
        super(props)
        if (this.props.children === "asdf") {
            text = "TADAA";
        }
        this.state = {
            modalText: text
        }
        console.log('constructor', text);
        this.setState({
            modalText: text
        })
    }

    componentWillMount(){
        console.log('cwm', text);
        this.setState({
            modalText: text
        })

    }

    componentDidMount() {
        console.log('cdm', text);
        this.setState({
            modalText: text
        })
        // this.forceUpdate(this.setState({
        //     modalText: text
        // }));
    }


    render() {
        console.log('render', text);
        return (
            <div id="myModal" className="modal">
                <div id="modal-content">
                    <span className="close">&times;</span>
                    <p>{this.state.modalText}</p>
                </div>
            </div>
        );
    }
}

export default Modal;