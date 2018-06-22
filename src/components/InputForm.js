import React, { Component } from 'react';
import axios from 'axios';

class InputForm extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get(`https://www.omdbapi.com/?apikey=16cd9897&t=caddyshack`)
      .then(res => {
        console.log(res);
        this.setState({
          movieTitle: res.data.Title,
          moviePoster: res.data.Poster,
          movieDescription: res.data.Plot
        });
      })
      .catch(err => console.log(err));
  }
  hj;

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <form>
        <h1>Search for a movie</h1>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default InputForm;
