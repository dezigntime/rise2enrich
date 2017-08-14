import React from "react";
import ReactModal from 'react-modal';
import EnrichForm from './EnrichForm';

export default class Button extends React.Component {
    constructor() {
        super();

        this.state = {
            showModal: false
        }

    }

    onButtonClick() {
        this.setState({
            showModal: true
        });
    };


    handleCloseModal() {
        this.setState({showModal: false});
    }


    render() {
        return (
            <div className="row">
                <div className="col text-center">
                    <button onClick={this.onButtonClick.bind(this)} style={styles.buttonStyle}>Click here for more info
                        about After School Program
                    </button>
                </div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Rise 2 Enrich Afterschool Program"
                    onRequestClose={this.handleCloseModal.bind(this)}
                >
                    <EnrichForm handleCloseModal={this.handleCloseModal.bind(this)} />
                </ReactModal>
            </div>
        );
    }
}

const styles = {
    buttonStyle: {
        borderRadius: 10,
        backgroundColor: '#2ca7df',
        color: '#fff',
        outline: 'none',
        border: 'none',
        padding: 10,
        marginBottom: 30,
        cursor: 'pointer'
    }
}