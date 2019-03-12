import React from 'react';
import icon from '../../img/icon-128.png';
import { hot } from 'react-hot-loader';
import axios from 'axios';
//let user;
class GreetingComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Details: []
    };
  }
  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://letmein.eu/api/posts/1')
      .then(response => {
        console.log(response.data),
        this.setState({
          //sets reponse data to Details
          loaded: true,
          Details: response.data,
        });

      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoaded: true,
          error
        });
      }
      );
  }

  render() {
    return (
        <p>{this.Details.website}</p>
        <h1>Hello people</h1>
        <img src={icon} />
    );
  }
};

return this.Details.website;
