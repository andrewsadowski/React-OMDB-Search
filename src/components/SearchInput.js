import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.searchRef = React.createRef();
  }

  getSearch = e => {
    e.preventDefault();

    const search = this.searchRef.current.value;
    console.log(search);
    this.props.handleSearch(search);
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
        <input
          className="input-search"
          value="Submit"
          type="submit"
        />
      </form>
    );
  }
}

export default SearchInput;
