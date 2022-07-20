// page acceuil
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import Post from './Post';

// import logo from './logo.svg';
{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}



class Home extends Component {

  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/post', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => {

        this.setState({
          posts: data,

        });
      })
      .catch(error => {
        console.log(error);
      }
      )
  }


  render() {
    if (localStorage.getItem('token')) {

      const { posts } = this.state;



      return (
        <div>
          <h1>Bienvenue sur Groupomania</h1>
          {/* afficher bouton onclick renvoi sur la page Create_post */}
          <button onClick={() => {
            window.location.href = '/Create_post';
          }}> Créer un post
          </button>
          <hr />
          <p>posts recents</p>
          {this.state.posts.map((post) => {
            return <Post key={post.id} data={post} />

          }
          )}


        </div>
      )


    } else {
      window.location.href = '/Login';
    }

  }
}

export default Home;