// page acceuil
import React, { Component } from 'react';

class Home extends Component {
  render() {
    if (localStorage.getItem('token')) {

      return (
        <div>
          <h1>Bienvenue sur Groupomania</h1>
          <p> .</p>
        </div>
      );
    } else {
      window.location.href = '/Login';
    }
  }
}

export default Home;