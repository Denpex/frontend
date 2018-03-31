import React, { Component } from "react";
import ReactDOM from "react-dom";
import Field from "./Field.jsx";
import { observe } from "./Game";


const socket = io.connect("http://" + document.domain + ":" + location.port);
console.log("Start");

socket.on("client", (msg) => {
    console.log("client");
    document.getElementById("messages").innerHTML += msg + "<br>";
});

class Ayaqdop extends Component {
	constructor(props) {
		super(props);
		this.unobserve = observe(this.handleChange.bind(this));
	}

	handleChange(gamePieces) {
		const nextState = { gamePieces };
		if (this.state) {
			this.setState(nextState);
		} else {
			this.state = nextState;
		}
	}

	componentWillUnmount() {
		this.unobserve();
	}

	render() {
		const { gamePieces } = this.state;
		return (
      <Field gamePieces={gamePieces} />
		);
	}
}

ReactDOM.render(
  <Ayaqdop />,
  document.getElementById("app")
);
