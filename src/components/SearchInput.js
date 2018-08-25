import React, { Component } from 'react';
import './SearchInput.css';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.searchRef = React.createRef();
  }

  getSearch = e => {
    e.preventDefault();
    let search = this.searchRef.current.value;
    console.log(search);
    this.props.handleSearch(search);
    this.searchRef.current.value = null;
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.getSearch}>
        <input
          className="input-container"
          type="text"
          name="movieSearch"
          ref={this.searchRef}
          placeholder="Search for a movie..."
        />
      </form>
    );
  }
}

export default SearchInput;
