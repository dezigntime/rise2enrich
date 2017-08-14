import React from "react";
import Footer from './Footer';

import Hero from '../../components/Hero';
import LogoSection from '../../section/LogoSection';
import SchoolImageRowSection from '../../section/SchoolImageRowSection';

require('../../sass/global.scss');

class Main extends React.Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div className="App">
                <div className="row justify-content-md-center">
                    <div className="col-7">
                        <Hero/>
                    </div>
                    <div className="col-5">
                        <LogoSection/>
                    </div>
                </div>
                <div>
                    <SchoolImageRowSection/>
                </div>


                <Footer/>
            </div>
        );
    }
}

const styles = {};


export default Main;