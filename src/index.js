import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

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
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('.container'));
