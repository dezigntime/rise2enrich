import React from "react";
import ImageTout from '../components/ImageTout';
import axios from 'axios';
import SweetAlert from 'sweetalert-react';

const CCRCImage = require('../../images/CCRC.png');
const RiseLogo = require('../../images/RiseLogo.png');
const R2AfterschoolProgram = require('../../images/R2AfterschoolProgram.png');

const back_top_kids = require('../../images/back_top_kids.png');
const back_bottom_kids = require('../../images/back_bottom_kids.png');
const EEMImage = require('../../images/EEM.png');

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
        debugger;
        event.preventDefault();

        const fdata = new FormData();
        fdata.append('firstName', thisControl.firstName.value);
        fdata.append('lastName', thisControl.lastName.value);
        fdata.append('email', thisControl.email.value);
        fdata.append('phone', thisControl.phone.value);
        fdata.append('besttimetoreach', thisControl.hour.value + ":" + thisControl.min.value + " " + thisControl.timeofday.value);
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
                    <div className="d-flex flex-column justify-content-between align-items-center">
                        <div style={{marginTop:20}}>
                            <ImageTout degrees="10" width="400px" src={back_top_kids} />
                        </div>
                        <div style={{marginTop:50}}>
                            <ImageTout degrees="-10" width="400px" src={back_bottom_kids} />
                        </div>
                    </div>
                </div>
                <div className="col">

                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <div className="p-1">
                            <img className="img-fluid" src={"/dist/" + RiseLogo}/>
                        </div>
                        <div className="p-1">
                            <h2>RISE-To-Enrich</h2>
                        </div>
                    </div>

                    <form className="form-horizontal" role="form" method="post" action="contactus.php"
                          onSubmit={this.handleSubmit}>

                        <div className="row">
                            <div className="col">

                                <div className="form-group">
                                    <label htmlFor="firstName" className="col-sm-10 control-label">First Name</label>
                                    <div className="col-sm-10">
                                        <input ref={(firstName) => this.firstName = firstName} type="text" className="form-control"
                                               id="firstName" name="firstName" placeholder="First Name" required=""/>
                                        <br/>
                                        <p className="text-danger"></p></div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="col-sm-10 control-label">Email</label>
                                    <div className="col-sm-10">
                                        <input ref={(email) => this.email = email} type="email" className="form-control"
                                               id="email" name="email" placeholder="example@domain.com" required=""/>
                                        <br/>
                                        <p className="text-danger"></p></div>
                                </div>

                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="lastName" className="col-sm-10 control-label">Last Name</label>
                                    <div className="col-sm-10">
                                        <input ref={(lastName) => this.lastName = lastName} type="text" className="form-control"
                                               id="lastName" name="lastName" placeholder="Last Name" required=""/>
                                        <br/>
                                        <p className="text-danger"></p></div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name" className="col-sm-10 control-label">Phone Number</label>
                                    <div className="col-sm-10">
                                        <input ref={(phone) => this.phone = phone} type="text" className="form-control"
                                               id="phone" name="phone" placeholder="Phone" required=""/>
                                        <br/>
                                        <p className="text-danger"></p></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="lastName" className="col-sm-10 control-label">Best Time To Reach</label>
                                    <div className="col-sm-10">

                                        <select style={{marginRight:10}} className="custom-select" ref={(hour) => this.hour = hour}>
                                            <option selected>Select Hour</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10" selected>10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>

                                        <select style={{marginRight:10}} className="custom-select" ref={(min) => this.min = min}>
                                            <option value="00" selected>00</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                        </select>

                                        <select className="custom-select" ref={(timeofday) => this.timeofday = timeofday}>
                                            <option value="am" selected>AM</option>
                                            <option value="pm">PM</option>
                                        </select>

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
                    <hr/>
                    <div className="d-flex justify-content-end">
                        <div className="col-6">
                            44339 Beech Ave. Lacaster CA, 93534 <br/>
                            661-206-9237<br/>
                            http://rise2enrich.org/<br/>
                            Hours: M - F 2:00pm - 6:00pm
                        </div>
                        <div className="d-flex flex-row col-6 justify-content-end">
                            <img width="100" height="100" src={"/dist/" + EEMImage}/>
                        </div>
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
        margin: 10
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
        margin: 10
    }
}

export default EnrichForm;