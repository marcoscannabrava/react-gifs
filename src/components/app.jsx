import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifsList from './gifs_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [{ id: "BBkKEBJkmFbTG"}, { id: "l2Je66zG6mAAZxgqI"}, { id: "xT5LMpF8gl2d6Wqlm8"}],
      selectedGifId: "3oriffGtQjzOueT1aE",
      focused: false
    };
  }

  search = (query) => {
    giphy("rYXvtl9GJuBXWpt9lcTXeVh2JVMXeFXM").search(query, (err, res) => {
      console.log(res.data);
      this.setState({
        gifs: res.data
      });
    });
  }

  select = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  focus = () => {
    this.setState({
      focused: !this.state.focused
    });
  }

  classNamesForGif = () => {
    if (this.state.focused) {
      return "selected-gif focused";
    }
    return "selected-gif";
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} focus={this.focus} />
          <div className={this.classNamesForGif()}>
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifsList gifs={this.state.gifs} select={this.select} />
        </div>
      </div>
    );
  }
}

export default App;
