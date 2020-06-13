import React from "react";
import {Link} from "react-router-dom";
import { observable, computed, action, decorate } from "mobx";

const Data = () => {
  return (
    <div>
    <Link to="/time" ><button type="button">Page 2</button></Link>
      <h3>Welcome to Data !</h3>
      <Link to="/currency" ><button type="button">Page 4</button></Link>
      <hr/>
      <Names ></Names>
    </div>
  );
}


class Names extends React.Component {
  constructor(props) {
    super(props);

    this.state =  {
    loading: true,
    people: []
   };
  }
  

  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
    .then(response => response.json())
          .then(
		(data) => {
			this.setState({ 
				people: data, 
				loading: false });
			},
		(error) => {
         		 this.setState({
            		 loading: true,
            		 error
          });
        }
 ) 
 }

  render() {
      if (this.state.loading) {
            return <div>
			List Of Full Names:<br/>
			Loading ...</div>;
          }
     return (
      
      <div>List Of Full Names:<br/>
	<ul>
        {this.state.people.map(person => (
          <div key={person.first + person.last}>
            
            <div><li>{person.first} {person.last}</li></div>
             <br/>
             </div>
        ))}
      </ul></div>
    );
  }

}
decorate(Names, {
	state: observable,
});

export default Data;

