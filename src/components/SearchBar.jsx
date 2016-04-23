import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = { term: '' }
  }

  onInputChange(term) {
    this.setState({ term: term });
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Search You Tube"
          onChange={ event => this.onInputChange(event.target.value) }
        />
      </div>
    );
    // value={ this.state.term }
  }
}

export default SearchBar;
