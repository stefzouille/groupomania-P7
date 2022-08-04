
// affiche le formulaire de creation de post
import React from 'react';
import '../styles/ModifyPost.css';

function ModifyPost(props) {
  // recupere l'id du post a modifier dans l'url et le stocke dans la variable id 

  var url = window.location.href;
  console.log(props);
  var id = props;

  // recupere le post a modifier dans la base de donnees
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
      //
      // affiche le post recupere dans le formulaire





    })
  return (
    <div>
      <h1>modifier un post</h1>
      <hr />

      <form action="" method="put">
        <div className="form-group">
          <label htmlFor="title">Titre </label>
          <input type="text" className="form-controlTitre" id="title" placeholder="Titre" />
        </div>
        <div className="form-group">
          <label htmlFor="description">description </label>
          <textarea className="form-controlDescript" id="description" rows="10"></textarea>
        </div>
        <div>
          {/* // ajouter une image */}
          <input type="file" id="image" />


          {/* <button type="submit" className="btn btn-primary">Ajouter une image</button> */}


        </div>


        <input type="submit" value="Modifier le post" onClick={sendToApi} />

      </form>
    </div>

  );







  // recuperer les données du formulaire
  // envoie de la requete pour creer un post
  function sendToApi(e) {
    console.log(e);
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    const data = {
      title: title,
      description: description,
      image: image
    }
    fetch('http://localhost:5000/post/' + id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

      // affiche le resultat de la requete
      .then(response => response.json())
      .then(data => {
        console.log(data);
        ModifyPost();
        window.location.href = '/Home';
      }
      )
      .catch(error => {
        console.log(error);
      }
      )
  }

  // recuperer le post a modifier dans la base de donnees
  function getFormulaire() {
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
        // recupere les donnees du post a modifier
        var title = data.title;
        var content = data.content;
        var id = data.id;

        // recuperer le token de l'utilisateur connecte
        var token = localStorage.getItem('token');
        // recupere le nom de l'utilisateur connecte
        var username = localStorage.getItem('username');
        // recupere l'email de l'utilisateur connecte
        var email = localStorage.getItem('email');
      })
  }
}

export default ModifyPost;
