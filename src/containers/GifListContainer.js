import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component{

  state = {
    gifs : []
  }

  componentDidMount(){
    this.fetchGifs()
  }

  render(){
    return(
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch fetchGifs={this.fetchGifs} />
      </div>
    )
  }

  fetchGifs = (q) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        gifs: data.data.slice(0,3).map(gif => ({url: gif.images.original.url}) )
      })
    })
  }


}
