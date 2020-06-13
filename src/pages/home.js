import React from "react";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom';
import { observable, computed, action, decorate } from "mobx";

const Home = () => {
  return (
    <div>
    <Link to="/" ><button type="button">Welcome Page</button></Link>
      <h3>Welcome to Home !</h3>
      <Link to="/time" ><button type="button">Page 2</button></Link>
      <hr/>
      <Counter ></Counter>
    </div>
  );
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }


  increment() {
    this.setState({
      count: this.state.count + 1
    });
  };
  
  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  };


  
  render() {
    return (

   <div>
   <h4>SIMPLE COUNTER</h4>
   <p>
   <button className='inc' onClick={(e) => this.increment(e)}>+</button><br/>
    <button className='dec' onClick={(e) => this.decrement(e)}>-</button>
    </p>
    <br/><br/>
    <h3>Counter value is {this.state.count}</h3>
  </div>
    );
  }
};
decorate(Counter, {
	state: observable,
	count: action,
});

export default Home;
