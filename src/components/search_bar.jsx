import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  handleKey = (event) => {
    this.props.search(event.target.value);
  }

  handleFocus = () => {
    this.props.focus();
  }

  render() {
    return (
      <input 
        type="text"
        className="form-control form-search"
        onChange={this.handleKey}
        onFocus={this.handleFocus}
        onBlur={this.handleFocus}
      />
    );
  }
}

export default SearchBar;
