import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchResult extends Component {
  render() {
    const { result } = this.props;
    console.log('RESULT', result);
    return (
      <Link to={`/user/${result._id}`}>
        <div className="result">
          <img src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"></img>
          <div>{result.name}</div>
        </div>
      </Link>
    );
  }
}

export default SearchResult;
