import React from 'react';
import { Link } from 'react-router-dom';
import { observable, computed, action, decorate } from "mobx";

const Currency = () => {
  return (
    <div>
    <Link to="/home" ><button type="button">Page 1</button></Link>
      <h3>Welcome to Currency !</h3>
      <Link to="/data" ><button type="button">Page 3</button></Link>
      <hr/>
      <Conversion ></Conversion>
    </div>
  );
}

class Conversion extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      from_currency: "",
      to_currency: "",
      curr_val: "",
    };
    this.currencies = [
	{"currency":"XCD","name":"East Caribbean dollar","symbol":"$"},
	{"currency":"EUR","name":"European euro","symbol":"€"},
	{"currency":"GEL","name":"Georgian lari","symbol":"₾"},
	{"currency":"XCD","name":"East Caribbean dollar","symbol":"$"},
	{"currency":"HTG","name":"Haitian gourde","symbol":"G"},
	{"currency":"INR","name":"Indian rupee","symbol":"₹"},
	{"currency":"ILS","name":"Israeli new sheqel","symbol":"₪"},
	{"currency":"KZT","name":"Kazakhstani tenge","symbol":"лв"},
	{"currency":"KWD","name":"Kuwaiti dinar","symbol":"د.ك"},
	{"currency":"LSL","name":"Lesotho loti","symbol":"L"},
	{ "currency": "INR", "name": "Indian rupee", "symbol": "₹" },
	{"currency":"USD","name":"U.S. Dollar","symbol":"$"}]

    this.handleFromCurrency = this.handleFromCurrency.bind(this);
    this.handleToCurrency = this.handleToCurrency.bind(this);

  }
  handleFromCurrency (event) {
    console.log(event.target.value);
    this.setState({ from_currency: event.target.value });
  }

  handleToCurrency(event) {
    console.log(event.target.value);
    this.setState({ to_currency: event.target.value });
  }

  handleCurrValChange(event){
	console.log(typeof event.target.value);
	this.setState({ curr_val: event.target.value });
 }

	
    convertCurrency =(event)=> {
	 fetch(
      `https://free.currconv.com/api/v7/convert?q=${this.state.from_currency}_${this.state.to_currency}&compact=ultra&apiKey=dd8e835c3d0a875afe5e`
    )
    	  .then(response => response.json())
          .then(
		(data) => {
			let convertValue = data[Object.keys(data)[0]];
			let finalValue = String(this.state.curr_val*convertValue);
			this.setState({ 
					result: finalValue,
					
			});
			
			},
		(error) => {
         		 this.setState({
            		 error
        	  });
		}
	)
	}
	render(){
		return (
			<div>
				<form>
					<label>
					   From_Currency:
						<select value={this.state.from_currency} onChange={this.handleFromCurrency}>
							{this.currencies.map((curr) => (
							<option value={curr.currency}>{curr.name}</option>
						))}</select>
					</label>

					<label>
					   To_Currency:
						<select value={this.state.to_currency} onChange={this.handleToCurrency}>
							{this.currencies.map((curr) => (
							<option value={curr.currency}>{curr.name}</option>
						))}</select>
					</label>
					<br/><br/>
					<input type="text"  
						placeholder="Enter value" onChange={this.handleCurrValChange.bind(this)} /><br/>


					<div>
					<input type="button" onClick={this.convertCurrency} value="Convert"/>
					<br/>
					<label>Converted Value is: {this.state.result} {this.state.to_currency}</label>
					
					</div>
				</form>
			</div>
			);
		}
}
decorate(Conversion, {
		state:observable,
		result: action});
export default Currency;