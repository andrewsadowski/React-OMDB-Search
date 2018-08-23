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

// import React, { Component } from 'react';

// class SearchInput extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       search: ''
//     };
//   }

//   submitHandler(e) {
//     e.preventDefault();
//     this.props.handlerFromParent(this.state.search);
//     this.setState({
//       search: ''
//     });
//   }

//   handleChange(e) {
//     e.preventDefault();
//     this.setState({
//       search: e.target.value
//     });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.submitHandler.bind(this)}>
//           <input
//             type="text"
//             onChange={this.handleChange.bind(this)}
//             value={this.state.search}
//             placeholder="Search for a movie..."
//           />
//           <input type="submit" />
//         </form>
//         {this.state.search}
//       </div>
//     );
//   }
// }

// export default SearchInput;
