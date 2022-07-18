// page acceuil
import React, { Component } from 'react';
// import logo from './logo.svg';
{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}

class Home extends Component {

  render() {
    if (localStorage.getItem('token')) {


      return (
        <div>
          <h1>Bienvenue sur Groupomania</h1>
          {/* afficher bouton onclick renvoi sur la page Create_post */}
          <button onClick={() => {
            window.location.href = '/Create_post';
          }}> Créer un post
          </button>
          <hr />

          {/* <input type="text" onChange={(e) => { getPosts(e.target.value) }} /> */}
          <p>posts recents</p>

        </div>
      );
      // recuperer le post de la base de données
      function getPosts() {
        fetch('http://localhost:5000/post', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        })
          .then(response => response.json())
          .then(data => {
            if (data.token) {
              localStorage.setItem('token', data.token);
              // afficher les post de la base de données sur le dom
              window.location.href = '/Home';
              console.log(data);
            }

          }
          )
          .catch(error => {
            console.log(error);
          }
          )
        getPosts();
      }

    } else {
      window.location.href = '/Login';
    }

  }

}

export default Home;