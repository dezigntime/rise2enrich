import React, {Component} from 'react';
import ImageTout from '../components/ImageTout';
import ListBlock from '../components/ListBlock';
import {afterSchoolClubs, athletics, advandcedPrograms} from '../data';


class SchoolImageRowSection extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {contentContainer} = styles;

        return (
            <div style={styles.contentContainer} className="d-flex flex-row justify-content-center align-items-center">
                <ListBlock title="Afterschool clubs" items={afterSchoolClubs} />
                <ListBlock title="Afterschool clubs" items={athletics} />
                <ListBlock title="Afterschool clubs" items={advandcedPrograms} />
            </div>
        )
    }
}

const styles = {
    contentContainer: {
    }
};

export default SchoolImageRowSection;