import React, { Component } from 'react';

/*
  Functional Component
    does this component care about state? then it's a control component
    if not - meaning it's just rendering something - use a functional component
*/

const VideoList = (props) => {
  console.log(props.videos);
  const videoItems = props.videos.map((video) => {
    return (
      <li key={video.id.videoId}>{video.snippet.title}</li>
    );
  });
  return (
    <div className="col-md-4 pull-right video-list">
      <ul>
        {videoItems}
      </ul>
    </div>
  )
};

export default VideoList
