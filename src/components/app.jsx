import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifsList from './gifs_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: ["BBkKEBJkmFbTG", "l2Je66zG6mAAZxgqI", "xT5LMpF8gl2d6Wqlm8"],
      selectedGifId: "3oriffGtQjzOueT1aE"
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

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
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
