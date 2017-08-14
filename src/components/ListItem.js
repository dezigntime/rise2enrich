import React from "react";

export default class NewsItem extends React.Component {
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