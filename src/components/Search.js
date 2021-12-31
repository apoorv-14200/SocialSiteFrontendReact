import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearSearch, SearchUsers } from '../actions/search';
import SearchResult from './SearchResult';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }
  handleChange = (e) => {
    let text = e.target.value;
    if (text !== '') {
      this.props.dispatch(SearchUsers(text));
    } else {
      this.props.dispatch(clearSearch());
    }
  };
  handleInputFocus = () => {
    this.setState({ focus: true });
  };

  handleInputBlur = (e) => {
    const par = document.getElementsByClassName('search');
    if (par.length != 0) {
      const isDescendant = par[0].contains(e.target);
      console.log(isDescendant);
      if (!isDescendant) {
        this.setState({ focus: false });
      }
    }
  };
  componentDidMount() {
    window.addEventListener('click', (e) => {
      this.handleInputBlur(e);
    });
  }
  componentWillUnmount() {
    window.removeEventListener('click', (e) => {
      this.handleInputBlur(e);
    });
  }

  render() {
    const { results } = this.props.search;
    console.log('RESULTS', results);
    const { focus } = this.state;
    return (
      <div className="search" onFocus={this.handleInputFocus}>
        <input onChange={this.handleChange} placeholder="Search name"></input>
        {results.length != 0 && focus != false && (
          <div className="search-results">
            {results.map((result) => {
              return (
                <SearchResult
                  onFocus={this.handleInputFocus}
                  result={result}
                  key={result._id}
                />
              );
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
