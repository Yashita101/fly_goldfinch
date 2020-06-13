import React from "react";
import {Link} from "react-router-dom";
import ReactDOM from "react-dom";
import { observable, computed, action, decorate } from "mobx";

const Time = () => {
  return (
    <div>
    <Link to="/home" ><button type="button">Page 1</button></Link>
      <h3>Welcome to Time !</h3>
      <Link to="/data" ><button type="button">Page 3</button></Link>
      <hr/>
      <Clock ></Clock>
    </div>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render() {
    return (
      <p >
        The time is {this.state.time}.
      </p>
    );
  }
}
decorate(Clock, {
	state: observable,
	tick: action,
});
	
export default Time;