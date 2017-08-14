import React from "react";


export default class Footer extends React.Component {
	constructor() {
		super();
		this.date = new Date().getFullYear();
	}

	render() {
		return (
			<footer className="copyright">&copy; {this.date} Rise 2 Enrich. All Rights Reserved.</footer>
		);
	}
}