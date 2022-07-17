// affiche le formulaire de creation de post
import React from 'react';

function Create_post() {
  return (
    <div>
      <h1>Créer un post</h1>
      <hr />
      <form action="" method="post">
        <div className="form-group">
          <label htmlFor="title">Titre</label>
          <input type="text" className="form-control" id="title" placeholder="Titre" />
        </div>
        <div className="form-group">
          <label htmlFor="content">Contenu</label>
          <textarea className="form-control" id="content" rows="3"></textarea>
        </div>
        <input type="submit" value="Créer un post" onClick={sendToApi} />

      </form>
    </div>
  );
}
export default Create_post;



// envoie de la requete pour creer un post
function sendToApi(e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  const data = {
    title: title,
    content: content
  }

  fetch('http://localhost:5000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

    // affiche le resultat de la requete
    .then(response => response.json())
    .then(data => {
      console.log(data);
    }
    )
    .catch(error => {
      console.log(error);
    }
    )
}


