import React from "react";
import ImageTout from '../components/ImageTout';
import axios from 'axios';
import SweetAlert from 'sweetalert-react';

const CCRCImage = require('../../images/CCRC.png');
const RiseLogo = require('../../images/RiseLogo.png');
const R2AfterschoolProgram = require('../../images/R2AfterschoolProgram.png');

const SchoolImage1 = require('../../images/SchoolImage1.png');
const SchoolImage2 = require('../../images/SchoolImage2.png');

class EnrichForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            CCRCOption: 'no',
            responseMessage: '',
            alertType: '',
            showAlert : false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onConfirmAlertButton () {
        this.setState({ showAlert: false })
        this.props.handleCloseModal();
    }

    handleSubmit(event) {
        var thisControl = this;
        event.preventDefault();

        const fdata = new FormData();
        fdata.append('firstName', thisControl.firstName.value);
        fdata.append('lastName', thisControl.lastName.value);
        fdata.append('email', thisControl.email.value);
        fdata.append('phone', thisControl.phone.value);
        fdata.append('secret', 'rise2encrichform');



        var request = axios({
            method: 'post',
            url: '/api/api.php',
            data: fdata
        });

        request.then(function (response) {
            thisControl.setState({ showAlert: true });
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <ImageTout style={styles.toutItem} degrees="10" src={SchoolImage1} />
                        <ImageTout style={styles.toutItem} degrees="-10" src={SchoolImage2} />
                    </div>
                </div>
                <div className="col">

                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <div className="p-1">
                            <img className="img-fluid" src={"/dist/" + RiseLogo}/>
                        </div>
                        <div className="p-1">
                            <img className="img-fluid" src={"/dist/" + CCRCImage}/>
                        </div>
                    </div>

                    <form className="form-horizontal" role="form" method="post" action="contactus.php"
                          onSubmit={this.handleSubmit}>

                        <div className="row">
                            <div className="col">

                                <div className="form-group">
                                    <label htmlFor="firstName" className="col-sm-5 control-label">First Name</label>
                                    <div className="col-sm-10">
                                        <input ref={(firstName) => this.firstName = firstName} type="text" className="form-control"
                                               id="firstName" name="firstName" placeholder="First Name" required=""/>
                                        <br/>
                                        <p className="text-danger"></p></div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="col-sm-5 control-label">Email</label>
                                    <div className="col-sm-10">
                                        <input ref={(email) => this.email = email} type="email" className="form-control"
                                               id="email" name="email" placeholder="example@domain.com" required=""/>
                                        <br/>
                                        <p className="text-danger"></p></div>
                                </div>

                            </div>
                            <div className="col">

                                <div className="form-group">
                                    <label htmlFor="lastName" className="col-sm-5 control-label">Last Name</label>
                                    <div className="col-sm-10">
                                        <input ref={(lastName) => this.lastName = lastName} type="text" className="form-control"
                                               id="lastName" name="lastName" placeholder="Last Name" required=""/>
                                        <br/>
                                        <p className="text-danger"></p></div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name" className="col-sm-5 control-label">Phone Number</label>
                                    <div className="col-sm-10">
                                        <input ref={(phone) => this.phone = phone} type="text" className="form-control"
                                               id="phone" name="phone" placeholder="Phone" required=""/>
                                        <br/>
                                        <p className="text-danger"></p></div>
                                </div>

                            </div>
                        </div>

                    </form>

                    <div className="d-flex flex-row justify-content-start align-items-center">
                        <button style={styles.buttonCancelStyle} onClick={this.props.handleCloseModal}>Cancel</button>
                        <button onClick={this.handleSubmit.bind(this)} style={styles.buttonStyle} id="submit" name="submit" type="submit" value="Submit">Submit</button>
                    </div>


                </div>


                <SweetAlert
                    show={this.state.showAlert}
                    title="Thank You"
                    text="Your message has been successfully sent"
                    onConfirm={this.onConfirmAlertButton.bind(this)}
                />

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
        cursor: 'pointer',
        margin: '10'
    },
    buttonCancelStyle : {
        borderRadius: 10,
        backgroundColor: '#b60300',
        color: '#fff',
        outline: 'none',
        border: 'none',
        padding: 10,
        marginBottom: 30,
        cursor: 'pointer',
        margin: '10'
    }
}

export default EnrichForm;