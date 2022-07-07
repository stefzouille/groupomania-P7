import React, { Component } from 'react';

class FormSignup extends Component {
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
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input type="text" className="form-control" id="userName" placeholder="userName" />
          </div>
          <input type="submit" value="Signup" onClick={sendToApi} />

        </form>
      </div>
    );

    //  recuperer les données du formulaire
    function sendToApi(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const userName = document.getElementById('userName').value;
      console.log(email, password, userName);

      const data = {
        email: email,
        password: password,
        userName: userName
      }

      fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

      })
        // affiche le resultat de la requete
        .then(response => response.json())
        .then(data => {
          console.log(data);

        }
        )

        .catch(error => {
          console.log(error);
        }
        )


    }
  }

}

export default FormSignup;

