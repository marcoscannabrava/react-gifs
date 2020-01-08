import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  handleClick = (event) => {
    this.props.select(event.target.id);
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`
    return (
      <img src={src} className="gif" alt="gif" id={this.props.id}
        onClick={this.handleClick} onKeyDown={this.handleClick} />
    );
  }
}

export default Gif;
