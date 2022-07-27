import React from "react";
// import '../styles/Card.css';
import ModifyPost from './ModifyPost';
import '../styles/Post.css';

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
  console.log(props.post);
  return (
    <div className="card-cont" >
      <div className="card-body">
        <h3 className="card-title">{props.post.title}</h3>

        <p className="card-text">{props.post.description}</p>

        {/* affiche l'image du post */}
        <img className="card-img-top" src={props.post.image} alt="Card image cap" />
        <hr />
        {/* affiche le boutton modifier */}
        <button onClick={() => {

          // chargement du component ModifyPost
          window.location.href = '/ModifyPost/' + props.post.id;
        }}> Modifier
        </button>
        {/* affiche button delete */}
        <button onClick={() => {
          deletePost(props.post.id);
        }}>Supprimer
        </button>
      </div>
    </div >
  )
}


export default Post;
