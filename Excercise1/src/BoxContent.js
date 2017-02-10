import React, { Component } from 'react';
import './bttn.css';
import './bulma.css';
import {SubBox} from './SubBox';

export class BoxContent extends Component {
	state = {
		SelectQuizStart:'1',
	}

	BoxSelect = (event) =>{
		this.setState({SelectQuizStart: event.target.value});	
	}
	render(){
		var NumberBox = [];
		for(var i=0; i<=this.state.SelectQuizStart-1;i++){
			NumberBox.push(i);
		}
		return(
			<div className="card">
              <div className="card">
              	<h3>First column</h3>
              	<hr />
				<p className="control">
		            <span>Select Number </span>
		            <span className="select">
		              <select onChange={this.BoxSelect}>
		                <option value="1" defaultValue>1</option>
		                <option value="2">2</option>
		                <option value="3">3</option>
		                <option value="4">4</option>
		              </select>
		            </span>
		        </p>
		        <div className="card-image">
		            {
	          	  	 	NumberBox.map(function(i) {
	          	  	 		return <SubBox index={i} key={i} />;
	          	  	 	})
	          	  	 }
          	  	</div>
              </div>
            </div>
		);
	}
}
