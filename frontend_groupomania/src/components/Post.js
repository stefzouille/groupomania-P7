import React from "react";
import '../styles/Card.css';
import ModifyPost from './ModifyPost';

function Post(props) {

  function deletePost(id) {
    fetch('http://localhost:5000/post/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      })
  }

  // function ModifyPost(id) {
  //   window.location.href = '/ModifyPost/' + id;
  // }

  return (
    <div className="card-cont" >
      <div className="card-body">
        <h3 className="card-title">{props.post.title}</h3>

        <p className="card-text">{props.post.description}</p>
        {/* affiche le boutton modifier */}
        <button onClick={() => {
          ModifyPost();
          window.location.href = '/ModifyPost/';


        }}> Modifier
        </button>


        {/* affiche button delete */}
        <button onClick={() => {
          deletePost(props.post.id);

        }}>Supprimer
        </button>

      </div>

    </div>
  )
}


export default Post;
