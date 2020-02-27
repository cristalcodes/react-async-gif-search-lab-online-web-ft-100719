import React, { Component } from 'react'


export default class GifList extends Component{

  render(){
    return(
      <div>
        <ul>
            {this.props.gifs.map(gif => <li><img key={gif.url} src={gif.url} alt= "gif"/></li>)}
        </ul>
      </div>
    )
  }

}
