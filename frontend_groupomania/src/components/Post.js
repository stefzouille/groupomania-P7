import React from "react";
// import '../styles/Card.css';
import ModifyPost from './ModifyPost';
import '../styles/Post.css';
import jwt_decode from 'jwt-decode';




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

  // afficher l userName 
  function getUserName() {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    const userName = decoded.userName;
    return userName;
  }



  return (
    <div className="card-cont" >
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.content}</p>
        <h2> {getUserName()}</h2>
        {/* <h3 className="card-title">{props.post.title}</h3> */}

        <p className="card-text">{props.post.description}</p>

        {/* affiche l'image du post */}
        <img src={props.post.image} alt="post" className="card-img" />

        {/* <img className="card-img-top" src={props.post.image} alt="Card cap" /> */}
        <hr />

        {/* affiche le boutton modifier */}
        <button className="boutoModif" onClick={() => {
          // seulement l user qui a ecrit le post peut le modifier
          console.log(props.post.userCreated);
          console.log(localStorage.getItem('userId'));
          if (props.post.userCreated == localStorage.getItem('userId')) {
            // envoie vers la page de modification du post et recupere le post a modifier
            window.location.href = '/modifyPost/' + props.post.id;



            // window.location.href = 'http://localhost:3000/modifyPost/' + props.post.id;
            console.log('ok');
            return <ModifyPost id={props.post.id} />



            // window.location.href = '/modifyPost';

            // ModifyPost(props.post.id)
          } else {
            alert('Vous n\'avez pas le droit de modifier ce post');
          }
        }
        }>Modifier</button>

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
