import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';

import { apiKey } from '../config.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('Game of Thrones');
  }

  videoSearch(term) {
    YTSearch({ key: apiKey, term: term}, (videos) => {
      console.log(videos);
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('.container'));
