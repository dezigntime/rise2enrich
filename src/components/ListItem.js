import React, {Component} from "react";

class ListItem extends Component {
    constructor() {
        super();
    }

    render() {
        const {message} = this.props;
        return (
            <li dangerouslySetInnerHTML={{__html: message}}></li>
        );
    }
}

export default ListItem;