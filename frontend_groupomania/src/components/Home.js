// page acceuil
import React, { Component } from 'react';
import Post from './Post';
import '../styles/Home.css';

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
          posts: data
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


          <h1>Bienvenue sur Groupomania {this.data}  </h1>
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