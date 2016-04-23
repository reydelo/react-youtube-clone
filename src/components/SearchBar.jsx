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
        <h5>Search YouTube</h5>
        <input
          value={ this.state.term }
          onChange={ event => this.onInputChange(event.target.value) }
        />
      </div>
    )
  }
}

export default SearchBar;
