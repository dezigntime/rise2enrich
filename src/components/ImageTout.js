import React, {Component} from 'react';

class ImageTout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            degrees: props.degrees || 0,
            src : "/dist/" + props.src || 'http://via.placeholder.com/350x150',
            width: props.width || '100%'
        };
    }

    componentDidMount () {
    }

    render(){

        return (
            <div style={styles.imageStyle}>
                <img  style={{transform : `rotate(${this.state.degrees}deg)`, width: this.state.width}} src={this.state.src}/>
            </div>
        )

    }

}
const styles = {
    imageStyle : {
        marginLeft: -100
    }
};

export default ImageTout;