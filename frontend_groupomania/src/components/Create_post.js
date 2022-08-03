// affiche le formulaire de creation de post
import React from 'react';
import '../styles/CreatePost.css';

function Create_post(props) {
  return (
    <div className='formcreate'>
      <h1 className='titrecreate'>Créer un post</h1>
      <hr />
      <form action="" method="post">
        <div className="form-group">
          {/* <label htmlFor="title">Titre </label> */}
          <input type="text" className="form-control" id="title" placeholder="Titre" />
        </div>
        <div className="form-group">
          {/* <label htmlFor="description">description </label> */}
          <textarea className="form-control" id="description" rows="15" placeholder="votre message ici"></textarea>
        </div>
        <div>
          {/* // ajouter une image */}
          <h3 className='h3img'>Ajouter une image (facultatif) : </h3>
          <input type="file" id="image" />
          {/* <button type="submit" className="btn btn-primary">Ajouter une image</button> */}
        </div>

        <input type="submit" className='boutoCreePost' value="Créer un post" onClick={sendToApi} />

      </form>
    </div>
  );


  // recuperer les données du formulaire
  // envoie de la requete pour creer un post
  function sendToApi(e) {
    // console.log(e);
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    const data = {
      title: title,
      description: description,
      image: image
    }
    fetch('http://localhost:5000/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify(data)
    })
      // affiche le resultat de la requete
      .then(response => response.json())
      .then(data => {
        // si le formulaire est vide, affiche un message d'erreur
        if (title === '' || description === '') {
          alert('Veuillez remplir tous les champs');
        } else {
          // alert('Votre post a été créé');
          console.log(data);
          window.location.reload();
          window.location.href = '/Home';
        }
      })
      .catch(error => {
        console.log(error);
      })
  }
}
export default Create_post;
