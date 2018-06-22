import React, { Component } from 'react';

class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }
  handleChange(e) {
    this.setState({
      search: e.target.value
    });
  }

  render(props) {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={this.handleChange.bind(this)}
            onSubmit={this.props.handleSearch}
            value={this.state.search}
            placeholder="Search for a movie..."
          />
          {this.state.search}
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SearchInput;
