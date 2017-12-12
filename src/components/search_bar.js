import React, { Component } from "react"; // whenever we need to use JSX, we need to import

class SearchBar extends Component {
  constructor(props) {
    super(props); // must contain this!
    this.state = { term: "" };
  }

  render() {
    // every class needs to have this method
    return (
      <div className="search-bar">
        <div className="row">
          <div className="col-xs-3">MJ's YouTube</div>
          <div className="col-xs-9">
            <input
              value={this.state.term}
              onChange={event => {
                this.onInputChange(event.target.value);
              }}
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
