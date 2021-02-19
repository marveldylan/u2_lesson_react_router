import React, {Component} from 'react'

export default class PostCard extends Component {
  render() {
    return (
      <div className="item" key={props.id}>
        <img src={props.image} alt="Post banner" />
        <div className="modal">
          <h3>{props.title}</h3>
          <button>Read More</button>
        </div>
      </div>
    );
  }
}

