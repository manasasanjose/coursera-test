import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class FetchDemo extends React.Component {
  

  componentDidMount() {
    // Remove the 'www.' to cause a CORS error (and see the error state)
   // axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
    var authOptions = {
    method: 'GET',
    url: 'http://localhost/tutorials/PHPpractice/Javascript/yelptest.php',
      headers:{"Content-Type":"application/json"}, 
    json: true
  };
   
  // axios.get("http://localhost/tutorials/PHPpractice/Javascript/yelptest.php",{
   
   //headers:{"Content-Type":"application/json"}})
   axios(authOptions)
      .then(res => {
        // Transform the raw data by extracting the nested posts
        //const posts = res.data.data.children.map(obj => obj.data);
		//const posts=res.data.name;
        // Update state to trigger a re-render.
        // Clear any errors, and turn off the loading indiciator.
        
		console.log(res);
      })
      .catch(err=>{console.log(err)}
        // Something went wrong. Save the error in state and re-render.
        
      );
  }

  

  

 /* render() {
    const { subreddit } = this.props;
    const { loading } = this.state;

    return (
      <div>
        //<h1>{`/r/${subreddit}`}</h1>
        {loading ? this.renderLoading() : this.renderPosts()}
      </div>
    );
  }*/
}


export default FetchDemo;
