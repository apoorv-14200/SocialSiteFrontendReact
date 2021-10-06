import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearSearch, SearchUsers } from '../actions/search';
import SearchResult from './SearchResult';

class Search extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = (e) => {
    let text = e.target.value;
    if (text !== '') {
      this.props.dispatch(SearchUsers(text));
    } else {
      this.props.dispatch(clearSearch());
    }
  };
  render() {
    const { results } = this.props.search;
    console.log('RESULTS', results);
    return (
      <div className="search">
        <input onChange={this.handleChange} placeholder="Search name"></input>
        {results.length != 0 && (
          <div className="search-results">
            {results.map((result) => {
              return <SearchResult result={result} key={result._id} />;
            })}
          </div>
        )}
      </div>
    );
  }
}

function mapToState(state) {
  return {
    auth: state.auth,
    search: state.search,
  };
}
export default connect(mapToState)(Search);
