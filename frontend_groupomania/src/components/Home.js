// page acceuil
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
// import logo from './logo.svg';
{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}

// recuperer le post de la base de données
// function SeePosts() {
//   const { posts, setPosts } = useState([]);
//   useState(() => {
//     fetch('http://localhost:5000/post', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('token')
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         if (data.token) {
//           localStorage.setItem('token', data.token);
//           // afficher les post de la base de données sur le dom
//           window.location.href = '/Home';
//           console.log(data);
//         }
//         setPosts(data);
//       })
//       .catch(error => console.log(error));
//   }
//     , []);
// }
// const [isDataLoading, setDataLoading] = useState(false)
// const [posts, setPosts] = useState([])

// useEffect(() => {
//   setDataLoading(true)
//   fetch(`http://localhost:5000/post`)
//     .then((response) => response.json())
//     .then(({ }) => {

//       setDataLoading(false)
//     })
// }, [])

class Home extends Component {

  render() {
    if (localStorage.getItem('token')) {

      // function SeePosts() {
      //   const { posts, setPosts } = useState([]);
      //   useState(() => {
      //     fetch('http://localhost:5000/post', {
      //       method: 'GET',
      //       headers: {
      //         'Content-Type': 'application/json',
      //         'Authorization': 'Bearer ' + localStorage.getItem('token')
      //       }
      //     })
      //       .then(response => response.json())
      //       .then(data => {
      //         if (data.token) {
      //           localStorage.setItem('token', data.token);
      //           // afficher les post de la base de données sur le dom
      //           window.location.href = '/Home';
      //           console.log(data);
      //         }
      //         setPosts(data);
      //       })
      //       .catch(error => console.log(error));
      //   }
      //     , []);



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
          {/* afficher les posts de la base de données */}


        </div>
      )


    } else {
      window.location.href = '/Login';
    }

  }

}

export default Home;