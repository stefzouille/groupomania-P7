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

  // fonction pour recuperer l id de l utilisateur connecté
  getUserId() {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    const userId = decoded.userId;
    return userId;
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
          }
          }>Se déconnecter</button>

          {/* // afficher le nom de l id de l utilisateur connecté */}
          <h1>Bienvenue {this.getUserId()}</h1>
          <hr />
          {/* <h1>Bienvenue sur Groupomania</h1> */}
          {/* afficher bouton onclick renvoi sur la page Create_post */}
          <button onClick={() => {
            window.location.href = '/Create_post';
          }}> Créer un post
          </button>
          <hr />
          <p>posts recents</p>
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