import React, { Component } from 'react';
import './bootstrap-3.3.7-dist/css/bootstrap.min.css';

import axios from 'axios';

class FetchDemo extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
	  term:'',
	  locations:'',
	  items:[],
	  error:''
    }

    //this.handleClick = this.handleClick.bind(this);
	this.handleChange1=this.handleChange1.bind(this);
	this.handleChange=this.handleChange.bind(this);
	this.handleSubmit=this.handleSubmit.bind(this);
  }
handleChange(event)
{
	this.setState({term:event.target.value});
}
handleChange1(event)
{
	this.setState({locations:event.target.value});
}
handleSubmit()
{
	
	var bodyFormData=	new FormData();
  bodyFormData.set('term',this.state.term);
  bodyFormData.set('locations',this.state.locations);
  console.log(this.state.term);
	var authOptions = {
    method: 'POST',
    url: 'http://localhost/tutorials/PHPpractice/Javascript/yelptest.php',
	data:bodyFormData,
      headers:{'Content-Type': 'multipart/form-data'}
    
  };
  console.log(bodyFormData);
  axios(authOptions)
	.then(response=>{
		
		//this.handleClick();
		if(response.data)
		{
		this.setState({username: response.data.name,
	  items:response.data,error:''});
		 }
		else
	  {
	  this.setState({error:"Invalid input.Please reenter",items:[]}); }
		//console.log(response);
	})
	.catch(function(response){
		console.log("error",response);
	});
  
}
 /* handleClick () {
	  //console.log("did i captureEvents");
	   var authOptions = {
    method: 'GET',
    url: 'http://localhost/tutorials/PHPpractice/Javascript/yelptest.php',
      headers:{"Content-Type":"application/json"}, 
    json: true
  };
    axios(authOptions)
      .then(response => {this.setState({username: response.data.name,
	  items:response.data});console.log("HH");console.log(response);
	  //console.log(response.data[1]['name']);
	  //console.log(this.state.items);
	  //var obj=JSON.parse(response.data);
	  })
	  
  }
*/
  render () {
	 /* var listItems=this.state.items.map(function(item){
		  return (
		  <li key="{item.name}">{item.name}</li>);
	  });*/
    return (
      <div>
	  <form>
	  <label>
	  YELPINGGGGG!!GET a list of the restaurants and their details</label><br/>
	  <label>
	  Search Keyword:
	  <input type="text" value={this.state.term}  required="required" onChange={this.handleChange}/>
	  </label>
	  <label>
	  Location:
	  <input type="text" value={this.state.locations} required="required" onChange={this.handleChange1}/>
	  </label>
      &nbsp;
		<button type="button" className="btn btn-primary"  onClick={this.handleSubmit}>Submit</button>
		</form>
		<br/><br/>
		<div className="text-danger">{this.state.error}</div>
		<table className="table table-bordered">
		<thead>
		<tr className="danger">
		<th className="text-primary">Name</th>
		<th className="text-primary">Image</th>
		<th className="text-primary">phone</th>
		<th className="text-primary">rating</th>
		<th className="text-primary">Location</th>
		<th className="text-primary">Website</th>
		</tr>
		</thead>
		<tbody>
		{this.state.items.map(item=>(
			<tr className="warning">
			<td>{item.name}</td>
			<td><img src={item.image_url}alt="Restaurant" width="100" height="100"></img></td>
			<td>{item.phone}</td>
			<td className="text-success"><strong>{item.rating}</strong></td>
			<td>{item.location["address1"]}</td>
			<td><a href={item.url}>{item.url}</a></td>
			
			
			</tr>
		))}
		
		</tbody>
		</table>
		
      </div>
    );
  }
}
export default FetchDemo;
//render(<FetchDemo />, window.document.getElementById('app'));
