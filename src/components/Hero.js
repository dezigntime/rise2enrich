import React, {Component} from 'react';

const heroImage = require('../../images/hero.png');

class Hero extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <img className="img-fluid" src={"/dist/"+ heroImage}/>
            </div>
        )
    }

}
const styles = {
};

export default Hero;