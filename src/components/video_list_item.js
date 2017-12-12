import React from "react";

const VideoListItem = props => {
  // also can use ({ video }) as an argument

  const video = props.video;

  // function defined in index.js is passed down to here.
  const onVideoSelect = props.onVideoSelect;

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
