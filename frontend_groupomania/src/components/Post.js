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


  // afficher l user name qui a créer le post
  function getUserName(id) {
    fetch('http://localhost:5000/post/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data.userName;
      }).catch(error => {
        console.log(error);
      }
      )
  }

  // afficher le contenu du post
  function getContent(id) {
    fetch('http://localhost:5000/post/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })

      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data.description;
      }).catch(error => {
        console.log(error);
      }
      )
  }

  // afficher le contenu du post
  function getTitle(id) {
    fetch('http://localhost:5000/post/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })

      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data.title;
      }).catch(error => {
        console.log(error);
      }
      )
  }

  function getDescription(id) {
    fetch('http://localhost:5000/post/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })

      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data.description;
      }).catch(error => {
        console.log(error);
      }
      )
  }
  // afficher le contenu du post
  function getDate(id) {
    fetch('http://localhost:5000/post/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })

      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data.date;
      }).catch(error => {
        console.log(error);
      }
      )
  }
  // afficher le contenu du post
  function getId(id) {
    fetch('http://localhost:5000/post/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })

      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data.id;
      }).catch(error => {
        console.log(error);
      }
      )
  }

  // // afficher le contenu du post
  // function getUserId(id) {
  //   fetch('http://localhost:5000/post/' + id, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + localStorage.getItem('token')
  //     }
  //   })

  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       return data.userId;
  //     }).catch(error => {
  //       console.log(error);
  //     }
  //     )
  // }

  // afficher le contenu du post
  function getImage(id) {
    fetch('http://localhost:5000/post/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })

      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data.image;
      }).catch(error => {
        console.log(error);
      }
      )
  }



  return (
    <div className="card-cont" >
      <div className="card-body">
        {/* <h5 className="card-title">{props.title}</h5> */}
        {/* <p className="card-text">{props.content}</p> */}
        {/* <h2> {getUserName()}</h2> */}
        <h3 className="card-title">{props.post.title}</h3>
        <p className="card-text">{props.post.description}</p>

        <p className="card-text">{props.post.date}</p>
        <p className="card-text">{props.post.userName}</p>


        {/* <p className="card-text">{props.post.description}</p> */}

        {/* affiche l'image du post */}
        <img src={props.post.image} alt="post" className="card-img" />

        {/* <img className="card-img-top" src={props.post.image} alt="Card cap" /> */}
        <hr />

        {/* affiche le boutton modifier */}
        <button className="boutoModif" onClick={() => {
          // seulement l user qui a ecrit le post peut le modifier
          // if (getUserId(props.post.id) === getUserId(localStorage.getItem('userId'))) {


          //   console.log('ok');
          //   return <ModifyPost id={props.post.id} />

          // } else {
          //   alert('Vous n\'avez pas le droit de modifier ce post');
          // }
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
