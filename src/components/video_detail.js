import React from "react";

const VideoDetail = props => {
  const video = props.video;
  if (!video) {
    return <div>loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `http://www.youtube.com/embed/${videoId}`;

  // Note: it is same thing as ... (note on 'BACK TICK!!!')
  // const url = 'http://www.youtube.com/embed/' + videoId;
  console.log(url);

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} className="embed-responsive-item" />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
