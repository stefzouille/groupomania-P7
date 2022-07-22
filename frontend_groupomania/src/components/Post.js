import React from "react";
import '../styles/Card.css';

function Post(props) {

  return (
    <div className="card-cont" >
      <div className="card-body">
        <h3 className="card-title">{props.post.title}</h3>

        <p className="card-text">{props.post.description}</p>

      </div>

    </div>
  )
}


export default Post;
