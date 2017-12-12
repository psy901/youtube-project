import React from "react";
import VideoListItem from "./video_list_item";

// 'props' passed frmo index.js
const VideoList = props => {
  const videoItems = props.videos.map(video => {
    // console.log(video);
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
