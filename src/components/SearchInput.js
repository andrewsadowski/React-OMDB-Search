import React, { Component } from "react";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  submitHandler(e) {
    e.preventDefault();
    this.props.handlerFromParent(this.state.search);
    this.setState({
      search: ""
    });
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      search: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler.bind(this)}>
          <input
            type="text"
            onChange={this.handleChange.bind(this)}
            value={this.state.search}
            placeholder="Search for a movie..."
          />
          <input type="submit" />
        </form>
        {this.state.search}
      </div>
    );
  }
}

export default SearchInput;
