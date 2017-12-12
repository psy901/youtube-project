import React from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import _ from "lodash"; // importing lodash

import SearchBar from "./search_bar";
import VideoList from "./video_list";
import VideoDetail from "./video_detail";

const API_KEY = "AIzaSyDRLB_RKmmDc6paRlS-yL6C2f7qD8BvK-I";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }; // list of videos

    this.videoSearch("laravel");
  }
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // this.setState({ videos }) --> works same with same names
      // console.log(data);
    });
  }
  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 500);

    return (
      <div>
        {/*<SearchBar onSearchTermChange={ (term) => this.videoSearch(term) } />*/}
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
