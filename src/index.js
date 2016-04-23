import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

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
        <div>
          <SearchBar onSearchTermChange={videoSearch} />
        </div>
        <div>
          <div className="col-md-8">
            <h5>Video Player goes here</h5>
          </div>
          <VideoList videos={this.state.videos} />
        </div>
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('.container'));
