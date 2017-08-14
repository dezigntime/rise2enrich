import React, {Component} from 'react';

const CCRCImage = require('../../images/CCRC.png');
const RiseLogo = require('../../images/RiseLogo.png');
const R2AfterschoolProgram = require('../../images/R2AfterschoolProgram.png');

class LogoSection extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {contentContainer} = styles;

        return (
            <div>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <div className="p-1">
                        <img className="img-fluid" src={"/dist/" + RiseLogo}/>
                    </div>
                    <div className="p-1">
                        <img className="img-fluid" src={"/dist/" + CCRCImage}/>
                    </div>
                </div>

                <div>
                    <div className="">
                        <img src={"/dist/" + R2AfterschoolProgram}/>
                    </div>
                    <div style={contentContainer}>
                        Affordable $65 a week for all activities. <br/>
                        CCRC Accepted.<br/>
                        Free lunch and snack.<br/>
                        Free trasportation to us from any local<br/>
                        school in the area.<br/>
                    </div>
                </div>

            </div>
        )
    }

}

const styles = {
    contentContainer: {
        backgroundColor: '#2ca7df',
        padding: '20px 20px 45px 20px',
        color: '#fff',
        borderRadius: 5
    }
};

export default LogoSection;