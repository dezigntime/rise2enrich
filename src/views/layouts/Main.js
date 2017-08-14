import React from "react";
import Footer from './Footer';

import Hero from '../../components/Hero';
import Button from '../../components/Button';
import LogoSection from '../../section/LogoSection';
import SchoolImageRowSection from '../../section/SchoolImageRowSection';
import ListInfoSection from '../../section/ListInfoSection';

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
                <div>
                    <Button/>
                </div>
                <div>
                    <ListInfoSection/>
                </div>

                <Footer/>
            </div>
        );
    }
}

const styles = {};


export default Main;