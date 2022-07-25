import React from "react";
import '../styles/Card.css';

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
      }
      )
      .catch(error => {
        console.log(error);
      }
      )
  }

  function modifyPost(id) {
    window.location.href = '/Modify_post/' + id;
  }


  // function modifyPost(id) {
  //   fetch('http://localhost:5000/post/' + id, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + localStorage.getItem('token')
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       // afficher le formulaire de modification de post

  //       window.location.href = '/Modify_post';
  //     }
  //     )


  //     .catch(error => {
  //       console.log(error);
  //     }
  //     )
  // }




  return (
    <div className="card-cont" >
      <div className="card-body">
        <h3 className="card-title">{props.post.title}</h3>

        <p className="card-text">{props.post.description}</p>
        {/* affiche le boutton modifier */}
        <button onClick={() => {
          modifyPost(props.post.id);
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
