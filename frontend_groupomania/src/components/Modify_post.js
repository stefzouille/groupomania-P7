
// affiche le formulaire de creation de post
import React from 'react';

function Modify_post() {
  return (
    <div>
      <h1>modifier un post</h1>
      <hr />
      <form action="" method="put">
        <div className="form-group">
          <label htmlFor="title">Titre </label>
          <input type="text" className="form-control" id="title" placeholder="Titre" />
        </div>
        <div className="form-group">
          <label htmlFor="description">description </label>
          <textarea className="form-control" id="description" rows="10"></textarea>
        </div>
        <input type="submit" value="Créer un post" onClick={sendToApi} />

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

    const data = {
      title: title,
      description: description
    }
    fetch('http://localhost:5000/post/' + data, {
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
        window.location.href = '/Home';
      }
      )
      .catch(error => {
        console.log(error);
      }
      )
  }

}
export default Modify_post;
