import React, { Component } from 'react';
// import { useNavigate } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div>
        <form action="" method="post">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted"></small>
            {/* We'll never share your email with anyone else. */}
          </div>
          {/* <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input type="text" className="form-control" id="userName" placeholder="userName" />
          </div> */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <input type="submit" value="Login" onClick={sendToApi} />

        </form>
      </div>
    );

    //  recuperer les données du formulaire
    function sendToApi(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      // const userName = document.getElementById('userName').value;

      const data = {
        email: email,
        password: password,
        // userName: userName
      }

      fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

        // affiche le resultat de la requete
        .then(response => response.json())
        .then(data => {
          if (data.token) {
            localStorage.setItem('token', data.token);
            window.location.href = '/Home';
          }

        }
        )
        .catch(error => {
          console.log(error);
        }
        )
    }
  }
}

export default Login;

