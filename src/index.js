import React, { Component } from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      // jsx - html inside of javascript file
      <div>
        <SearchBar />
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('.container'));
