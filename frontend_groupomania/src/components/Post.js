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
        <button className="boutoModif" onClick={() => {
          // seulement l user qui a ecrit le post peut le modifier
          if (props.post.user === localStorage.getItem('user')) {
            ModifyPost(props.post._id);
          } else {
            alert('Vous n\'avez pas le droit de modifier ce post');
          }
        }
        }>Modifier</button>
        {/* // chargement du component ModifyPost
        window.location.href = '/ModifyPost/' + props.post.id; */}



        {/* affiche button delete  */}
        <button className="boutoSupp" onClick={() => {
          // seulement l user qui a ecrit le post peut le supprimer

          if (props.post.user_id === localStorage.getItem('user_id')) {
            deletePost(props.post.id)
          } else {
            alert('Vous n\'avez pas le droit de supprimer ce post');
          }
        }
        }> Supprimer
        </button>

      </div>
    </div >
  )
}


export default Post;
