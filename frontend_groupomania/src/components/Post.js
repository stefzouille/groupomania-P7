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



  console.log(props);
  return (
    <div className="card-cont" >
      <div className="card-body">
        <h3 className="card-title">{props.post.title}</h3>

        <p className="card-text">{props.post.description}</p>
        {/* // affiche le bouton like */}
        <button className="btnLikes" onClick={() => {
          if (props.post.likes == true) {
            props.post.likes = false;
          } else {
            props.post.likes = true;
          }
        }

        }>

          {props.post.likes == true ? 'Unlike' : 'Like'}

        </button>


        <i className="fas fa-heart"></i>

        <p className="card-text">{props.post.likes}</p>

        {/* affiche l'image du post */}
        <img className="card-img-top" src={props.post.image} alt="Card cap" />
        <hr />

        {/* affiche le boutton modifier */}
        <button className="boutoModif" onClick={() => {
          // seulement l user qui a ecrit le post peut le modifier
          if (props.userCreated === localStorage.getItem('userId')) {
            ModifyPost(props.post.id);
          } else {
            alert('vous ne pouvez pas modifier ce post');
          }
          // if (props.post.userCreated === localStorage.getItem('userId')) {
          //   ModifyPost(props.post.id)
          // } else {
          //   alert('Vous n\'avez pas le droit de supprimer ce post');
          // }
        }
        }>Modifier</button>

        {/* affiche button delete  */}
        <button className="boutoSupp" onClick={() => {
          // seulement l user qui a ecrit le post peut le supprimer
          if (props.post.userCreated === localStorage.getItem('userId')) {
            deletePost(props.post.id)
          } else {
            alert('Vous n\'avez pas le droit de supprimer ce post');
          }

          console.log(props.post.userCreated);
          // if (props.post.id === localStorage.getItem('userId')) {
          //   deletePost(props.post.id)
          // } else {
          //   alert('Vous n\'avez pas le droit de supprimer ce post');
          // }
        }
        }> Supprimer
        </button>

      </div>
    </div >
  )
}


export default Post;
