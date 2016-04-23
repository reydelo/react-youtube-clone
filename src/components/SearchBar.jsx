import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  onInputChange(term) {
    this.setState({ term: term });
    this.props.onSearchTermChange(term);
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
  }
}

export default SearchBar;
