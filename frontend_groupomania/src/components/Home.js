// page acceuil
import React, { Component } from 'react';


class Home extends Component {
  render() {
    if (localStorage.getItem('token')) {

      return (
        <div>
          <h1>Bienvenue sur Groupomania</h1>
          {/* afficher bouton onclick renvoi sur la page Create_post */}
          <button onClick={() => {
            window.location.href = '/Create_post';
          }
          }>
            Créer un post
          </button>
          <hr />


        </div>
      );
    } else {
      window.location.href = '/Login';
    }
  }
}

export default Home;