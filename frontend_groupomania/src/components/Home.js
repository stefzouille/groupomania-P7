// page acceuil
import React, { Component } from 'react';
import Post from './Post';
import '../styles/Home.css';
import jwt_decode from 'jwt-decode';


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
          posts: data
        });
      })
      .catch(error => {
        console.log(error);
      }
      )
  }



  // afficher l userName 
  getUserName() {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    const userName = decoded.userName;
    return userName;
  }

  render() {
    if (localStorage.getItem('token')) {
      const { posts } = this.state;
      return (
        <div>
          {/* // afficher le bouton se deconnecter si user connecté */}
          <button className="btn btn-danger" onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/';
          }}>Déconnexion
          </button>

          {/* // afficher le nom de l id de l utilisateur connecté */}
          <h1>Bienvenue {this.getUserName()}</h1>
          <hr />

          {/* afficher bouton onclick renvoi sur la page Create_post */}
          <button className='boutoCree' onClick={() => {
            window.location.href = '/Create_post';
          }}> Créer un post
          </button>
          <hr />
          <p>Les posts recents : </p>

          {/* afficher les posts */}
          {posts.map(post => {
            return (
              <Post key={post.id} post={post} />
            )
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