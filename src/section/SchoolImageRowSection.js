import React, {Component} from 'react';
import ImageTout from '../components/ImageTout';

const SchoolImage1 = require('../../images/SchoolImage1.png');
const SchoolImage2 = require('../../images/SchoolImage2.png');
const SchoolImage3 = require('../../images/SchoolImage3.png');
const SchoolImage4 = require('../../images/SchoolImage4.png');

class SchoolImageRowSection extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {contentContainer} = styles;

        return (
            <div style={styles.contentContainer} className="d-flex flex-row justify-content-center align-items-center">
                <ImageTout style={styles.toutItem} degrees="10" src={SchoolImage1} />
                <ImageTout style={styles.toutItem} degrees="-10" src={SchoolImage2} />
                <ImageTout style={styles.toutItem} degrees="10" src={SchoolImage3} />
                <ImageTout style={styles.toutItem} degrees="-10" src={SchoolImage4} />
            </div>
        )
    }

}

const styles = {
    contentContainer: {
        marginTop:-50
    }
};

export default SchoolImageRowSection;